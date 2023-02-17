import { createGetInitialProps } from "@mantine/next";
import Documents, { Html, Head, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Documents {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="常にリアルタイムで感想を共有しよう"
          />
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
  }
}
