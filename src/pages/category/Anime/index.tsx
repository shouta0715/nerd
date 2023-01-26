import { NextPage } from "next";
import React from "react";
import { Layout } from "../../../components/layouts/Layout";
import { PostItem } from "../../../components/posts/InviteItem";
import { useQueryPostsByCategory } from "../../../hooks/invites/useQueryInviteByCategory";
import { Categories_Enum } from "../../../generated/graphql";
import { PostLoading } from "../../../components/layouts/loading/PostLoading";

const Index: NextPage = () => {
  const { posts, isLoading } = useQueryPostsByCategory(Categories_Enum.Anime);

  if (isLoading) {
    return (
      <Layout>
        <PostLoading />
      </Layout>
    );
  }

  return (
    <Layout>
      <ul className="relative p-4 py-4 md:p-6">
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export default Index;
