import React from "react";
import { ErrorPage } from "src/components/Elements/Error/items/ErrorPage";
import { OnlyProviderLayout } from "src/components/Layouts/BasicLayout";
import { InternalServerError } from "src/libs/error";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Index: NextPageWithLayout = () => (
  <ErrorPage {...new InternalServerError()} />
);

Index.getLayout = OnlyProviderLayout;
Index.getTitle = Meta(() => "500 - Nerd");

export default Index;
