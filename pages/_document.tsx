import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Team FRC 6070 from Glenforest Secondary School"
        />
        <meta
          property="og:description"
          content="Team FRC 6070 from Glenforest Secondary School"
        />
        <meta
          name="twitter:description"
          content="Team FRC 6070 from Glenforest Secondary School"
        />
        <meta property="og:image" content="/meta-img.png" />
        <meta name="twitter:image" content="/meta-img.png" />
        <link rel="icon" href="/6070-logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
