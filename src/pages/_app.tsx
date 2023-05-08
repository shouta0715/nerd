import "../styles/tailwind.css";
import { AppPropsWithLayout } from "src/libs/next/types";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const getTitle = Component.getTitle ?? ((page) => page);

  return getLayout(getTitle(<Component {...pageProps} />, pageProps));
};

export default App;
