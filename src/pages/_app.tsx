import { Maintenance } from "src/features/pages/maintenance";
import "../styles/tailwind.css";
import { AppPropsWithLayout } from "src/libs/next/types";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true") {
    return <Maintenance />;
  }

  const getLayout = Component.getLayout ?? ((page) => page);
  const getTitle = Component.getTitle ?? ((page) => page);

  return getLayout(getTitle(<Component {...pageProps} />, pageProps));
};

export default App;
