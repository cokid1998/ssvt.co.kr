import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import {
  onlyOpacity,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';

const PANKIBANNERSRC = '../../../../assets/images/tech/panki/panki_banner.png';

const PankiBannerSection = () => (
  <Container>
    <ImageWrapper
      initial="initial"
      animate="active"
      variants={onlyOpacity(0.5)}
    >
      <StaticImage src={`${PANKIBANNERSRC}`} alt="" layout="fullWidth" />
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
        PANKI
      </ServiceTitle>
      <Description
        initial="initial"
        animate="active"
        variants={opacityAppearBottom(8, 0.5, 0.5)}
      >
        {`효율적인 선박 건조 품질관리를 위한\nICT 기반 조선소 스마트 워크 솔루션`}
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

const Container = styled(motion.section, {
  overflow: 'hidden',
  position: 'relative',
  height: '100vh',
  '@mobile': {
    paddingTop: 'calc($mobileHeaderHeight + 17px)',
    paddingBottom: '46px',
    display: 'flex',
    flexDirection: 'column',
  },

  '@tabletSm': {
    paddingTop: 'calc($mobileHeaderHeight + 33px)',
    paddingBottom: '63px',
  },

  '@tabletLg': {
    paddingTop: 'calc($mobileHeaderHeight + 91px)',
    paddingBottom: '100px',
  },

  '@desktop': {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

const ImageWrapper = styled(motion.div, {
  position: 'relative',

  '@mobile': {
    left: '14px',
  },

  '@tabletSm': {
    left: '31px',
  },

  '@tabletLg': {
    left: '43px',
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

  '@mobile': {
    padding: '0 25px',
  },

  '@tabletSm': {
    padding: '0 50px',
  },
  '@tabletLg': {
    padding: '0 80px',
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

export default PankiBannerSection;
