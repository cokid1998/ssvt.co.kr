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
import firstBackgroundImg from '../../../../assets/images/tech/oilpass/oilpass1.png';
import secondBackgroundImg from '../../../../assets/images/tech/oilpass/oilpass2.png';
import thirdBackgroundImg from '../../../../assets/images/tech/oilpass/oilpass3.png';

const IconSize = {
  mobile: { width: '60px', height: '60px' },
  tabletSm: { width: '56px', height: '56px' },
  tabletLg: { width: '60px', height: '60px' },
  desktop: { width: '70px', height: '70px' },
};

const OilPassSummary = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const ContentContainerRef = useRef<HTMLDivElement>(null);
  const [windowWidth] = useWindowSize();
  const curMedia = useMedia();
  const { width: iconWidth, height: iconHeight } = useMediaSvgSize(IconSize);

  useEffect(() => {
    if (ContentContainerRef && ContentContainerRef.current) {
      setWidth(`${String(ContentContainerRef.current.clientWidth)}px`);
      setHeight(`${String(ContentContainerRef.current.clientHeight)}px`);
    }
  }, [windowWidth]);

  return (
    <Container>
      <OilpassDescription
        initial="initial"
        whileInView="active"
        variants={opacityAppearBottom(8, 0.3)}
        viewport={{ once: true, amount: 1 }}
      >
        {curMedia === 'tabletSm' || curMedia === 'mobile'
          ? 'OILPASS는 선박유의 품질정보와 급유선 운송장치의 고유 ID를 블록체인 네트워크에 기록하여 유류의 원산지 및 품질정보와 선박유 유통상태를 투명하게 확인하고 부정유통을 방지합니다.'
          : `OILPASS는 선박유의 품질정보와 급유선 운송장치의 고유 ID를 블록체인 네트워크에 기록하여 \n유류의 원산지 및 품질정보와 선박유 유통상태를 투명하게 확인하고 부정유통을 방지합니다.`}
      </OilpassDescription>

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
              <Icon width={iconWidth} height={iconHeight} icon="PassStamp" />
            </IconWrapper>
          </ImageWrapper>

          <TypoWrapper variants={opacityAppearBottom(8, 0.5)}>
            <Title>선박유 품질 보증</Title>
            <SubTitle>Ship Oil Quality Verification</SubTitle>
            <Description>
              위·변조가 불가능한 블록체인 기술을 활용하여 선박유 증명서를 비롯한
              각종 증명서를 발급하고, 불법 유통과 저품질 해상유 급유를
              방지합니다.
            </Description>
          </TypoWrapper>
        </ContentBox>

        <ContentBox variants={containerVariants(0.5)}>
          <ImageWrapper variants={onlyOpacity(0.5)} second>
            <Line
              variants={onlyOpacity(0.8, 2)}
              css={{ $$width: `${width}`, $$height: `${height}` }}
            />
            <IconWrapper>
              <Icon width={iconWidth} height={iconHeight} icon="Gallon" />
            </IconWrapper>
          </ImageWrapper>

          <TypoWrapper variants={opacityAppearBottom(8, 0.5)}>
            <Title>선박유 정량 측정</Title>
            <SubTitle>Quantitative Measurement of Ship Oil</SubTitle>

            <Description>
              IoT 기반 유량계를 통해 실시간 급유량을 정확히 기록하여 선박유 정량
              측정이 어려웠던 기존 문제점을 해소하고 잔여유를 합법적으로
              관리합니다.
            </Description>
          </TypoWrapper>
        </ContentBox>

        <ContentBox variants={containerVariants(0.5)} marginBottomZero>
          <ImageWrapper variants={onlyOpacity(0.5)} third>
            <IconWrapper>
              <Icon width={iconWidth} height={iconHeight} icon="Efficiency" />
            </IconWrapper>
          </ImageWrapper>

          <TypoWrapper variants={opacityAppearBottom(8, 0.5)}>
            <Title>선박유 유통 효율화</Title>
            <SubTitle>Ship Oil Distribution Efficiency</SubTitle>

            <Description>
              OILPASS 앱 하나로 유통 과정의 모든 참여자가 블록체인 기반의 실시간
              선박유 유통 이력과 검증된 데이터를 공유하여 거래 투명성과 효율성을
              증대시킵니다.
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

const OilpassDescription = styled(motion.p, {
  color: '$textSecondary',
  textAlign: 'center',
  whiteSpace: 'pre-wrap',

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
    width: '150px',
    height: '150px',
  },
  '@tabletLg': {
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
  '@tabletSm': {
    maxWidth: '355px',
  },
  '@desktop': {
    maxWidth: 'none',
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
  '@desktop': {
    gap: '200px',
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
    width: '230px',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: 0,
  },
  '@desktop': {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
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

export default OilPassSummary;
