import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import useMedia from '@client/src/hooks/common/useMedia';

const MediaBanner = () => {
  const curMedia = useMedia();

  return (
    <Container>
      <TitleWrapper>
        <Title>Media</Title>
        <Description>SMART SHIP NEWS</Description>
      </TitleWrapper>

      {(curMedia === 'tabletLg' || curMedia === 'desktop') && (
        <ImageWrapper>
          <StaticImage
            src="../../../assets/images/media/media_banner.png"
            alt=""
            layout="fullWidth"
          />
        </ImageWrapper>
      )}
    </Container>
  );
};

const Container = styled('div', {
  '@mobile': {
    padding: 'calc($mobileHeaderHeight + 30px) 25px 30px 25px',
  },
  '@tabletSm': {
    padding: 'calc($mobileHeaderHeight + 60px) 60px 60px',
  },
  '@tabletLg': {
    padding: 'calc($mobileHeaderHeight + 100px) 80px 100px 96px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10%',
  },
  '@desktop': {
    justifyContent: 'normal',
  },
});

const ImageWrapper = styled('div', {
  '@tabletLg': {
    width: '100%',
  },
});

const TitleWrapper = styled('div', {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  '@tabletSm': {
    gap: '10px',
  },
  '@tabletLg': {},
  '@desktop': {
    gap: '16px',
  },
});

const Title = styled('h1', {
  color: '$textPrimary',

  '@mobile': {
    heading7: true,
  },
  '@tabletSm': {
    heading2: true,
  },
  '@tabletLg': {
    heading1: true,
  },
});

const Description = styled('h2', {
  color: '$textSecondary',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body2: true,
  },
  '@desktop': {
    subtitle1: true,
  },
});

export default MediaBanner;
