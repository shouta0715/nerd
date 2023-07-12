import Script from "next/script";

export const AdSenseScript = () => {
  return (
    <Script
      async
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8148476979627677"
    />
  );
};
