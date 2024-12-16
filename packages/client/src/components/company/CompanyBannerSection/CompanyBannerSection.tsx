import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import useMedia from '@client/src/hooks/common/useMedia';
import { useTranslation } from 'react-i18next';
import i18n from '@client/src/locale/i18n';
import { motion, Variants } from 'framer-motion';

const DESKTOPBANNERSRC = '../../../assets/images/company/company_banner.png';
const MOBILEBANNERSRC =
  '../../../assets/images/company/company_mobile_banner.png';

const onlyOpacity: Variants = {
  initial: { opacity: 0 },
  active: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const bottomOpacity: Variants = {
  initial: { opacity: 0, y: 10 },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const descBottomOpacity: Variants = {
  initial: { opacity: 0, y: 10 },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: 0.5,
    },
  },
};

const CompanyBannerSection = () => {
  const curMedia = useMedia();
  const { t } = useTranslation();

  return (
    <Container>
      {curMedia === 'desktop' ? (
        <ImageWrapper initial="initial" animate="active" variants={onlyOpacity}>
          <StaticImage
            src={`${DESKTOPBANNERSRC}`}
            alt="company_desktop_banner"
            layout="fullWidth"
          />
          <GradationDivider />
        </ImageWrapper>
      ) : (
        <ImageWrapper>
          {MOBILEBANNERSRC && (
            <StaticImage src={`${MOBILEBANNERSRC}`} alt="" layout="fullWidth" />
          )}
        </ImageWrapper>
      )}

      <TypoWrapper>
        <Vision initial="initial" animate="active" variants={onlyOpacity}>
          SSVT VISION
        </Vision>
        <Title
          initial="initial"
          animate="active"
          variants={bottomOpacity}
        >{`조선해양의 미래,\n스마트 해양을 이끌어갈\n기술 벤처`}</Title>
        {curMedia === 'desktop' ? (
          <Description
            initial="initial"
            animate="active"
            variants={descBottomOpacity}
          >{`투명하고 신뢰할 수 있는 블록체인 기술의 가치와 함께 인공지능 기술을 기반으로\n조선, 해운, 항만산업을 연결하여 높은 가치를 제공하고자 끊임없이 고민하고 노력하는 기업입니다.`}</Description>
        ) : (
          <Description
            initial="initial"
            animate="active"
            variants={descBottomOpacity}
          >
            투명하고 신뢰할 수 있는 블록체인 기술의 가치와 함께 인공지능 기술을
            기반으로 조선, 해운, 항만산업을 연결하여 높은 가치를 제공하고자
            끊임없이 고민하고 노력하는 기업입니다.
          </Description>
        )}
      </TypoWrapper>
    </Container>
  );
};

const Container = styled('section', {
  overflow: 'hidden',
  position: 'relative',

  '@mobile': {
    paddingTop: '$mobileHeaderHeight',
    paddingBottom: '34px',
    display: 'flex',
    flexDirection: 'column',
  },

  '@tabletSm': {
    paddingTop: 'calc($mobileHeaderHeight + 16px)',
    paddingBottom: '63px',
  },

  '@tabletLg': {
    paddingTop: 'calc($mobileHeaderHeight + 64px)',
    paddingBottom: '100px',
  },

  '@desktop': {
    height: '100vh',
    paddingTop: '$desktopHeaderHeight',
    paddingBottom: 0,
    marginBottom: '75px',
    display: 'block',
  },
});

const GradationDivider = styled('div', {
  width: '100%',
  height: '63px',
  position: 'absolute',
  bottom: -30,
  background:
    'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 69.27%)',
});

const ImageWrapper = styled(motion.div, {
  '@mobile': {},

  '@tabletSm': {},

  '@tabletLg': {},

  '@desktop': {
    zIndex: -'1',
    padding: 0,
    right: 0,
    bottom: 0,
    width: '70vw',
    position: 'absolute',
  },
});

const TypoWrapper = styled('div', {
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
    padding: '0 0 0 100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const Vision = styled(motion.div, {
  color: '$textPrimary2',

  '@mobile': {
    subtitle3: true,
    marginBottom: '18px',
  },
  '@tabletSm': {
    subtitle2: true,
    marginBottom: '28px',
  },
});

const Title = styled(motion.h1, {
  whiteSpace: 'pre-wrap',

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

export default CompanyBannerSection;
