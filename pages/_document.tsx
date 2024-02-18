import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          id="hightlight.js-id"
          src="/highlight/highlight.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
