import { XMLParser } from "fast-xml-parser";
import { Item, ResultData } from "src/types/dataType";

export const parseXml = (data: string) => {
  const todayDatas: ResultData[] = [];
  const parser = new XMLParser();
  const xmlDoc = parser.parse(data);
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
    const isInclude = todayDatas?.some((resultData) => resultData.TID === +TID);

    if (isInclude) return;

    todayDatas.push({
      TID: +TID,
      title: title.replace("「", "").replace("」", ""),
      number: +number,
      start_time,
      end_time,
    });
  });

  return todayDatas;
};
