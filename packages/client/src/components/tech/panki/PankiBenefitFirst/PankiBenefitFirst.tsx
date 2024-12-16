import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion, AnimatePresence } from 'framer-motion';
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

const ImgSvgSize = {
  mobile: { width: '265px', height: '207px' },
  tabletSm: { width: '341px', height: '267px' },
  tabletLg: { width: '312px', height: '250px' },
  desktop: { width: '441px', height: '353px' },
};

const PankiBenefitFirst = () => {
  const benefitSize = useMediaSvgSize(BenefitSvgSize);
  const imgSize = useMediaSvgSize(ImgSvgSize);
  const { width: benefitWidth, height: benefitHeight } = benefitSize;
  const { width: imgWidth, height: imgHidth } = imgSize;
  const curMedia = useMedia();

  const [delImg, setDelImg] = useState(true);
  const [appear, setAppear] = useState(false);

  const [isValid, setIsValid] = useState(false);
  const target = useRef(null);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  useEffect(() => {
    if (!target.current) return;

    const io = new IntersectionObserver(([{ isIntersecting }]) => {
      setIsValid(isIntersecting);
    }, options);

    io.observe(target.current);
    if (isValid) {
      setTimeout(() => {
        setDelImg(false);
      }, 2000);

      setTimeout(() => {
        setAppear(true);
      }, 2000);
    }
  }, [isValid]);

  return (
    <Container>
      {curMedia !== 'desktop' && (
        <TransitionWrapper
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.3)}
          viewport={{ once: true }}
        >
          <BenefitTypoWrapper>
            <Benefit variants={onlyOpacity(0.3)}>BENEFIT 1.</Benefit>
            <BenefitTitle variants={opacityAppearBottom(8, 0.3)}>
              {curMedia === 'mobile'
                ? `Data 기반\n사용자별 업무 효율 증대`
                : 'Data 기반 사용자별 업무 효율 증대'}
            </BenefitTitle>

            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              AI와 빅데이터 선박 품질관리 솔루션인 PANKI를 통해 선박 품질관리
              업무의 디지털화를 실현하여 작업자와 품질관리자, 선주사에게
              모두에게 체계적인 업무 환경을 마련합니다.
            </BenefitDescription>
          </BenefitTypoWrapper>

          <BenefitWrapper variants={containerVariants(0.3)}>
            <BenefitBox variants={opacityAppearBottom(8, 0.3)}>
              <IconWrapper>
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="Calendar"
                />
              </IconWrapper>
              <BenefitItemDescription>
                측정된 과도막, 저도막의 정확한 data를 통해 작업시간 단축 및
                효율적인 일정 스케줄링
              </BenefitItemDescription>
            </BenefitBox>

            <BenefitBox variants={opacityAppearBottom(8, 0.3)}>
              <IconWrapper>
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="Cloud"
                />
              </IconWrapper>
              <BenefitItemDescription>
                체계화된 품질 data 수집으로 공정 단계 단축 품질 분석 Report 자동
                생성
              </BenefitItemDescription>
            </BenefitBox>

            <BenefitBox variants={opacityAppearBottom(8, 0.3)}>
              <IconWrapper>
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="TargetCheck"
                />
              </IconWrapper>
              <BenefitItemDescription>
                누적된 Data로 자체 검사 체계 구축 Data를 통한 신속한 문제 원인
                파악
              </BenefitItemDescription>
            </BenefitBox>

            {curMedia === 'tabletLg' && (
              <ImgWrapper variants={onlyOpacity(0.5, 1.8)}>
                <Icon
                  width={`${imgWidth}`}
                  height={`${imgHidth}`}
                  icon="PankiBenefitFirst"
                />
              </ImgWrapper>
            )}
          </BenefitWrapper>

          {curMedia !== 'tabletLg' && (
            <ImgWrapper variants={onlyOpacity(0.5, 1.8)}>
              <Icon
                width={`${imgWidth}`}
                height={`${imgHidth}`}
                icon="PankiBenefitFirst"
              />
            </ImgWrapper>
          )}
        </TransitionWrapper>
      )}

      {curMedia === 'desktop' && (
        <DesktopFlexWrapper
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.3)}
          viewport={{ once: true }}
        >
          <BenefitTypoWrapper ref={target}>
            <Benefit variants={onlyOpacity(0.3)}>BENEFIT 1.</Benefit>
            <BenefitTitle variants={opacityAppearBottom(8, 0.3)}>
              {`Data 기반\n사용자별 업무 효율 증대`}
            </BenefitTitle>

            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              {`AI와 빅데이터 선박 품질관리 솔루션인 PANKI를 통해\n선박 품질관리 업무의 디지털화를 실현하여 작업자와 품질관리자,\n선주사에게 모두에게 체계적인 업무 환경을 마련합니다.`}
            </BenefitDescription>
          </BenefitTypoWrapper>

          <AnimatePresence>
            {delImg && (
              <ImgWrapper
                exit={{
                  y: -400,
                  opacity: 0,
                  transition: { duration: 0.5 },
                }}
                variants={onlyOpacity(0.3)}
              >
                <Icon
                  width={`${imgWidth}`}
                  height={`${imgHidth}`}
                  icon="PankiBenefitFirst"
                />
              </ImgWrapper>
            )}
          </AnimatePresence>

          {appear && (
            <BenefitWrapper
              initial="initial"
              animate="active"
              variants={containerVariants(0.5)}
            >
              <BenefitBox variants={opacityAppearBottom(100, 0.5, 0.5)}>
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="Calendar"
                />
                <BenefitItemDescription>
                  {`측정된 과도막, 저도막의 정확한 data를 통해 작\n업시간 단축 및 효율적인 일정 스케줄링`}
                </BenefitItemDescription>
              </BenefitBox>

              <BenefitBox variants={opacityAppearBottom(100, 0.5, 1)}>
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="Cloud"
                />
                <BenefitItemDescription>
                  {`체계화된 품질 data 수집으로 공정 단계 단축\n품질 분석 Report 자동 생성`}
                </BenefitItemDescription>
              </BenefitBox>

              <BenefitBox variants={opacityAppearBottom(100, 0.5, 1.5)}>
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="TargetCheck"
                />
                <BenefitItemDescription>
                  {`누적된 Data로 자체 검사 체계 구축\nData를 통한 신속한 문제 원인 파악`}
                </BenefitItemDescription>
              </BenefitBox>
            </BenefitWrapper>
          )}
        </DesktopFlexWrapper>
      )}
    </Container>
  );
};

const IconWrapper = styled('div', {
  '@mobile': {
    minWidth: '50px',
  },
  '@tabletSm': {
    minWidth: '60px',
  },
});

const TransitionWrapper = styled(motion.div, {});

const Container = styled('section', {
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

const DesktopFlexWrapper = styled(motion.div, {
  '@desktop': {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const ImgWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    justifyContent: 'center',
  },
  '@tabletLg': {
    position: 'absolute',
    right: 0,
    bottom: -70,
  },
  '@desktop': {
    top: 0,
    width: '50%',
  },
});

const BenefitTypoWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@mobile': {
    marginBottom: '60px',
  },
  '@tabletLg': {
    marginBottom: '80px',
  },
  '@desktop': {
    width: '50%',
  },
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

const BenefitDescription = styled(motion.p, {
  color: '$textSecondary',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
  '@desktop': {
    whiteSpace: 'pre-wrap',
  },
});

const BenefitWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',

  '@mobile': {
    gap: '12px',
    marginBottom: '120px',
  },
  '@tabletSm': {
    body1: true,
    gap: '24px',
  },
  '@tabletLg': {
    position: 'relative',
    marginBottom: '90px',
  },
  '@desktop': {
    width: '50%',
    margin: '0 0 0 auto',
    position: 'absolute',
    right: 0,
    top: '-25%',
  },
});

const BenefitBox = styled(motion.div, {
  boxShadow: '$homepage1',
  borderRadius: '$benefitItem',
  display: 'flex',
  '@mobile': {
    gap: '12px',
    padding: '16px 12px',
  },
  '@tabletSm': {
    gap: '24px',
    padding: '34px 32px 34px 20px',
  },
  '@tabletLg': {
    padding: '32px',
  },
});

const BenefitItemDescription = styled('p', {
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',

  '@mobile': {
    footerMobile: true,
  },
  '@tabletSm': {
    subtitle1: true,
  },
});

export default PankiBenefitFirst;
