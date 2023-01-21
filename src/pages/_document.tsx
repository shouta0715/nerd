import Documents, { Html, Head, Main, NextScript } from "next/document";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();

export class _Document extends Documents {
  static getInitialProps = getInitialProps;
}

const Document = () => (
  <Html lang="en">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="常にリアルタイムで感想を共有しよう" />
      <meta property="og:site_name" content="Anime" />
      <meta property="og:title" content="Anime" />
      <meta
        property="og:description"
        content="常にリアルタイムで感想を共有しよう"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
