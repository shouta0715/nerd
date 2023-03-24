import { NextPage } from "next";
import React, { Suspense } from "react";
import { Loader } from "src/components/Elements/Loader/Loader";
import { Work } from "src/features/works/components/Work";

const Index: NextPage = () => (
  <section>
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
);
export default Index;
