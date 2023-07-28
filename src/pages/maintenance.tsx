import { OnlyProviderLayout } from "src/components/Layouts/BasicLayout";
import { Maintenance } from "src/features/pages/maintenance";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Maintenance />;

Page.getLayout = OnlyProviderLayout;
Page.getTitle = Meta(() => "メンテナンス中 - Nerd");

export default Page;
