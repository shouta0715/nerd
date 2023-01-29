import { Box } from "@mantine/core";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { InviteItem } from "../../../features/invites/InviteItem";
import { Layout } from "../../../components/Layout/Layout";
import {
  useGetInvitesByCategoryQuery,
  Category_Enum,
} from "../../../generated/graphql";
import { useQueryInvitesByCategory } from "../../../hooks/invites/useQueryInviteByCategory";
import { categoryProcessing } from "../../../hooks/utils/categoryProcessing";

const Index: NextPage = () => {
  const router = useRouter();
  const { data } = useQueryInvitesByCategory(
    Category_Enum[router.query.category as keyof typeof Category_Enum]
  );

  return (
    <Layout>
      <Box
        component="ul"
        bg={`${
          categoryProcessing(
            Category_Enum[router.query.category as keyof typeof Category_Enum]
          ).color
        }.0`}
        className={`relative space-y-4 p-4 py-4 md:p-6 ${
          !data?.invites?.length ? "p-0 md:p-0" : ""
        }`}
      >
        {data?.invites?.map((invite) => (
          <InviteItem key={invite.id} invite={invite} />
        ))}
      </Box>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(Category_Enum).map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const queryKey = useGetInvitesByCategoryQuery.getKey({
    category:
      Category_Enum[context.params?.category as keyof typeof Category_Enum],
  });
  const request = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  await queryClient.prefetchQuery(
    queryKey,
    useGetInvitesByCategoryQuery.fetcher(request, {
      category:
        Category_Enum[context.params?.category as keyof typeof Category_Enum],
    })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};

export default Index;
