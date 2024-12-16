import type { GatsbyConfig } from 'gatsby';
import path from 'path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.GATSBY_STRAPI_SERVER_HOST,
  accessToken: process.env.GATSBY_STRAPI_API_TOKEN,
  collectionTypes: ['posts', 'post'],
};

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'SSVT',
    author: '에스에스브이티',
    description: '스마트 해양을 이끌어 갈 에스에스브이티입니다',
    siteUrl: `https://develop.d5jamrwz2x9u6.amplifyapp.com/`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@client': path.join(__dirname, './'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          placeholder: 'tracedSVG',
          quality: 100,
          breakpoints: [360, 600, 1280],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Roboto',
            weights: ['500'],
          },
          {
            family: 'Noto Sans KR',
            weights: ['400', '500', '700'],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'SSVT',
        start_url: '/',
        icon: `${__dirname}/src/assets/favicon/Favicon.svg`,
      },
    },
  ],
};

export default config;
