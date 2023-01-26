import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
import { Dashboard } from "../components/Dashboard";
import { Layout } from "../components/layouts/Layout";
import { useGetInvitesQuery } from "../generated/graphql";

const Home: NextPage = () => (
  <Layout>
    <Dashboard />
  </Layout>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const queryKey = useGetInvitesQuery.getKey({});
  const request = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  await queryClient.prefetchQuery(
    queryKey,
    useGetInvitesQuery.fetcher(request, {})
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 5,
  };
};
