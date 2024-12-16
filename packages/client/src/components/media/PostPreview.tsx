import React, { useState, useEffect } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { PostContentType } from '@client/src/pages/media';
import useMedia from '@client/src/hooks/common/useMedia';
import { Link } from 'gatsby';

const PostPreview = ({ post }: { post: PostContentType }) => {
  const { title, created, thumbnail } = post;
  const imgSrc = thumbnail[0].localFile.publicURL;
  const to = post.strapi_id;

  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const curMedia = useMedia();

  const handleHover = () => {
    if (curMedia === 'mobile') {
      setIsActive((prev) => !prev);
    } else if (curMedia === 'desktop') {
      setIsHover((prev) => !prev);
    }
  };

  return (
    <Container
      to={`${to}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onMouseUp={handleHover}
      onMouseDown={handleHover}
      isActive={isActive}
    >
      <ImgWrapper isActive={isActive}>
        <Img css={{ $$background: `url(${imgSrc})` }} />
      </ImgWrapper>
      <TypoWrapper isActive={isActive}>
        <PostTitle>{title}</PostTitle>
        <PostDate>{String(created)}</PostDate>
      </TypoWrapper>
    </Container>
  );
};

const Img = styled('div', {
  width: '100%',
  height: '100%',
  background: `$$background`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
});

const Container = styled(Link, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
  },
  '@tabletSm': {
    flex: '0 0 40%',
    minWidth: '270px',
    maxWidth: '270px',
  },
  '@tabletLg': {
    flex: '1 1 30%',
    marginBottom: '75px',
  },
  '@desktop': {
    flex: '1',
    marginBottom: '75px',
  },

  variants: {
    isActive: {
      true: {
        '&:active': {
          background: '$actionHover',
        },
      },
      false: {
        background: 'none',
      },
    },
    isHover: {},
  },
});

const ImgWrapper = styled('div', {
  borderRadius: '8px',

  '@mobile': {
    width: '328px',
    height: '220px',
  },
  '@tabletSm': {
    width: '100%',
    height: '245px',
  },

  variants: {
    isActive: {
      true: {
        '&:active': {
          background: '$backdropOverlay30',
        },
      },
      false: {
        background: 'none',
      },
    },
    isHover: {},
  },
});

const TypoWrapper = styled('div', {
  display: 'flex',

  '@mobile': {
    padding: '32px 10px',
    gap: '24px',
    flexDirection: 'column',
  },
  '@desktop': {
    padding: '32px 0',
  },

  variants: {
    isActive: {
      true: {
        '&:active': {
          background: '$actionHover',
        },
      },
      false: {
        background: 'none',
      },
    },
    isHover: {},
  },
});

const PostTitle = styled('h1', {
  color: '$textPrimary',

  '@mobile': {
    subtitle2: true,
  },
});

const PostDate = styled('h2', {
  color: '$textSecondary',

  '@mobile': {
    footer: true,
  },
});

export default PostPreview;
