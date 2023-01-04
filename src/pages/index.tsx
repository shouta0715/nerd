import Head from "next/head";
import { Layout } from "../components/layout/Layout";
import { useQueryPosts } from "../hooks/posts/useQueryPosts";

const Home = () => (
  <Layout>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </Layout>
);

export default Home;
