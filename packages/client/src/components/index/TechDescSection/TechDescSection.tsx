import React, { useRef } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, Variants } from 'framer-motion';
import useMedia from '@client/src/hooks/common/useMedia';

const PHONE_SHIP_SRC = '../../../assets/images/index/landing_phone_ship.png';
const PANEL_DATA_SRC = '../../../assets/images/index/landing_panel_data.png';
const DATA_CENTER_SRC = '../../../assets/images/index/landing_data_center.png';

const imgVariants: Variants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const typoVariants: Variants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const TechDescSection = () => {
  const contentRef = useRef(null);
  const curMedia = useMedia();
  const containerVariants: Variants = {
    initial: {},
    active: {
      transition: {
        ease: 'easeInOut',
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <Container>
      <ContentWrapper
        initial="initial"
        whileInView="active"
        viewport={{ root: contentRef, amount: 0.4, once: true }}
        variants={
          curMedia === 'mobile' || curMedia === 'tabletSm'
            ? containerVariants
            : undefined
        }
      >
        <ImageWrapper variants={imgVariants} first>
          <StaticImage src={`${PHONE_SHIP_SRC}`} alt="phone_ship" />
        </ImageWrapper>

        <ContentBox>
          <TypoWrapper variants={typoVariants}>
            <Title
              variants={typoVariants}
            >{`블록체인 기술 기반\n조선해양 선박검사`}</Title>

            <Description variants={typoVariants}>
              특히 블록체인 기술 기반 조선해양 선박검사 및 분석 플랫폼은 단절된
              ERP 루트를 개선하고 작업 현장에서 측정된 도막 상태정보를 자체 앱을
              통해 블록체인으로 보호하여 메인 서버로 전송합니다.
            </Description>
          </TypoWrapper>
        </ContentBox>
      </ContentWrapper>

      <ContentWrapper
        initial="initial"
        whileInView="active"
        viewport={{ root: contentRef, amount: 0.4, once: true }}
        variants={
          curMedia === 'mobile' || curMedia === 'tabletSm'
            ? containerVariants
            : undefined
        }
      >
        <ImageWrapper variants={imgVariants} second>
          <StaticImage
            src={`${PANEL_DATA_SRC}`}
            alt="panel_data"
            style={{ transform: 'scaleX(-1)' }}
          />
        </ImageWrapper>
        <ContentBox>
          <TypoWrapper variants={typoVariants}>
            <Title
              variants={typoVariants}
            >{`시각화된 리포팅\n실시간 보안 네트워크`}</Title>

            <Description variants={typoVariants}>
              통합 서버는 블록체인 트랜잭션을 거처 고신뢰
              데이터(GPS,ID,측정DATA등)를 산출 분석하고 품질담당자 및 선주감독은
              시각화된 리포팅을 보안 네트워크로 실시간 제공받을 수 있습니다.
            </Description>
          </TypoWrapper>
        </ContentBox>
      </ContentWrapper>

      <ContentWrapper
        initial="initial"
        whileInView="active"
        viewport={{ root: contentRef, amount: 0.4, once: true }}
        variants={
          curMedia === 'mobile' || curMedia === 'tabletSm'
            ? containerVariants
            : undefined
        }
        marginBottomZero
      >
        <ImageWrapper variants={imgVariants} thrid>
          <StaticImage
            src={`${DATA_CENTER_SRC}`}
            alt="data_center"
            style={{ transform: 'scaleX(-1)' }}
          />
        </ImageWrapper>
        <ContentBox css={{ marginBottom: 0 }}>
          <TypoWrapper variants={typoVariants}>
            <Title
              variants={typoVariants}
            >{`도막측정 빅데이터\n분석 알고리즘`}</Title>

            <Description variants={typoVariants}>
              자체 개발된 도막측정 빅데이터 분석 알고리즘을 통해 품질 및 생산성
              향상을 제공합니다. 또한 에스에스브이티의 무검사시스템 공기단축,
              도료절감등 조선소 및 선주사의 비용을 감소시킵니다
            </Description>
          </TypoWrapper>
        </ContentBox>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled(motion.div, {
  height: '100%',
  overflow: 'hidden',
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
  '@tabletSm': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '183px 24px',
    marginTop: 0,
  },

  '@desktop': {},
});

const ContentWrapper = styled(motion.div, {
  '@mobile': {
    marginBottom: '160px',
  },
  '@tabletSm': {
    position: 'relative',
  },
  '@desktop': {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  variants: {
    marginBottomZero: {
      true: {
        '@mobile': {
          marginBottom: '100px',
        },
        '@tabletSm': {
          marginBottom: 0,
        },
      },
    },
  },
});

const ContentBox = styled('div', {
  position: 'relative',
  background: 'white',

  '@tabletSm': {
    padding: '110px 40px 80px 40px',
    boxShadow: '$homepage1',
    borderRadius: '$component',
    margin: '0 auto',
  },
  '@desktop': {
    width: '770px',
    height: '440px',
    position: 'relative',
    left: 'unset',
    right: '-60px',
    padding: 0,
    margin: 0,
  },

  variants: {
    position: {
      left: {
        position: 'relative',
        right: 'unset',
        left: '-228px',
        padding: '120px 0 120px 318px',
      },
      '@desktop': {
        padding: 0,
        left: 0,
      },
    },
  },
});

const ImageWrapper = styled(motion.div, {
  '@mobile': {
    margin: '0 auto 64px',
  },
  '@tabletSm': {
    padding: 0,
    position: 'absolute',
    top: '-95px',
    right: '-41px',
    zIndex: 1,
    marginBottom: 0,
  },

  variants: {
    first: {
      true: {
        '@mobile': {
          width: '278px',
        },
        '@tabletSm': {
          width: '330px',
          top: '-95px',
          right: '-41px',
        },
        '@desktop': {
          width: '480px',
          position: 'static',
          transform: 'none',
        },
      },
    },
    second: {
      true: {
        '@mobile': {
          width: '224px',
        },
        '@tabletSm': {
          width: '244px',
          top: '-90px',
          right: '15px',
        },
        '@desktop': {
          width: '405px',
          position: 'absolute',
          top: 0,
          right: '77px',
          transform: 'none',
        },
      },
    },
    thrid: {
      true: {
        '@mobile': {
          width: '280px',
        },
        '@tabletSm': {
          width: '372px',
          top: '-50px',
          right: '-76px',
        },
        '@desktop': {
          width: '553px',
          position: 'static',
          transform: 'none',
          display: 'flex',
          alignItems: 'center',
        },
      },
    },
  },
});

const TypoWrapper = styled(motion.div, {
  wordBreak: 'keep-all',
  '@mobile': {
    padding: '0 24px',
  },
  '@tabletSm': {
    padding: '0',
  },
  '@desktop': {
    width: '770px',
    height: '440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '125px 190px 125px 126px',
    borderRadius: '$component',
  },
});

const Title = styled(motion.h1, {
  whiteSpace: 'pre-wrap',
  color: '$textPrimary',
  marginBottom: '20px',

  '@mobile': {
    heading5: true,
  },
  '@tabletSm': {
    heading7: true,
  },

  '@desktop': {
    heading3: true,
  },
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

  '@desktop': {
    width: 'auto',
    body1: true,
  },

  variants: {
    width: {
      true: {
        width: '80%',
      },
    },
  },
});

export default TechDescSection;
