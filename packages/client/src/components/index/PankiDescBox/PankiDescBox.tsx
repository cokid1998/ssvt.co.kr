import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion, Variants } from 'framer-motion';
import { Link } from 'gatsby';
import Button from '../../common/Button';
import Icon from '../../common/Icon';
import shipBackgroundImage from '../../../assets/images/index/landing_background_image.jpg';

const opacityVariants: Variants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const containerVariants: Variants = {
  initial: {},
  active: {
    transition: {
      ease: 'easeInOut',
      staggerChildren: 0.5,
    },
  },
};

const PankiDescBox = () => {
  const curMedia = useMedia();

  return (
    <Container>
      <ImageWrapper
        initial="initial"
        whileInView="active"
        viewport={{ once: true, amount: 0.6 }}
        variants={containerVariants}
      >
        <TypoWrapper variants={opacityVariants}>
          {curMedia === 'mobile' ? (
            <Title>{'위치측위 기반\n스마트 도막 측정 시스템'}</Title>
          ) : (
            <Title>위치측위 기반 스마트 도막 측정 시스템</Title>
          )}

          {curMedia === 'mobile' ? (
            <Description>
              {'Location determination\nsmart coating measurement system'}
            </Description>
          ) : (
            <Description>
              Location determination smart coating measurement system
            </Description>
          )}

          {curMedia === 'mobile' ? (
            <Description>
              {
                'Iot센서 네트워크를 활용한 정확한 도막측정 부터\n블록체인을 활용한 데이터 무검사 시스템까지\n이제 도막 품질 자동 레포팅 시스템으로 스마트하게\n시작하세요'
              }
            </Description>
          ) : (
            <Description css={{ marginBottom: 0 }}>
              {
                'Iot센서 네트워크를 활용한 정확한 도막측정 부터\n블록체인을 활용한 데이터 무검사 시스템까지\n이제 도막 품질 자동 레포팅 시스템으로 스마트하게 시작하세요'
              }
            </Description>
          )}
        </TypoWrapper>

        <ButtonWrapper variants={opacityVariants}>
          <Link to="/tech">
            <Button
              size={curMedia === 'mobile' ? 'medium' : 'large'}
              color="contrast"
            >
              More About
              <Icon icon="ArrowRightward" />
            </Button>
          </Link>
        </ButtonWrapper>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled(motion.div, {
  '@mobile': {
    padding: '81px 16px',
  },

  '@tabletSm': {
    padding: '60px 24px',
  },
  '@tabletLg': {
    padding: '60px 24px 100px',
  },
  '@desktop': {
    display: 'flex',
    justifyContent: 'center',
    padding: '60px',
  },
});

const ImageWrapper = styled(motion.div, {
  borderRadius: '$component',
  background: `url(${shipBackgroundImage})`,
  width: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  '@mobile': {
    padding: '124px 0 100px 0',
    backgroundPosition: 'center',
  },
  '@tabletSm': {
    padding: '124px 40px 72px 40px',
  },

  '@tabletLg': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '118px 84px 68px 103px',
  },
  '@desktop': {
    height: 'auto',
    padding: '118px 108px 67px 131px',
  },
});

const TypoWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '64px',
  },
  '@tabletSm': {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '48px',
  },
  '@tabletLg': {},
  '@desktop': {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 0,
  },
});

const Title = styled(motion.h1, {
  color: '$primaryContrast',
  whiteSpace: 'pre-wrap',
  heading4: true,

  '@mobile': {
    textAlign: 'center',
    marginBottom: '20px',
  },
  '@tabletSm': {
    textAlign: 'left',
    heading7: true,
    marginBottom: '20px',
  },
  '@tabletLg': {
    heading6: true,
  },
  '@desktop': {
    heading3: true,

    marginBottom: '20px',
  },
});

const Description = styled(motion.p, {
  color: '$primaryContrast',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    footer: true,
    textAlign: 'center',
    marginBottom: '20px',
  },
  '@tabletSm': {
    textAlign: 'left',
    body1: true,
  },
  '@tabletLg': {
    body1: true,
  },
  '@desktop': {
    body1: true,
  },
});

const ButtonWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    justifyContent: 'center',
  },
  '@tabletSm': {
    justifyContent: 'right',
  },
  '@tabletLg': {
    width: '100%',
    justifyContent: 'flex-end',
  },
  '@desktop': {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default PankiDescBox;
