import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import useMedia from '@client/src/hooks/common/useMedia';
import { AnimatePresence, motion } from 'framer-motion';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';
import Icon from '../../../common/Icon';

const iconSvgSize = {
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

const EcoStampSection = () => {
  const iconSize = useMediaSvgSize(iconSvgSize);
  const imgSize = useMediaSvgSize(ImgSvgSize);
  const { width: iconWidth, height: iconHeight } = iconSize;
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
      }, 3200);
    }
  }, [isValid]);

  return (
    <Container
      initial="initial"
      whileInView="active"
      variants={containerVariants(0.3)}
      viewport={{ once: true, amount: 0.2 }}
    >
      <BenefitTypoWrapper ref={target}>
        {(curMedia === 'mobile' || curMedia === 'tabletSm') && (
          <ImgWrapper variants={onlyOpacity(0.5)}>
            <Icon
              width={`${imgWidth}`}
              height={`${imgHidth}`}
              icon="EcoStamp"
            />
          </ImgWrapper>
        )}
        <TypoWrapperContainer>
          <TypoWrapper>
            <Service variants={onlyOpacity(0.5)}>SERVICE</Service>
            <BenefitTitle variants={opacityAppearBottom(8, 0.5)}>
              ECO STAMP
            </BenefitTitle>

            <BenefitDescription variants={opacityAppearBottom(8, 0.5)}>
              {`올바른 선박 오염물질 배출을 위한\n블록체인 기반 지능형 선박 탄소 저감 솔루션`}
            </BenefitDescription>
          </TypoWrapper>
        </TypoWrapperContainer>

        {curMedia === 'tabletLg' && (
          <ImgWrapper variants={onlyOpacity(0.5)}>
            <Icon
              width={`${imgWidth}`}
              height={`${imgHidth}`}
              icon="EcoStamp"
            />
          </ImgWrapper>
        )}

        {curMedia === 'desktop' && (
          <>
            <AnimatePresence>
              {delImg && (
                <ImgWrapper
                  exit={{
                    y: -400,
                    opacity: 0,
                    transition: { duration: 0.5 },
                  }}
                  variants={onlyOpacity(0.5)}
                >
                  <Icon
                    width={`${imgWidth}`}
                    height={`${imgHidth}`}
                    icon="EcoStamp"
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
                <BenefitBox variants={opacityAppearBottom(100, 0.5)}>
                  <IconWrapper>
                    <Icon
                      width={`${iconWidth}`}
                      height={`${iconHeight}`}
                      icon="Block"
                    />
                  </IconWrapper>
                  <BenefitItemDescription>
                    VOC 제거장치의 정보를 블록체인에 저장하여 설비 구동시간과
                    부정방출 기록 확인
                  </BenefitItemDescription>
                </BenefitBox>

                <BenefitBox variants={opacityAppearBottom(100, 0.5)}>
                  <IconWrapper>
                    <Icon
                      width={`${iconWidth}`}
                      height={`${iconHeight}`}
                      icon="CO2CloudBox"
                    />
                  </IconWrapper>
                  <BenefitItemDescription>
                    신뢰성 있는 Data를 통한 탄소 배출 검사를 통해 입항 절차를
                    단축하고 항만 경쟁력 강화
                  </BenefitItemDescription>
                </BenefitBox>

                <BenefitBox variants={opacityAppearBottom(100, 0.5)}>
                  <IconWrapper>
                    <Icon
                      width={`${iconWidth}`}
                      height={`${iconHeight}`}
                      icon="Leaf"
                    />
                  </IconWrapper>
                  <BenefitItemDescription>
                    IMO 2020 환경규제 준수와 ESG 경영 실현
                  </BenefitItemDescription>
                </BenefitBox>
              </BenefitWrapper>
            )}
          </>
        )}
      </BenefitTypoWrapper>

      {curMedia !== 'desktop' && (
        <BenefitWrapper>
          <BenefitBox variants={opacityAppearBottom(8, 0.5)}>
            <IconWrapper>
              <Icon
                width={`${iconWidth}`}
                height={`${iconHeight}`}
                icon="Block"
              />
            </IconWrapper>
            <BenefitItemDescription>
              VOC 제거장치의 정보를 블록체인에 저장하여 설비 구동시간과 부정방출
              기록 확인
            </BenefitItemDescription>
          </BenefitBox>

          <BenefitBox variants={opacityAppearBottom(8, 0.5)}>
            <IconWrapper>
              <Icon
                width={`${iconWidth}`}
                height={`${iconHeight}`}
                icon="CO2CloudBox"
              />
            </IconWrapper>
            <BenefitItemDescription>
              신뢰성 있는 Data를 통한 탄소 배출 검사를 통해 입항 절차를 단축하고
              항만 경쟁력 강화
            </BenefitItemDescription>
          </BenefitBox>

          <BenefitBox variants={opacityAppearBottom(8, 0.5)}>
            <IconWrapper>
              <Icon
                width={`${iconWidth}`}
                height={`${iconHeight}`}
                icon="Leaf"
              />
            </IconWrapper>
            <BenefitItemDescription>
              IMO 2020 환경규제 준수와 ESG 경영 실현
            </BenefitItemDescription>
          </BenefitBox>
        </BenefitWrapper>
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

const TypoWrapperContainer = styled('div', {
  '@tabletLg': {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'flex-end',
  },
  '@desktop': {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TypoWrapper = styled('div', {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
});

const Container = styled(motion.section, {
  '@mobile': {
    padding: '80px 16px 160px 16px',
    margin: '0 auto',
  },
  '@tabletSm': {
    padding: '120px 32px 240px 32px',
  },
  '@tabletLg': {
    padding: '0 60px 320px 60px',
  },
  '@desktop': {
    position: 'relative',
    padding: '0 80px 288px 80px',
  },
});

const ImgWrapper = styled(motion.div, {
  '@mobile': {
    padding: '0 50px 60px 50px',
    display: 'flex',
    justifyContent: 'center',
  },
  '@tabletLg': {
    width: '50%',
    padding: 0,
  },
});

const BenefitTypoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@mobile': {
    marginBottom: '40px',
  },
  '@tabletSm': {
    marginBottom: '60px',
  },
  '@tabletLg': {
    flexDirection: 'row',
    marginBottom: '94px',
    justifyContent: 'space-between',
  },
  '@desktop': {
    flexDirection: 'row-reverse',
    minHeight: '353px',
    marginBottom: 0,
    gap: 0,
  },
});

const Service = styled(motion.h1, {
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
  display: 'flex',
  flexDirection: 'column',

  '@mobile': {
    gap: '12px',
  },
  '@tabletSm': {
    body1: true,
    gap: '24px',
  },
  '@tabletLg': {
    position: 'relative',
  },
  '@desktop': {
    width: '50%',
  },
});

const BenefitBox = styled(motion.div, {
  boxShadow: '$homepage1',
  borderRadius: '$benefitItem',
  display: 'flex',
  '@mobile': {
    gap: '10px',
    padding: '16px 12px',
  },
  '@tabletSm': {
    gap: '24px',
    padding: '24px 20px',
  },
  '@tabletLg': {
    padding: '18px 20px',
  },
});

const BenefitItemDescription = styled('p', {
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',
  width: '100%',

  '@mobile': {
    footerMobile: true,
  },
  '@tabletSm': {
    subtitle1: true,
  },
});

export default EcoStampSection;
