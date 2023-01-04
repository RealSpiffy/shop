import React from "react";
import Head from "next/head";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_TITLE,
} from "@/constants/meta";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const Meta: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <title>{title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE}</title>
      <meta name="description" content={description ?? DEFAULT_DESCRIPTION} />
      <meta property="og:image" content={image ?? DEFAULT_IMAGE} />
    </Head>
  );
};

export default Meta;
