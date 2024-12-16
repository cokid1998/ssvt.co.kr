import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { motion } from 'framer-motion';
import HistoryTypoWrapper from './HistoryTypoWrapper';
import HistoryContentWrapper from './HistoryContentWrapper';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '../../common/transitions/transitions';

const FourthSection = () => (
  <Container>
    <TypoWrapper
      initial="initial"
      whileInView="active"
      variants={containerVariants(0.3)}
      viewport={{ once: true, amount: 1 }}
    >
      <CompanyTitle variants={onlyOpacity(0.3)} language="en">
        SSVT HISTORY
      </CompanyTitle>
      <CompanyTitle variants={opacityAppearBottom(8, 0.3)} language="ko">
        SSVT 회사 연혁
      </CompanyTitle>
    </TypoWrapper>

    <HistoryContentWrapper icon="Senser">
      <HistoryContent position="left">
        <HistoryTypoWrapper>
          <Year
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.3)}
            viewport={{ once: true, amount: 1 }}
          >
            2017
          </Year>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            선박도료 사용량 측정 및 패턴 분석을 위한 스마트 센서 연구
          </Description>
        </HistoryTypoWrapper>
      </HistoryContent>
    </HistoryContentWrapper>

    <HistoryContentWrapper icon="Blockchain">
      <HistoryContent position="right">
        <HistoryTypoWrapper>
          <Year
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            2018
          </Year>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            스마트 선박 검사 측정 장치 및 블록체인 서비스 개발
          </Description>
        </HistoryTypoWrapper>
      </HistoryContent>
    </HistoryContentWrapper>

    <HistoryContentWrapper icon="Stamp">
      <HistoryContent position="left">
        <HistoryTypoWrapper>
          <Year
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            2019
          </Year>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            환경저감장치 운영 및 블록 체인 인증 서비스 인증
          </Description>
        </HistoryTypoWrapper>
      </HistoryContent>
    </HistoryContentWrapper>

    <HistoryContentWrapper icon="Phone">
      <HistoryContent position="right">
        <HistoryTypoWrapper marginBottom="48px">
          <Year
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            2020
          </Year>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            스마트 도막측정기기 기능확장 및 서비스개선
          </Description>
        </HistoryTypoWrapper>

        <HistoryTypoWrapper marginBottom="48px">
          <TitleWrapper
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            <Year position="right">2020</Year>
            <ServiceName inline>OILPASS</ServiceName>
          </TitleWrapper>
          <DescriptionWrapper
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            <Description widthMonth inline>
              2020.11
            </Description>
            <Description inline>해상유 원산지 증명서 발행 솔루션</Description>
          </DescriptionWrapper>
        </HistoryTypoWrapper>

        <HistoryTypoWrapper marginBottom="48px">
          <TitleWrapper
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            <Year position="right">2020</Year>
            <ServiceName marginRight inline>
              PASSTHRU
            </ServiceName>
          </TitleWrapper>
          <DescriptionWrapper
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            <Description widthMonth inline>
              2020.12
            </Description>
            <Description inline>
              블록체인(DID) 기반 조선소 방문객 출입 신청 서비스 개발
            </Description>
          </DescriptionWrapper>
        </HistoryTypoWrapper>

        <HistoryTypoWrapper marginBottom="56px">
          <TitleWrapper
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            <Year position="right">2020</Year>
            <ServiceName inline>OCEANVIEW</ServiceName>
          </TitleWrapper>
          <DescriptionWrapper
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            <Description widthMonth inline>
              2020.12
            </Description>
            <Description inline>도선사 보조 선박 어라운드뷰 시스템</Description>
          </DescriptionWrapper>
        </HistoryTypoWrapper>
      </HistoryContent>
    </HistoryContentWrapper>

    <HistoryContentWrapper icon="Brush">
      <HistoryContent position="left">
        <HistoryTypoWrapper marginBottom="48px">
          <Year
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            2021
          </Year>
          <TransitionWrapper
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            <Description css={{ marginBottom: '16px' }}>
              스마트 도막측정기기 기능확장 및 서비스개선
            </Description>
            <Description css={{ marginBottom: '16px' }}>
              스마트 도막측정기기 및 디바이스 솔루션 MVP
            </Description>
            <Description>
              스마트 비파괴 검사 디바이스 및 위험 알림 솔루션 상용화
            </Description>
          </TransitionWrapper>
        </HistoryTypoWrapper>

        <HistoryTypoWrapper>
          <TitleWrapper
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.3)}
            viewport={{ once: true, amount: 1 }}
            positionLeft
            css={{ marginBottom: 0 }}
          >
            <Year>2021</Year>
            <ServiceName marginRight inline>
              PANKI
            </ServiceName>
          </TitleWrapper>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
            widthMonth
            inline
          >
            2021.02
          </Description>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
            inline
          >
            블록체인 기반 선박검사 통합관리 솔루션
          </Description>
        </HistoryTypoWrapper>
      </HistoryContent>
    </HistoryContentWrapper>

    <HistoryContentWrapper icon="Element">
      <HistoryContent position="right" noPadding>
        <HistoryTypoWrapper>
          <Year
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5)}
            viewport={{ once: true, amount: 1 }}
          >
            2022
          </Year>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
            css={{ marginBottom: '16px' }}
          >
            통합품질관리 기능 확장 밒 커스텀 모듈 개발
          </Description>
          <Description
            initial="initial"
            whileInView="active"
            variants={opacityAppearBottom(8, 0.3, 0.3)}
            viewport={{ once: true, amount: 0 }}
          >
            AI기반 최적화 및 EGS 관리 솔루션 개발
          </Description>
        </HistoryTypoWrapper>
      </HistoryContent>
    </HistoryContentWrapper>
  </Container>
);

const TransitionWrapper = styled(motion.div, {});

const HistoryContent = styled(motion.div, {
  '@mobile': {
    paddingBottom: '56px',
  },
  '@tabletSm': {
    paddingBottom: '100px',
  },
  '@tabletLg': {
    position: 'absolute',
  },

  variants: {
    noPadding: {
      true: {
        paddingBottom: 0,
      },
    },
    position: {
      left: {
        '@tabletLg': {
          textAlign: 'right',
          right: '84px',
          top: 0,
        },
        '@desktop': {
          right: '140px',
        },
      },
      right: {
        '@tabletLg': {
          left: '84px',
          top: 0,
        },
        '@desktop': {
          left: '140px',
        },
      },
    },
  },
});

const Year = styled(motion.span, {
  display: 'inline-block',
  marginBottom: '16px',
  color: '$textPrimary2',

  '@mobile': {
    subtitle3: true,
    marginRight: '20px',
  },
  '@tabletSm': {
    heading4: true,
  },

  variants: {
    position: {
      left: {
        '@tabletLg': {
          marginRight: 0,
        },
      },
      right: {
        '@tabletLg': {
          marginRight: '20px',
        },
      },
    },
    widthMonth: {
      true: {
        '@mobile': {
          footerMobile: true,
        },
      },
    },
  },
});

const ServiceName = styled('div', {
  color: '$textPrimary',

  '@mobile': {
    subtitle3: true,
  },
  '@tabletSm': {
    heading4: true,
  },

  variants: {
    inline: {
      true: {
        display: 'inline',
      },
    },
    marginRight: {
      true: {
        '@tabletLg': {
          marginRight: '20px',
        },
      },
    },
  },
});

const CompanyTitle = styled(motion.h1, {
  variants: {
    language: {
      en: {
        color: '$textPrimary2',
        '@mobile': {
          subtitle3: true,
          marginBottom: '8px',
        },
        '@tabletSm': {
          subtitle2: true,
          marginBottom: '18px',
        },
      },
      ko: {
        color: '$textPrimary',
        '@mobile': {
          heading5: true,
        },
        '@tabletSm': {
          heading7: true,
        },
        '@tabletLg': {
          heading6: true,
        },
        '@desktop': {
          heading3: true,
        },
      },
    },
  },
});

const TitleWrapper = styled(motion.div, {
  '@tabletLg': {
    marginBottom: '24px',
    display: 'flex',
  },

  variants: {
    positionLeft: {
      true: {
        '@tabletLg': {
          justifyContent: 'right',
          flexDirection: 'row-reverse',
        },
      },
    },
  },
});

const Container = styled(motion.section, {
  overflow: 'hidden',

  '@mobile': {
    padding: '140px 16px 237px',
    maxWidth: '500px',
    margin: '0 auto',
  },
  '@tabletSm': {
    padding: '140px 32px 263px',
    maxWidth: '800px',
  },
  '@tabletLg': {
    padding: '0 60px 200px',
    maxWidth: 'none',
    margin: 0,
  },
  '@desktop': {
    padding: '0 60px 369px 60px',
  },
});

const TypoWrapper = styled(motion.div, {
  position: 'relative',

  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '80px',
  },

  '@tabletSm': {
    alignItems: 'flex-start',
  },

  '@tabletLg': {},

  '@desktop': {
    paddingLeft: '32px',
    marginBottom: '140px',
  },
});

const DescriptionWrapper = styled(motion.div, {
  display: 'flex',
});

const Description = styled(motion.p, {
  color: '$textSecondary',
  wordBreak: 'keep-all',
  '@mobile': {
    footer: true,
  },

  '@tabletSm': {
    body2: true,
  },

  '@tabletLg': {},

  '@desktop': {
    body1: true,
  },

  variants: {
    widthMonth: {
      true: {
        '@mobile': {
          footerMobile: true,
          marginRight: '12px',
        },
        '@tabletSm': {
          subtitle1: true,
          marginRight: '20px',
        },
      },
    },
    inline: {
      true: {
        display: 'inline',
      },
    },
  },
});

export default FourthSection;
