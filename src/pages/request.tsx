import { NextPage } from "next";
import React from "react";
import { Layout } from "src/components/Layout/Layout";
import { Request } from "src/features/request/components/Request";

const Index: NextPage = () => (
  <Layout>
    <Request />
  </Layout>
);

export default Index;
