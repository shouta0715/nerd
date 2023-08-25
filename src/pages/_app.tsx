import { HydrationBoundary } from "@tanstack/react-query";
import { Maintenance } from "src/features/pages/maintenance";
import "../styles/tailwind.css";
import { Meta } from "src/libs/meta";

import { AppPropsWithLayout } from "src/libs/next/types";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return <Maintenance />;
  }

  const getLayout = Component.getLayout ?? ((page) => page);
  const getTitle = Component.getTitle ?? Meta();

  return getLayout(
    getTitle(
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>,
      pageProps
    ),
    false
  );
};

export default App;
