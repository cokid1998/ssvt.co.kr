import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useWindowSize from '@client/src/hooks/common/useWindowSize';
import { motion } from 'framer-motion';
import useMedia from '@client/src/hooks/common/useMedia';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import Icon from '../../../common/Icon';
import firstBackgroundImg from '../../../../assets/images/tech/panki/firstBackground.png';
import secondBackgroundImg from '../../../../assets/images/tech/panki/secondBackground.png';
import thirdBackgroundImg from '../../../../assets/images/tech/panki/thirdBackground.png';

const IconSize = {
  mobile: { width: '60px', height: '60px' },
  tabletSm: { width: '56px', height: '56px' },
  tabletLg: { width: '60px', height: '60px' },
  desktop: { width: '70px', height: '70px' },
};

const PankiSummary = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const ContentContainerRef = useRef<HTMLDivElement>(null);
  const [windowWidth] = useWindowSize();
  const curMedia = useMedia();

  useEffect(() => {
    if (ContentContainerRef && ContentContainerRef.current) {
      setWidth(`${String(ContentContainerRef.current.clientWidth)}px`);
      setHeight(`${String(ContentContainerRef.current.clientHeight)}px`);
    }
  }, [windowWidth]);
  const { width: iconWidth, height: iconHeight } = useMediaSvgSize(IconSize);

  return (
    <Container>
      <PankiDescription
        initial="initial"
        whileInView="active"
        variants={opacityAppearBottom(8, 0.3)}
        viewport={{ once: true, amount: 0.1 }}
      >
        {curMedia === 'mobile' || curMedia === 'tabletSm'
          ? 'PANKI는 ‘위치측위 기반 스마트 도막측정 솔루션’을 통해 선박 도장 품질을 자동 측정하거나 예측하여 선박의 생산성을 좌우하는 도장작업의 최대 효율을 도모합니다.'
          : `PANKI는 ‘위치측위 기반 스마트 도막측정 솔루션’을 통해 선박 도장 품질을 자동 측정하거나 예측하여\n선박의 생산성을 좌우하는 도장작업의 최대 효율을 도모합니다.`}
      </PankiDescription>

      <ContentContainer
        initial="initial"
        whileInView="active"
        variants={containerVariants(1)}
        viewport={
          curMedia === 'mobile'
            ? { once: true, amount: 0.1 }
            : { once: true, amount: 0.3 }
        }
      >
        <ContentBox variants={containerVariants(0.5)}>
          <ImageWrapper
            variants={onlyOpacity(0.5)}
            ref={ContentContainerRef}
            first
          >
            <Line
              variants={onlyOpacity(0.5, 1)}
              css={{ $$width: `${width}`, $$height: `${height}` }}
            />
            <IconWrapper>
              <Icon width={iconWidth} height={iconHeight} icon="CloudIoT" />
              <IconTitle>IoT 센서 네트워크</IconTitle>
            </IconWrapper>
          </ImageWrapper>

          <TypoWrapper variants={opacityAppearBottom(8, 0.5)}>
            <Title>데이터 수집</Title>
            <SubTitle>Data Collection</SubTitle>

            <Description>
              선박품질측정장치와 lot 센서 네트워트를 결합하여 정확한 데이터를
              측정 및 수집합니다.
            </Description>
          </TypoWrapper>
        </ContentBox>

        <ContentBox variants={containerVariants(0.5)}>
          <ImageWrapper variants={onlyOpacity(0.5)} second>
            <Line
              variants={onlyOpacity(0.5, 2)}
              css={{ $$width: `${width}`, $$height: `${height}` }}
            />
            <IconWrapper>
              <Icon width={iconWidth} height={iconHeight} icon="Blocks" />
              <IconTitle>블록체인 트랜잭션</IconTitle>
            </IconWrapper>
          </ImageWrapper>

          <TypoWrapper variants={opacityAppearBottom(8, 0.5)}>
            <Title>무검사 시스템</Title>
            <SubTitle>No Inspection System</SubTitle>

            <Description>
              수집된 데이터를 블록체인을 활용하여 안전하고 신뢰할 수 있는
              데이터로 데이터를 공유합니다.
            </Description>
          </TypoWrapper>
        </ContentBox>

        <ContentBox variants={containerVariants(0.5)} marginBottomZero>
          <ImageWrapper variants={onlyOpacity(0.5)} third>
            <IconWrapper>
              <Icon width={iconWidth} height={iconHeight} icon="Management" />
              <IconTitle>통합관리 시스템</IconTitle>
            </IconWrapper>
          </ImageWrapper>

          <TypoWrapper variants={opacityAppearBottom(8, 0.5)}>
            <Title>자동 레포팅 시스템</Title>
            <SubTitle>Automatic Reporting System</SubTitle>

            <Description>
              조선 건조 공정 데이터, 시간별 도막 측정값, 도막 두께 및 분포도
              등의 각 데이터를 분석 그래프화한 레포트를 고객사에 제공합니다.
            </Description>
          </TypoWrapper>
        </ContentBox>
      </ContentContainer>
    </Container>
  );
};

const Container = styled('section', {
  position: 'relative',

  '@mobile': {
    padding: '80px 16px 120px 16px',
    margin: '0 auto',
  },
  '@tabletSm': {
    padding: '80px 32px 120px 32px',
  },
  '@tabletLg': {
    padding: '80px 60px 120px 60px',
  },
  '@desktop': {
    padding: '78px 60px 254px 60px',
  },
});

const IconTitle = styled('div', {
  color: '$textContrast',

  '@mobile': {
    footer: true,
  },
  '@tabletLg': {
    body1: true,
  },
});

const PankiDescription = styled(motion.p, {
  color: '$textSecondary',
  textAlign: 'center',
  wordBreak: 'keep-all',
  whiteSpace: 'pre-line',

  '@mobile': {
    footer: true,
    marginBottom: '84px',
  },
  '@tabletSm': {
    body1: true,
    marginBottom: '120px',
  },
  '@tabletLg': {
    subtitle1: true,
    marginBottom: '84px',
  },
});

const IconWrapper = styled('div', {
  '@mobile': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});

const ImageWrapper = styled(motion.div, {
  position: 'relative',
  borderRadius: '50%',

  '@mobile': {
    marginBottom: '32px',
    width: '160px',
    height: '160px',
  },
  '@tabletSm': {
    minWidth: '150px',
    height: '150px',
  },
  '@tabletLg': {
    minWidth: '200px',
    width: '200px',
    height: '200px',
    marginBottom: 0,
  },

  variants: {
    first: {
      true: {
        background: `url(${firstBackgroundImg})`,
        backgroundSize: 'cover',
      },
    },
    second: {
      true: {
        background: `url(${secondBackgroundImg})`,
        backgroundSize: 'cover',
      },
    },
    third: {
      true: {
        background: `url(${thirdBackgroundImg})`,
        backgroundSize: 'cover',
      },
    },
  },
});

const Line = styled(motion.div, {
  border: '1px solid $divider',
  position: 'absolute',

  '@mobile': {
    display: 'none',
  },
  '@tabletSm': {
    left: '50%',
    bottom: '-100%',
    height: '$$height',
    display: 'block',
  },
  '@tabletLg': {
    left: 'unset',
    top: '50%',
    right: '-100%',
    width: '$$width',
    height: 0,
  },
  '@desktop': {
    width: 'calc($$width * 2)',
    right: 'unset',
    left: '100%',
  },
});

const TypoWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    subtitle2: true,
  },
});

const Title = styled('h1', {
  whiteSpace: 'pre-wrap',

  '@mobile': {
    subtitle2: true,
    textAlign: 'center',
  },

  '@tabletSm': {
    heading7: true,
    textAlign: 'left',
  },

  '@tabletLg': {
    textAlign: 'center',
  },

  '@desktop': {
    heading6: true,
  },
});

const SubTitle = styled('h6', {
  color: '$textSecondary',

  '@mobile': {
    footer: true,
    textAlign: 'center',
  },
  '@tabletSm': {
    textAlign: 'left',
  },
  '@tabletLg': {
    textAlign: 'center',
  },
});

const Description = styled('p', {
  color: '$textSecondary',
  marginBottom: '$$marginBottom',
  wordBreak: 'keep-all',

  '@mobile': {
    textAlign: 'center',
    footer: true,
  },

  '@tabletSm': {
    body1: true,
    textAlign: 'left',
  },

  '@tabletLg': {
    textAlign: 'center',
  },

  '@desktop': {},
});

const ContentContainer = styled(motion.div, {
  position: 'relative',

  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
  },
  '@tabletLg': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const ContentBox = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '60px',
  },
  '@tabletSm': {
    flexDirection: 'row',
    gap: '32px',
    justifyContent: 'center',
  },
  '@tabletLg': {
    gap: '40px',
    width: '230px',
    flexDirection: 'column',
    marginBottom: 0,
    justifyContent: 'initial',
  },
  '@desktop': {
    minWidth: '260px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
  },

  variants: {
    marginBottomZero: {
      true: {
        '@mobile': {
          marginBottom: 0,
        },
      },
    },
  },
});

export default PankiSummary;
