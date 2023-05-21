import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="ja-JP">
    <Head>
      <meta charSet="utf-8" />
      <link href="/favicon.ico" rel="icon" />
      <meta content="リアルタイムで感想を共有しよう" name="description" />
      <meta content="Nerd" property="og:site_name" />
      <meta content="Nerd" property="og:title" />
      <meta
        content="常にリアルタイムで感想を共有しよう"
        property="og:description"
      />
    </Head>
    <body className="font-inter">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
