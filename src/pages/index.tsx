import { NextPage } from "next";
import { Dashboard } from "../components/Dashboard";
import { Layout } from "../components/layouts/Layout";

const Home: NextPage = () => (
  <Layout>
    <Dashboard />
  </Layout>
);
export default Home;
