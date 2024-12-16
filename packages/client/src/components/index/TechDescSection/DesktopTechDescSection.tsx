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

const DesktopTechDescSection = () => {
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
      <Wrapper>
        <ImageWrapper variants={imgVariants}>
          <StaticImage src={`${PHONE_SHIP_SRC}`} alt="phone_ship" width={480} />
        </ImageWrapper>

        <ContentBox
          initial="initial"
          whileInView="active"
          viewport={{ root: contentRef, amount: 0.4, once: true }}
          variants={
            curMedia === 'mobile' || curMedia === 'tabletSm'
              ? containerVariants
              : undefined
          }
        >
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
      </Wrapper>

      <Wrapper>
        <ContentBox
          initial="initial"
          whileInView="active"
          viewport={{ root: contentRef, amount: 0.4, once: true }}
          variants={
            curMedia === 'mobile' || curMedia === 'tabletSm'
              ? containerVariants
              : undefined
          }
        >
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
        <ImageWrapper variants={imgVariants}>
          <StaticImage src={`${PANEL_DATA_SRC}`} alt="panel_data" width={400} />
        </ImageWrapper>
      </Wrapper>

      <Wrapper>
        <ImageWrapper variants={imgVariants}>
          <StaticImage
            src={`${DATA_CENTER_SRC}`}
            alt="phone_ship"
            width={550}
          />
        </ImageWrapper>
        <ContentBox
          initial="initial"
          whileInView="active"
          viewport={{ root: contentRef, amount: 0.4, once: true }}
          variants={
            curMedia === 'mobile' || curMedia === 'tabletSm'
              ? containerVariants
              : undefined
          }
        >
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
      </Wrapper>
    </Container>
  );
};

const Container = styled(motion.section, {
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '180px',
  padding: '130px 10px',
});

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const ContentBox = styled(motion.div, {
  boxShadow: '$homepage1',
  borderRadius: '$component',
  width: '770px',
  height: '440px',
});

const ImageWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const TypoWrapper = styled(motion.div, {
  wordBreak: 'keep-all',
  padding: '125px',
});

const Title = styled(motion.h1, {
  whiteSpace: 'pre-line',
  heading3: true,
  marginBottom: '20px',
});

const Description = styled(motion.p, {
  color: '$textSecondary',
  body1: true,
});

export default DesktopTechDescSection;
