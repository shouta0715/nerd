import { GetSeasonWorksQuery } from "src/generated/graphql";

export type Work = GetSeasonWorksQuery["works"][0];
