import React from "react";
import { ErrorPage } from "src/components/Error/items/ErrorPage";
import { OnlyProviderLayout } from "src/components/Layouts/BasicLayout";
import { NotFoundError } from "src/libs/error";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Index: NextPageWithLayout = () => <ErrorPage {...new NotFoundError()} />;

Index.getLayout = OnlyProviderLayout;
Index.getTitle = Meta(() => "404 - Nerd");

export default Index;
