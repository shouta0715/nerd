import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <meta charSet="utf-8" />
      <link href="/favicon.ico" rel="icon" />
      <meta content="常にリアルタイムで感想を共有しよう" name="description" />
      <meta content="Anime" property="og:site_name" />
      <meta content="Anime" property="og:title" />
      <meta
        content="常にリアルタイムで感想を共有しよう"
        property="og:description"
      />
    </Head>
    <body className="font-futura">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
