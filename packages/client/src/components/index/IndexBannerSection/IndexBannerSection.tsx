import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, Variants } from 'framer-motion';
import { Link } from 'gatsby';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import Button from '../../common/Button';
import Icon from '../../common/Icon';

const BANNER_SRC = '../../../assets/images/index/landing_banner.png';

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

const opacityAppearBottom: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const IconSize = {
  mobile: { width: '100px', height: '35px' },
  tabletSm: { width: '160px', height: '55px' },
  tabletLg: { width: '160px', height: '55px' },
  desktop: { width: '180px', height: '60px' },
};

const IndexBannerSection = () => {
  const { width: iconWidth, height: iconHeight } = useMediaSvgSize(IconSize);

  return (
    <Container>
      <ImageWrapper initial="initial" animate="active" variants={onlyOpacity}>
        <StaticImage src={`${BANNER_SRC}`} alt="" />
      </ImageWrapper>

      <TypoWrapper
        initial="initial"
        animate="active"
        transition={{ staggerChildren: 0.5 }}
      >
        <IconWraper variants={opacityAppearBottom}>
          <Icon width={iconWidth} height={iconHeight} icon="Logo" />
        </IconWraper>

        <Description variants={opacityAppearBottom}>
          {`에스에스브이티는 해양산업에 특화된 블록체인 및 인공지능 기술을\n기반으로 조선, 해운, 항만 산업을 연결하여 보다 높은 가치를 제공해줍니다.`}
        </Description>

        <ButtonWrapper>
          <Link to="/company">
            <Button
              variants={onlyOpacity}
              size="large"
              endIcon={<Icon icon="ArrowForward" />}
            >
              About Us
            </Button>
          </Link>
        </ButtonWrapper>
      </TypoWrapper>
    </Container>
  );
};

const ButtonWrapper = styled('div', {
  width: 'fit-content',
});

const IconWraper = styled(motion.div, {});

const Container = styled('section', {
  overflow: 'hidden',
  height: '100vh',
  '@mobile': {
    paddingTop: 'calc($mobileHeaderHeight + 35px)',
  },

  '@tabletSm': {
    paddingTop: 'calc($mobileHeaderHeight + 46px)',
  },

  '@tabletLg': {
    paddingTop: 'calc($mobileHeaderHeight + 93px)',
  },

  '@desktop': {
    paddingTop: '$desktopHeaderHeight',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const ImageWrapper = styled(motion.div, {
  position: 'relative',

  '@mobile': {
    marginBottom: '32px',
    right: '-24px',
  },

  '@tabletSm': {
    right: '-40px',
  },

  '@tabletLg': {
    right: '-64px',
  },

  '@desktop': {
    padding: 0,
    width: '60vw',
    maxWidth: '1185px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 0,
  },
});

const TypoWrapper = styled(motion.div, {
  position: 'relative',
  flex: 1,
  zIndex: 1,

  '@mobile': {
    padding: '0 25px',
  },

  '@tabletSm': {
    padding: '0 50px',
  },

  '@tabletLg': {
    padding: '0 96px',
  },

  '@desktop': {
    paddingLeft: '100px',
    marginBottom: 0,
  },
});

const Description = styled(motion.p, {
  subtitle1: true,
  color: '$textSecondary',

  '@mobile': {
    margin: '18px 0 30px 0',
    footer: true,
  },

  '@tabletSm': {
    margin: '28px 0 32px 0',
    body1: true,
    whiteSpace: 'pre-wrap',
  },

  '@tabletLg': {
    margin: '28px 0 58px 0',
    body2: true,
  },

  '@desktop': {
    margin: '28px 0 36px 0',
  },
});

export default IndexBannerSection;
