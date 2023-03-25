import { NextPage } from "next";
import React, { Suspense } from "react";
import { Loader } from "src/components/Elements/Loader/Loader";
import { Layout } from "src/components/Layout/Layout";
import { Work } from "src/features/works/components/Work";

const Index: NextPage = () => (
  <Layout>
    <section className="bg-gray-50">
      <Suspense
        fallback={
          <div className="w-full">
            <Loader className="mx-auto" />
          </div>
        }
      >
        <Work />
      </Suspense>
    </section>
  </Layout>
);
export default Index;
