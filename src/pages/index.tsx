import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetStaticProps, NextPage } from "next";
// import { Box } from "@mantine/core";
import { Layout } from "../components/Layout/Layout";
import { useGetCategoryQuery, useGetInvitesQuery } from "../generated/graphql";
// import { InviteItem } from "../features/invites/InviteItem";

const Home: NextPage = () => (
  // const { data } = useQueryInvites();

  <Layout>
    {/* <Box
        component="ul"
        bg="indigo.0"
        className={`relative space-y-4 p-4 py-4 md:p-6 ${
          !data?.invites?.length ? "p-0 py-0 md:p-0" : ""
        }`}
      >
        {data?.invites?.map((invite) => (
          <InviteItem key={invite.id} invite={invite} />
        ))}
      </Box> */}
  </Layout>
);
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();
  const queryKey = useGetInvitesQuery.getKey({});
  const request = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);
  const categoryQueryKey = useGetCategoryQuery.getKey({});

  await queryClient.prefetchQuery(
    queryKey,
    useGetInvitesQuery.fetcher(request, {})
  );

  await queryClient.prefetchQuery(
    categoryQueryKey,
    useGetCategoryQuery.fetcher(request, {})
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};
