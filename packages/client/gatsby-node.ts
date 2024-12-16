/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query {
      allStrapiPost {
        edges {
          node {
            strapi_id
          }
        }
      }
    }
  `);

  data.allStrapiPost.edges.forEach((node) =>
    actions.createPage({
      path: `/media/${node.node.strapi_id}`,
      component: path.resolve('./src/templates/PostDetail.tsx'),
      context: { id: node.node.strapi_id },
    }),
  );
};
