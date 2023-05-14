import React from "react";
import { Season } from "src/features/pages/season";
import { Today } from "src/features/pages/today";
import { Weekly } from "src/features/pages/weekly";
import { TopPage } from "src/libs/next/types";

export const Nerd = ({
  buildDate,
  todayData,
  seasonData,
  weeklyData,
  registeredError,
}: TopPage) => (
  <div className="space-y-1 bg-white">
    <Today
      buildDate={buildDate}
      data={todayData}
      registeredError={registeredError}
    />
    <Season buildDate={buildDate} data={seasonData} />
    <Weekly buildDate={buildDate} data={weeklyData} />
  </div>
);
