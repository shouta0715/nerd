import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html>
    <Head>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="常にリアルタイムで感想を共有しよう" />
      <meta property="og:site_name" content="Anime" />
      <meta property="og:title" content="Anime" />
      <meta
        property="og:description"
        content="常にリアルタイムで感想を共有しよう"
      />
    </Head>
    <body className="font-futura">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
