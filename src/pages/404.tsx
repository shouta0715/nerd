import { NextPage } from "next";
import React from "react";
import { ErrorPage } from "src/components/Elements/Error/items/ErrorPage";
import { NotFoundError } from "src/libs/error";

const Index: NextPage = () => <ErrorPage {...new NotFoundError()} />;

export default Index;
