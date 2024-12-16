import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion, useTransform } from 'framer-motion';
import {
  containerVariants,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';
import Icon from '../../../common/Icon';

const phoneSvgSize = {
  mobile: { width: '222px', height: '442px' },
  tabletSm: { width: '191px', height: '376px' },
  tabletLg: { width: '204px', height: '403pxpx' },
  desktop: { width: '254px', height: '505px' },
};

const OilPassBenefitThird = () => {
  const phoneSize = useMediaSvgSize(phoneSvgSize);
  const { width: phoneWidth, height: phoneHeight } = phoneSize;
  const curMedia = useMedia();

  const firstVariants = {
    initial: {},
    active: {
      x: [0, -220, -220, 220, 0, 0, 0],
      opacity: [1, 0, 0, 0, 1, 1, 1],
    },
  };

  const secondVariants = {
    initial: {},
    active: {
      x: [220, 0, 0, 0, -220, -220, 220],
      opacity: [0, 1, 1, 1, 0, 0, 0],
    },
  };

  return (
    <Container>
      <BenefitTypoWrapper>
        <Benefit>BENEFIT 3.</Benefit>
        {curMedia === 'mobile' || curMedia === 'tabletSm' ? (
          <BenefitTitle>블록체인 기반 검증된 증명서 발급</BenefitTitle>
        ) : (
          <BenefitTitle>{`블록체인 기반\n검증된 증명서 발급`}</BenefitTitle>
        )}

        <BenefitDescription>
          저품질 해상유 및 선박유 불법유통을 방지하기 위해 블록체인 기술을
          활용하여 성분 및 원산지의 위 ·변조가 불가능한 신뢰도 높은 증명서를
          발급합니다. 또한 OILPASS 인증을 통해 항만에서의 입항절차를 간소화 할
          수 있습니다.
        </BenefitDescription>
      </BenefitTypoWrapper>

      <IconWrapper
        initial="initial"
        whileInView="active"
        variants={
          curMedia === 'mobile'
            ? opacityAppearBottom(10, 0.5)
            : containerVariants(0.5)
        }
        viewport={{ once: true, amount: 0.2 }}
      >
        {curMedia === 'mobile' && (
          <Phone>
            <MobileBlockWrapper>
              <Icon icon="MobileBlock" />
            </MobileBlockWrapper>

            <Icon
              width={`${phoneWidth}`}
              height={`${phoneHeight}`}
              icon="PhoneFrame"
            />

            <motion.div>
              <PhoneSvgWrapper
                transition={{ delay: 2, duration: 8, repeat: Infinity }}
                variants={firstVariants}
              >
                <Icon width={`${phoneWidth}`} height="430" icon="QRScreen" />
              </PhoneSvgWrapper>

              <PhoneSvgWrapper
                transition={{ delay: 2, duration: 8, repeat: Infinity }}
                variants={secondVariants}
              >
                <Icon
                  width={`${phoneWidth}`}
                  height="430"
                  icon="LoadingPermitScreen"
                />
              </PhoneSvgWrapper>
            </motion.div>
          </Phone>
        )}

        {curMedia === 'tabletSm' && (
          <motion.div
            variants={opacityAppearBottom(10, 0.5)}
            style={{ display: 'flex ', alignItems: 'center' }}
          >
            <Icon
              width={`${phoneWidth}`}
              height={`${phoneHeight}`}
              icon="TabletSmLeftPhone"
            />
            <motion.div variants={opacityAppearBottom(10, 0.5, 0.5)}>
              <Icon icon="TabletSmBlockchain" />
            </motion.div>
            <Icon
              width={`${phoneWidth}`}
              height={`${phoneHeight}`}
              icon="TabletSmRightPhone"
            />
          </motion.div>
        )}
        {(curMedia === 'tabletLg' || curMedia === 'desktop') && (
          <motion.div
            variants={opacityAppearBottom(10, 0.5)}
            style={{ display: 'flex ', alignItems: 'center' }}
          >
            <Icon
              width={`${phoneWidth}`}
              height={`${phoneHeight}`}
              icon="TabletSmLeftPhone"
            />
            <motion.div variants={opacityAppearBottom(10, 0.5, 0.5)}>
              <Icon icon="CenterBlockchain" />
            </motion.div>
            <Icon
              width={`${phoneWidth}`}
              height={`${phoneHeight}`}
              icon="TabletSmRightPhone"
            />
          </motion.div>
        )}
      </IconWrapper>
    </Container>
  );
};

const Phone = styled(motion.div, {
  position: 'relative',
});

const MobileBlockWrapper = styled(motion.div, {
  position: 'absolute',
  '@mobile': {
    top: -40,
    right: -40,
  },
});

const PhoneSvgWrapper = styled(motion.div, {
  position: 'absolute',
  bottom: 0,
  zIndex: -1,
});

const IconWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  '@tabletLg': {
    alignItems: 'center',
  },
});

const Container = styled('section', {
  overflow: 'hidden',
  '@mobile': {
    padding: '80px 16px 120px 16px',
    margin: '0 auto',
  },
  '@tabletSm': {
    padding: '120px 32px 80px 32px',
  },
  '@tabletLg': {
    padding: '254px 60px 157px 60px',
    display: 'flex',
    gap: '108px',
    flexDirection: 'column',
  },
  '@desktop': {
    position: 'relative',
    padding: '281px 80px 256px 80px',
    gap: '116px',
  },
});

const BenefitTypoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@mobile': {
    marginBottom: '60px',
  },
  '@tabletLg': {
    width: '55%',
    marginBottom: 0,
  },
});

const Benefit = styled('h1', {
  color: '$textPrimary2',

  '@mobile': {
    subtitle3: true,
  },
  '@tabletLg': {
    subtitle2: true,
  },
});

const BenefitTitle = styled('h1', {
  color: '$textPrimary',
  whiteSpace: 'pre-wrap',

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
});

const BenefitDescription = styled('div', {
  color: '$textSecondary',
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
});

export default OilPassBenefitThird;
