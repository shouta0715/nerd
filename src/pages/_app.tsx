import "../styles/tailwind.css";
import { AppPropsWithLayout } from "src/libs/next/types";

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default App;
