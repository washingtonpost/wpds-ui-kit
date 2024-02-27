import React from "react";
import Head from "next/head";

interface pageSeoConfig {
  title: string;
  description: string;
}

export const NextSeo: React.FC<pageSeoConfig> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
