import { dehydrate, QueryClient } from "@tanstack/react-query";
import { GraphQLClient } from "graphql-request";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { InviteItem } from "../../../components/invites/InviteItem";
import { Layout } from "../../../components/layouts/Layout";
import { InviteLoading } from "../../../components/layouts/loading/InviteLoading";
import {
  Categories_Enum,
  useGetInvitesByCategoryQuery,
} from "../../../generated/graphql";
import { useQueryInvitesByCategory } from "../../../hooks/invites/useQueryInviteByCategory";

const Index: NextPage = () => {
  const router = useRouter();
  const { isLoading, data } = useQueryInvitesByCategory(
    Categories_Enum[router.query.category as keyof typeof Categories_Enum]
  );

  if (isLoading) {
    return (
      <Layout>
        <InviteLoading />
      </Layout>
    );
  }

  return (
    <Layout>
      <ul className="relative p-4 py-4 md:p-6">
        {data?.invites?.map((invite) => (
          <InviteItem key={invite.id} invite={invite} />
        ))}
      </ul>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const queryKey = useGetInvitesByCategoryQuery.getKey({
    category:
      Categories_Enum[context.params?.category as keyof typeof Categories_Enum],
  });
  const request = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT as string);

  await queryClient.prefetchQuery(
    queryKey,
    useGetInvitesByCategoryQuery.fetcher(request, {
      category:
        Categories_Enum[
          context.params?.category as keyof typeof Categories_Enum
        ],
    })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Index;
