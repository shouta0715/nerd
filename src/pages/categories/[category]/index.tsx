// import { Box } from "@mantine/core";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
// import { useRouter } from "next/router";
import React from "react";
// import { InviteItem } from "../../../features/invites/InviteItem";
import { Layout } from "../../../components/Layout/Layout";
import { getAllMediaTypes } from "../../../libs/DynamicPaths";

// import { categoryProcessing } from "../../../hooks/utils/categoryProcessing";

const Index: NextPage = () => (
  // const router = useRouter();
  // const { data } = useQueryInvitesByCategory(
  //   Category_Enum[router.query.category as keyof typeof Category_Enum]
  // );

  <Layout>
    {/* <Box
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
      </Box> */}
  </Layout>
);
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllMediaTypes();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = new QueryClient();
  const slug = context.params;
  console.log(slug);

  // const request = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 3,
  };
};

export default Index;
