/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
    apiURL: process.env.STRAPI_API_URL,
    accessToken: process.env.STRAPI_TOKEN,
    collectionTypes: [
        {
            singularName: "article",
            queryParams: {
                publicationState: process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
                populate: {
                    category: { populate: "*" },
                    cover: "*",
                    blocks: {
                        populate: "*",
                    },
                },
            },
        },
    ],
    singleTypes: [],
    remoteFileHeaders: {
        /**
         * Customized request headers
         * For http request with a image or other files need authorization
         * For expamle: Fetch a CDN file which has a security config when gatsby building needs
         */
        Referer: "https://your-site-domain/",
        // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
    },
};

module.exports = {
    siteMetadata: {
        title: `gatsby`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        'gatsby-plugin-mdx',
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-source-strapi`,
            options: strapiConfig,
        },
    ]
};