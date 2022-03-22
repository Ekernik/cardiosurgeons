import React from 'react';
import Head from 'next/head';
import { SEOType } from '@/types/SEO';

const SEO: React.FC<SEOType> = ({
  details: {
    title,
    description,
    pageLink,
    type = 'website',
    imageLink = 'https://heartteamspb.com/static/images/bg-doctors.webp',
  },
}) => (
  <Head>
    <title>{title}</title>
    <meta property='og:title' content={title} />
    <meta name='description' content={description} />
    <meta property='og:description' content={description} />
    <meta property='og:type' content={type} />
    <meta property='og:image' content={imageLink} />
    <meta property='og:url' content={pageLink} />
  </Head>
);

export default SEO;
