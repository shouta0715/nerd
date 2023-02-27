import { GetSeasonWorksQuery } from "src/graphql/work/workQuery.generated";

export type Work = GetSeasonWorksQuery["works"][0];
