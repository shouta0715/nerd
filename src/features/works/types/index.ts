import { GetSeasonWorksQuery } from "src/gql/graphql";

export type Work = GetSeasonWorksQuery["works"][0];
