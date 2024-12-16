import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import {
  onlyOpacity,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';

const OILPASSBANNER =
  '../../../../assets/images/tech/oilpass/oilpass_banner.png';

const OilPassBannerSection = () => (
  <Container>
    <ImageWrapper
      initial="initial"
      animate="active"
      variants={onlyOpacity(0.5)}
    >
      <StaticImage src={`${OILPASSBANNER}`} alt="" layout="fullWidth" />
    </ImageWrapper>

    <TypoWrapper>
      <Title initial="initial" animate="active" variants={onlyOpacity(0.5)}>
        SERVICE
      </Title>
      <ServiceTitle
        initial="initial"
        animate="active"
        variants={opacityAppearBottom(8, 0.5)}
      >
        OILPASS
      </ServiceTitle>
      <Description
        initial="initial"
        animate="active"
        variants={opacityAppearBottom(8, 0.5, 0.5)}
      >
        {`블록체인 기반 원산지증명서 발행과 실시간 유통이력
관리를 통한 선박유 부정유통방지 어플리케이션`}
      </Description>
    </TypoWrapper>
  </Container>
);

const ServiceTitle = styled(motion.h1, {
  whiteSpace: 'pre-wrap',
  color: '$textPrimary',

  '@mobile': {
    heading7: true,
    marginBottom: '18px',
  },
  '@tabletSm': {
    heading2: true,
    marginBottom: '28px',
  },
  '@tabletLg': {
    heading1: true,
  },
});

const Container = styled('section', {
  overflow: 'hidden',
  position: 'relative',
  height: '100vh',

  '@mobile': {
    paddingTop: 'calc($mobileHeaderHeight + 28px)',
    paddingBottom: '91px',
    display: 'flex',
    flexDirection: 'column',
  },

  '@tabletSm': {
    paddingTop: 'calc($mobileHeaderHeight + 69px)',
    paddingBottom: '101px',
  },

  '@tabletLg': {
    paddingTop: 'calc($mobileHeaderHeight + 148px)',
    paddingBottom: '200px',
  },

  '@desktop': {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

const ImageWrapper = styled(motion.div, {
  position: 'relative',

  '@mobile': {
    marginBottom: '27px',
  },

  '@tabletSm': {
    marginBottom: '10px',
  },

  '@tabletLg': {
    marginBottom: '52px',
  },

  '@desktop': {
    width: '50vw',
    padding: 0,
    position: 'absolute',
    left: 'auto',
    right: 0,
    top: '20%',
  },
});

const TypoWrapper = styled('div', {
  position: 'relative',
  flex: 1,
  zIndex: 1,

  '@mobile': {
    padding: '0 25px',
  },

  '@tabletSm': {
    padding: '0 50px',
  },

  '@desktop': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 0 0 100px',
  },
});

const Title = styled(motion.h1, {
  whiteSpace: 'pre-wrap',
  color: '$textPrimary2',

  '@mobile': {
    subtitle3: true,
    marginBottom: '18px',
  },

  '@tabletSm': {
    subtitle2: true,
    marginBottom: '28px',
  },

  '@tabletLg': {},

  '@desktop': {},
});

const Description = styled(motion.p, {
  whiteSpace: 'pre-wrap',
  color: '$textSecondary',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
  '@tabletLg': {
    body2: true,
  },
  '@desktop': {
    subtitle1: true,
  },
});

export default OilPassBannerSection;
