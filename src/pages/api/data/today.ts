/* eslint-disable prefer-arrow/prefer-arrow-functions */
import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { NextApiRequest, NextApiResponse } from "next";

type ResultData = {
  TID: number;
  title: string;
  number: number;
  start_time: string;
  end_time: string;
};

type TvFeed = {
  "tv:genre": string;
  "tv:startDatetime": string;
  "tv:endDatetime": string;
  "tv:iepgUrl": string;
  "tv:performer": string;
};

type Item = {
  title: string;
  link: string;
  description: string;
  "dc:date": string;
  "dc:publisher": string;
  "tv:feed": TvFeed;
};

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const todayDatas: ResultData[] = [];
  const parser = new XMLParser();

  try {
    const URL =
      "https://cal.syoboi.jp/rss?filter=0&start=today&count=1000&days=1&titlefmt=%24(SubTitleB)%3B%24(TID)";
    const data = await axios.get(URL).then((response) => response.data);
    const xmlDoc = parser.parse(data as string);
    const items: Item[] = xmlDoc["rdf:RDF"].item;

    items.forEach((item) => {
      const titleTag = item.title;
      const splitTitleTag = titleTag?.split(";");
      const TID = splitTitleTag?.[splitTitleTag.length - 1];
      const titleAndNumber = splitTitleTag?.[0].split(" ");
      const number = titleAndNumber?.[0].replace("#", "");
      const title = titleAndNumber?.slice(1).join(" ");
      const start_time = item["tv:feed"]["tv:startDatetime"];
      const end_time = item["tv:feed"]["tv:endDatetime"];

      if (
        !TID ||
        !number ||
        !title?.trim() ||
        Number.isNaN(Number(number)) ||
        !start_time ||
        !end_time
      )
        return;
      const isInclude = todayDatas?.some(
        (resultData) => resultData.TID === +TID
      );

      if (isInclude) return;

      todayDatas.push({
        TID: +TID,
        title: title.replace("「", "").replace("」", ""),
        number: +number,
        start_time,
        end_time,
      });
    });

    res.status(200).json(todayDatas);
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
