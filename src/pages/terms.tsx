import { DisableAuthLayout } from "src/components/Layouts/BasicLayout";
import { Terms } from "src/features/pages/terms";
import { Meta } from "src/libs/meta";
import { NextPageWithLayout } from "src/libs/next/types";

const Page: NextPageWithLayout = () => <Terms />;

Page.getLayout = DisableAuthLayout;

Page.getTitle = Meta(() => "利用規約 - Nerd");

export default Page;
