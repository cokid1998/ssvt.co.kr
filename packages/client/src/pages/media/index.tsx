import React from 'react';
import type { HeadFC } from 'gatsby';
import MainLayout from '@client/src/components/base/MainLayout';
import MediaBanner from '@client/src/components/media/MediaBanner';
import PostPreview from '@client/src/components/media/PostPreview';
import { styled } from '@client/src/styles/stitches.config';
import { useStaticQuery, graphql } from 'gatsby';
import PageNation from '@client/src/components/media/PageNation';
import SEO from '@client/src/components/common/SEO';

export interface PostContentType {
  created: Date;
  title: string;
  thumbnail: { localFile: { publicURL: string } }[];
  // eslint-disable-next-line camelcase
  strapi_id: number;
}

const MediaPage = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPost(sort: { order: ASC, fields: strapi_id }) {
        nodes {
          title
          created
          thumbnail {
            localFile {
              publicURL
            }
          }
          strapi_id
        }
      }
    }
  `);

  return (
    <MainLayout>
      <MediaBanner />
      <PostsContainer>
        {data.allStrapiPost.nodes.map((node: PostContentType) => (
          <PostPreview key={node.title} post={node} />
        ))}
      </PostsContainer>

      <PageNation />
    </MainLayout>
  );
};

const PostsContainer = styled('div', {
  '@mobile': {
    padding: '20px 16px 80px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
  },

  '@tabletSm': {
    padding: '20px 20px 80px 20px',
    alignItems: 'normal',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '18px',
    justifyContent: 'center',
  },
  '@tabletLg': {
    padding: '40px 24px 80px 24px',
  },
  '@desktop': {
    maxWidth: '1140px',
    margin: '0 auto',
    gap: '100px',
    justifyContent: 'flex-start',
  },
});

export default MediaPage;

export const Head: HeadFC = () => <SEO title="SSVT | MEDIA" />;
