import React, { useRef } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import { motion, Variants } from 'framer-motion';
import useMedia from '@client/src/hooks/common/useMedia';

const BLOCKCHAIN_IMAGE_SRC =
  '../../../assets/images/index/landing_blockchain.png';

const SERVER_IMAGE_SRC =
  '../../../assets/images/index/landing_Integrated_Server.png';

const BIGDATA_IMAGE_SRC = '../../../assets/images/index/landing_bigData.png';

const responseTitle = [
  {
    media: 'mobile',
    typo: `조선해양의 미래,\n스마트 해양을 이끌어갈 기술 벤처`,
  },
  {
    media: 'tabletSm',
    typo: `조선해양의 미래, 스마트 해양을\n이끌어갈 기술 벤처`,
  },
  {
    media: 'tabletLg',
    typo: '조선해양의 미래, 스마트 해양을 이끌어갈 기술 벤처',
  },
  {
    media: 'desktop',
    typo: '조선해양의 미래, 스마트 해양을 이끌어갈 기술 벤처',
  },
];

const containerVariants: Variants = {
  initial: {},
  active: {
    transition: {
      ease: 'easeInOut',
      staggerChildren: 0.5,
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
      duration: 0.3,
    },
  },
};

const contentVariants: Variants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const CompanyTechSummarySection = () => {
  const curMedia = useMedia();
  const contentRef = useRef(null);

  const desktopContainerProps = {
    initial: 'initial',
    whileInView: 'active',
    variants: containerVariants,
    viewport: { once: true, amount: 0.2 },
    transition: {
      staggerChildren: 0.5,
    },
  };

  const mobileContentProps = {
    initial: 'initial',
    whileInView: 'active',
    viewport: { root: contentRef, amount: 0.2, once: true },
  };

  return (
    <Container
      {...((curMedia === 'desktop' || curMedia === 'tabletLg') &&
        desktopContainerProps)}
    >
      <TypoWrapper
        {...((curMedia === 'mobile' || curMedia === 'tabletSm') &&
          desktopContainerProps)}
      >
        <Title variants={typoVariants} type="title">
          {responseTitle.find((obj) => curMedia === obj.media)?.typo}
        </Title>

        <Description variants={typoVariants} type="title">
          에스에스브이티의 통합 솔루션은 체계적인 선박 건조 및 운항 관리를 위한
          품질 분석 시스템의 하이엔드 데이터를 구축합니다.
        </Description>
      </TypoWrapper>

      <ImageWrapper>
        <ContentContainer
          {...((curMedia === 'mobile' || curMedia === 'tabletSm') &&
            mobileContentProps)}
          variants={contentVariants}
        >
          <StaticImage
            src={`${BLOCKCHAIN_IMAGE_SRC}`}
            alt="lading_blockChain"
          />
          <Title type="imageTitle">블록체인</Title>
          <Description>Blockchain</Description>
        </ContentContainer>

        <ContentContainer
          {...((curMedia === 'mobile' || curMedia === 'tabletSm') &&
            mobileContentProps)}
          variants={contentVariants}
        >
          <StaticImage
            src={`${SERVER_IMAGE_SRC}`}
            alt="lading_IntegratedServer"
          />
          <Title type="imageTitle">통합서버</Title>
          <Description>Integrated server</Description>
        </ContentContainer>

        <ContentContainer
          {...((curMedia === 'mobile' || curMedia === 'tabletSm') &&
            mobileContentProps)}
          variants={contentVariants}
          css={{ marginBottom: 0 }}
        >
          <StaticImage src={`${BIGDATA_IMAGE_SRC}`} alt="lading_bigdata" />
          <Title type="imageTitle">빅데이터</Title>
          <Description>Big Data</Description>
        </ContentContainer>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled(motion.section, {
  margin: '0 auto',

  '@mobile': {
    padding: '136px 24px',
  },
  '@tabletSm': {
    padding: '128px 75px 160px 75px',
  },
  '@tabletLg': {
    padding: '114px 75px 115px 74px',
  },
  '@desktop': {
    display: 'flex',
    flexDirection: 'column',
    padding: '110px 160px',
    maxWidth: '1600px',
  },
});

const TypoWrapper = styled(motion.div, {
  marginBottom: '84px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Title = styled(motion.h1, {
  whiteSpace: 'pre-wrap',
  color: '@textPrimary',

  variants: {
    type: {
      title: {
        '@mobile': {
          heading5: true,
          textAlign: 'center',
          marginBottom: '18px',
        },
        '@tabletSm': {
          heading6: true,
          marginBottom: '28px',
        },
        '@desktop': {
          heading2: true,
          marginBottom: '28px',
        },
      },
      imageTitle: {
        '@mobile': {
          subtitle2: true,
          marginTop: '25px',
          marginBottom: '10px',
        },
        '@tabletSm': {
          heading4: true,
          marginTop: '39px',
          marginBottom: '10px',
        },
        '@desktop': {
          heading4: true,
          marginTop: '39px',
          marginBottom: '10px',
        },
      },
    },
  },
});

const Description = styled(motion.p, {
  wordBreak: 'keep-all',
  color: '$textSecondary',
  variants: {
    type: {
      title: {
        '@mobile': {
          textAlign: 'center',
          footer: true,
        },

        '@tabletSm': {
          body1: true,
        },

        '@desktop': {
          subtitle1: true,
        },
      },
    },
  },
});

const ImageWrapper = styled(motion.div, {
  '@mobile': {
    padding: '0 41px',
  },
  '@tabletSm': {
    padding: '0',
  },
  '@tabletLg': {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '7px',
  },
});

const ContentContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@mobile': {
    marginBottom: '100px',
  },
  '@tabletSm': {
    marginBottom: '120px',
  },
  '@tabletLg': {
    marginBottom: 0,
  },
});

export default CompanyTechSummarySection;
