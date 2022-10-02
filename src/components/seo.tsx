import * as React from "react";
import { FC } from "react";
import { Helmet } from "react-helmet";

const SEO: FC<{
  title: string;
  author: string;
  description: string;
  keywords: string;
}> = props => (
  <Helmet
    htmlAttributes={{
      lang: "en",
    }}
  >
    <title>{props.title}</title>
    <meta name="author" content={props.author} />
    <meta name="description" content={props.description} />
    <meta name="keywords" content={props.keywords} />

    <meta property="og:title" content={props.title} />
    <meta
      property="og:image"
      content="https://aclypse.me/aclypse_logo_black.svg"
    />
    <meta property="og:description" content={props.description} />

    <link rel="manifest" href="/site.webmanifest" />
  </Helmet>
);

export default SEO;
