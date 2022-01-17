import React from "react";
import Head from 'next/head';

interface Props {
    details: {
        title: string,
        description: string,
        pageLink: string,
        type: string,
        imageLink: string
    }
}

const SEO: React.FC<Props> = ({ details: { title, description, pageLink, type = 'website', imageLink = "https://heartteamspb.com/static/images/bg-doctors.webp" } }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                property="og:title"
                content={title}
            />
            <meta
                name="description"
                content={description}
            />
            <meta
                property="og:description"
                content={description}
            />
            <meta property="og:type" content={type} />
            <meta property="og:image" content={imageLink} />
            <meta
                property="og:url"
                content={pageLink}
            />
        </Head>
    );
}

export default SEO;