import { DisableAuthLayout } from "src/components/Layouts/BasicLayout";
import { DataPage } from "src/features/pages/data";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <DataPage />;

Page.getLayout = DisableAuthLayout;
Page.getTitle = Meta(() => "データについて - Nerd");

export default Page;
