import { Maintenance } from "src/features/pages/maintenance";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Maintenance />;

Page.getLayout = (page) => page;
Page.getTitle = Meta(() => "メンテナンス中 - Nerd");

export default Page;
