import React, { useState } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion } from 'framer-motion';

import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';
import Icon from '../../../common/Icon';

const BenefitSvgSize = {
  mobile: { width: '50px', height: '50px' },
  tabletSm: { width: '60px', height: '60px' },
  tabletLg: { width: '60px', height: '60px' },
  desktop: { width: '60px', height: '60px' },
};

const PhoneSvgSize = {
  mobile: { width: '222px', height: '442px' },
  tabletSm: { width: '260px', height: '517px' },
  tabletLg: { width: '290px', height: '577px' },
  desktop: { width: '500px', height: '650px' },
};

const OilPassBenefitFirst = () => {
  const benefitSize = useMediaSvgSize(BenefitSvgSize);
  const phoneSize = useMediaSvgSize(PhoneSvgSize);
  const { width: benefitWidth, height: benefitHeight } = benefitSize;
  const { width: phoneWidth, height: phoneHeight } = phoneSize;
  const curMedia = useMedia();

  const firstVariants = {
    initial: {},
    active: {
      x: [0, 0, -220, -220, 220, 220, 0, 0],
      opacity: [1, 1, 0, 0, 0, 0, 1, 1],
    },
  };

  const secondVariants = {
    initial: {},
    active: {
      x: [220, 220, 0, 0, -220, -220, 220, 220],
      opacity: [0, 0, 1, 1, 0, 0, 0, 0],
    },
  };

  const thirdVariants = {
    initial: {},
    active: {
      x: [220, 220, 220, 220, 0, 0, -220, -220],
      opacity: [0, 0, 0, 0, 1, 1, 0, 0],
    },
  };

  return (
    <Container>
      {(curMedia === 'mobile' || curMedia === 'tabletSm') && (
        <TransitionWrapper
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.3)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <BenefitTypoWrapper>
            <Benefit variants={onlyOpacity(0.5)}>BENEFIT 1.</Benefit>
            <BenefitTitle variants={opacityAppearBottom(8, 0.3)}>
              ICT 기반 실시간 연료 유통이력 확인
            </BenefitTitle>
            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              {curMedia === 'mobile' || curMedia === 'tabletSm'
                ? '주문별 유통 상태를 실시간으로 확인하여 급유 관리를 용이하게 하고 적재 되는 유량 정보와 선박유 성분의 동시 확인을 통해 선박유 부정유통의 가능성을 모니터링합니다.'
                : `주문별 유통 상태를 실시간으로 확인하여 급유 관리를 용이하게 하고\n적재 되는 유량 정보와 선박유 성분의 동시 확인을 통해 선박유\n부정유통의 가능성을 모니터링합니다.`}
            </BenefitDescription>
          </BenefitTypoWrapper>

          <PhoneWrapper variants={onlyOpacity(0.5)}>
            <Phone>
              <Icon
                width={`${phoneWidth}`}
                height={`${phoneHeight}`}
                icon="PhoneFrame"
              />
              <PhoneScreenWrapper
                transition={{ duration: 14, repeat: Infinity }}
                variants={firstVariants}
              >
                <Icon
                  width={`${phoneWidth}`}
                  height={curMedia === 'mobile' ? '420' : '500'}
                  icon="LoadingPermitScreen"
                />
              </PhoneScreenWrapper>

              <PhoneScreenWrapper
                transition={{ duration: 14, repeat: Infinity }}
                variants={secondVariants}
              >
                <Icon
                  width={`${phoneWidth}`}
                  height={curMedia === 'mobile' ? '420' : '500'}
                  icon="LoadingFirstScreen"
                />
              </PhoneScreenWrapper>

              <PhoneScreenWrapper
                transition={{ duration: 14, repeat: Infinity }}
                variants={thirdVariants}
              >
                <Icon
                  width={`${phoneWidth}`}
                  height={curMedia === 'mobile' ? '420' : '500'}
                  icon="LoadingSecondScreen"
                />
              </PhoneScreenWrapper>
            </Phone>
          </PhoneWrapper>

          <BenefitWrapper>
            <BoxColumn>
              <BenefitBox variants={opacityAppearBottom(8, 0.8)}>
                <IconWrapper>
                  <Icon
                    width={`${benefitWidth}`}
                    height={`${benefitHeight}`}
                    icon="Paper"
                  />
                </IconWrapper>
                <BenefitItemDescription>
                  유통이력 현황 리스트 화면을 통해 주문별 유통 상태 확인과
                  관리에 용이
                </BenefitItemDescription>
              </BenefitBox>

              <BenefitBox variants={opacityAppearBottom(8, 0.8, 3)}>
                <IconWrapper>
                  <Icon
                    width={`${benefitWidth}`}
                    height={`${benefitHeight}`}
                    icon="CheckBox"
                  />
                </IconWrapper>
                <BenefitItemDescription>
                  주문부터 출하, 인수, 적재작업까지 급유 유통 상태를 실시간으로
                  체크
                </BenefitItemDescription>
              </BenefitBox>

              <BenefitBox variants={opacityAppearBottom(8, 0.8, 7)}>
                <IconWrapper>
                  <Icon
                    width={`${benefitWidth}`}
                    height={`${benefitHeight}`}
                    icon="GallonIcon"
                  />
                </IconWrapper>
                <BenefitItemDescription>
                  적재 중 연료 탱크의 유량과 유량정보를 확인하고 적재 완료 후
                  연료공급서 발급
                </BenefitItemDescription>
              </BenefitBox>
            </BoxColumn>
          </BenefitWrapper>
        </TransitionWrapper>
      )}

      {(curMedia === 'tabletLg' || curMedia === 'desktop') && (
        <TransitionWrapper
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.5)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <BenefitTypoWrapper variants={containerVariants(0.5)}>
            <Benefit variants={onlyOpacity(0.5)}>BENEFIT 1.</Benefit>
            <BenefitTitle variants={opacityAppearBottom(8, 0.5)}>
              {`ICT 기반 실시간\n연료 유통이력 확인`}
            </BenefitTitle>
            <BenefitDescription variants={opacityAppearBottom(8, 0.5)}>
              {`주문별 유통 상태를 실시간으로 확인하여 급유 관리를 용이하게 하고\n적재 되는 유량 정보와 선박유 성분의 동시 확인을 통해 선박유\n부정유통의 가능성을 모니터링합니다.`}
            </BenefitDescription>
          </BenefitTypoWrapper>

          <BenefitWrapper>
            <PhoneWrapper variants={onlyOpacity(0.5, 1.5)}>
              <Phone>
                <Icon
                  width={`${phoneWidth}`}
                  height={`${phoneHeight}`}
                  icon="PhoneFrame"
                />
                <PhoneScreenWrapper
                  transition={{ duration: 14, repeat: Infinity }}
                  variants={firstVariants}
                >
                  <Icon
                    width={`${phoneWidth}`}
                    height={curMedia === 'tabletLg' ? '550' : '630'}
                    icon="LoadingPermitScreen"
                  />
                </PhoneScreenWrapper>

                <PhoneScreenWrapper
                  transition={{ duration: 14, repeat: Infinity }}
                  variants={secondVariants}
                >
                  <Icon
                    width={`${phoneWidth}`}
                    height={curMedia === 'tabletLg' ? '550' : '630'}
                    icon="LoadingFirstScreen"
                  />
                </PhoneScreenWrapper>

                <PhoneScreenWrapper
                  transition={{ duration: 14, repeat: Infinity }}
                  variants={thirdVariants}
                >
                  <Icon
                    width={`${phoneWidth}`}
                    height={curMedia === 'tabletLg' ? '550' : '630'}
                    icon="LoadingSecondScreen"
                  />
                </PhoneScreenWrapper>
              </Phone>
            </PhoneWrapper>

            <BoxColumn>
              <BenefitBox variants={opacityAppearBottom(8, 0.5, 1.5)}>
                <IconWrapper>
                  <Icon
                    width={`${benefitWidth}`}
                    height={`${benefitHeight}`}
                    icon="Paper"
                  />
                </IconWrapper>
                <BenefitItemDescription>
                  유통이력 현황 리스트 화면을 통해 주문별 유통 상태 확인과
                  관리에 용이
                </BenefitItemDescription>
              </BenefitBox>

              <BenefitBox variants={opacityAppearBottom(8, 0.5, 2.5)}>
                <IconWrapper>
                  <Icon
                    width={`${benefitWidth}`}
                    height={`${benefitHeight}`}
                    icon="CheckBox"
                  />
                </IconWrapper>
                <BenefitItemDescription>
                  주문부터 출하, 인수, 적재작업까지 급유 유통 상태를 실시간으로
                  체크
                </BenefitItemDescription>
              </BenefitBox>

              <BenefitBox variants={opacityAppearBottom(8, 0.5, 7)}>
                <IconWrapper>
                  <Icon
                    width={`${benefitWidth}`}
                    height={`${benefitHeight}`}
                    icon="GallonIcon"
                  />
                </IconWrapper>
                <BenefitItemDescription>
                  적재 중 연료 탱크의 유량과 유량정보를 확인하고 적재 완료 후
                  연료공급서 발급
                </BenefitItemDescription>
              </BenefitBox>
            </BoxColumn>
          </BenefitWrapper>
        </TransitionWrapper>
      )}
    </Container>
  );
};

const IconWrapper = styled('div', {
  '@mobile': {
    minWidth: '50px',
    maxHeight: '50px',
  },
  '@tabletSm': {
    minWidth: '60px',
    maxHeight: '60px',
  },
});

const PhoneWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '60px',
  },
  '@tabletLg': {
    marginBottom: 0,
  },
});

const Phone = styled(motion.div, {
  position: 'relative',
});

const PhoneScreenWrapper = styled(motion.div, {
  position: 'absolute',
  left: 0,
  bottom: 0,
  zIndex: -1,
});

const TransitionWrapper = styled(motion.div, {});

const BoxColumn = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  '@tabletSm': {
    body1: true,
    gap: '24px',
    marginBottom: '90px',
  },
  '@tabletLg': {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    padding: '0',
    gap: '32px',
    marginBottom: 0,
  },
  '@desktop': {},
});

const Container = styled(motion.section, {
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
  },
  '@desktop': {
    position: 'relative',
    padding: '281px 80px 256px 80px',
  },
});

const BenefitTypoWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '60px',
  },
  '@tabletLg': {},
  '@desktop': { marginBottom: '55px' },
});

const Benefit = styled(motion.h1, {
  color: '$textPrimary2',

  '@mobile': {
    subtitle3: true,
  },
  '@tabletLg': {
    subtitle2: true,
  },
});

const BenefitTitle = styled(motion.h1, {
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

const BenefitDescription = styled(motion.div, {
  color: '$textSecondary',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
});

const BenefitWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  '@tabletSm': {
    body1: true,
    gap: '60px',
    marginBottom: '90px',
  },
  '@tabletLg': {
    flexDirection: 'row-reverse',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const BenefitBox = styled(motion.div, {
  boxShadow: '$homepage1',
  borderRadius: '$benefitItem',
  display: 'flex',

  '@mobile': {
    padding: '16px 12px',
    gap: '12px',
  },
  '@tabletSm': {
    padding: '34px 32px 34px 20px',
    gap: '24px',
  },
  '@tabletLg': {
    width: '480px',
    padding: '24px 32px 24px 20px',
  },
  '@desktop': {},
});

const BenefitItemDescription = styled('p', {
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  wordBreak: 'keep-all',

  '@mobile': {
    footerMobile: true,
  },
  '@tabletSm': {
    subtitle1: true,
  },
  '@tabletLg': {},
});

export default OilPassBenefitFirst;
