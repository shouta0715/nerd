import { ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import { AutoCompleteData } from "src/features/episodes/types";
import { getSeasonWorks } from "src/features/lists/api/router";
import { Autocomplete } from "src/features/lists/components/Autocomplete";
import { ListTitle } from "src/features/lists/components/ListTitle";
import { SeasonWorksList } from "src/features/lists/components/SeasonWorks";
import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

type Props = {
  data: GetSeasonWorksQuery;
  autoCompleteData: AutoCompleteData[];
};

const SeasonWorks: NextPage<Props> = ({ data, autoCompleteData }) => (
  <section className="animate-fadeUp">
    <header className="sticky top-0 z-[100] border-x-0 border-y-0 border-b border-solid border-b-indigo-200 bg-white/95">
      <div className="container mx-auto bg-transparent py-3">
        <div className="relative flex w-full items-center px-4">
          <Link className="mr-6 flex justify-center md:mr-4 " href="/">
            <ArrowSmallLeftIcon className="h-6 w-6 text-black" />
          </Link>
          <Autocomplete autoCompleteData={autoCompleteData} />
        </div>
      </div>
    </header>
    <div className="container mx-auto">
      <div className="p-6">
        <ListTitle title="今期のアニメ" />
        <SeasonWorksList data={data} />
      </div>
    </div>
  </section>
);

export default SeasonWorks;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getSeasonWorks(null);
  const autoCompleteData: AutoCompleteData[] = data?.works.map((work) => ({
    title: work.series_title,
    value: work.series_title,
  }));

  return {
    props: {
      data,
      autoCompleteData,
    },
  };
};
