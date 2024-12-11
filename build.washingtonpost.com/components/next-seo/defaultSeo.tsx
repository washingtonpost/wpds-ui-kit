import React from "react";
import Head from "next/head";

interface SeoConfig {
  defaultTitle: string;
  description: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    site_name: string;
    title: string;
    images: // array of images
    {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
    url: string;
    title: string;
    description: string;
  };
}

interface DefaultSeoProps {
  seoConfig: SeoConfig;
}

export const DefaultSeo: React.FC<DefaultSeoProps> = ({ seoConfig }) => {
  const env = process.env.VERCEL_ENV || "";

  return (
    <Head>
      <title>{seoConfig.defaultTitle}</title>
      <meta name="description" content={seoConfig.description} />
      <meta property="og:type" content={seoConfig.openGraph.type} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />
      <meta property="og:url" content={seoConfig.openGraph.url} />
      <meta property="og:site_name" content={seoConfig.openGraph.site_name} />
      <meta property="og:title" content={seoConfig.openGraph.title} />
      {seoConfig.openGraph.images.map((image, index) => (
        <meta key={index} property="og:image" content={image.url} />
      ))}
      <meta name="twitter:site" content={seoConfig.twitter.site} />
      <meta name="twitter:card" content={seoConfig.twitter.cardType} />
      <meta name="twitter:url" content={seoConfig.twitter.url} />
      <meta name="twitter:title" content={seoConfig.twitter.title} />
      <meta
        name="twitter:description"
        content={seoConfig.twitter.description}
      />
      <meta name="twitter:creator" content={seoConfig.twitter.handle} />
      <meta
        name="robots"
        content={`${
          env === "production" ? "index,follow" : "noindex, nofollow"
        }`}
      />
    </Head>
  );
};
