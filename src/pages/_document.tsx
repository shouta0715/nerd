import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="ja-JP">
    <Head>
      <meta charSet="utf-8" />
      <meta
        content="匿名でアニメの感想を投稿してみんなと感想を共有しよう！"
        name="description"
      />
      <meta content="Nerd" property="og:site_name" />
      <meta content="Nerd" property="og:title" />
      <meta
        content="匿名でアニメの感想を投稿してみんなと感想を共有しよう！"
        property="og:description"
      />
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <link href="/logo.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/logo.svg" rel="icon" sizes="32x32" type="image/svg+xml" />
      <link href="/logo.svg" rel="icon" sizes="16x16" type="image/svg+xml" />
      <link href="/site.webmanifest" rel="manifest" />
      <link color="#5bbad5" href="/logo.svg" rel="mask-icon" />
      <meta content="#da532c" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />
    </Head>
    <body className="font-inter">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
