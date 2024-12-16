import React, { useEffect, useRef, useState } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion, AnimatePresence } from 'framer-motion';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
  circleDrawer,
} from '@client/src/components/common/transitions/transitions';
import Icon from '../../../common/Icon';
import Circle from '../Circle';

const circleSvgSize = {
  mobile: { width: '116px', height: '116px' },
  tabletSm: { width: '116px', height: '116px' },
  tabletLg: { width: '160px', height: '160px' },
  desktop: { width: '116px', height: '116px' },
};

const ImgSvgSize = {
  mobile: { width: '265px', height: '207px' },
  tabletSm: { width: '341px', height: '267px' },
  tabletLg: { width: '312px', height: '250px' },
  desktop: { width: '441px', height: '353px' },
};

const PankiBenefitSecond = () => {
  const circleSize = useMediaSvgSize(circleSvgSize);
  const imgSize = useMediaSvgSize(ImgSvgSize);
  const { width: circleWidth, height: circleHeight } = circleSize;
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
            <Benefit variants={onlyOpacity(0.3)}>BENEFIT 2.</Benefit>
            <BenefitTitle variants={opacityAppearBottom(8, 0.3)}>
              원가 경쟁력 확보와 생산성 개선
            </BenefitTitle>
            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              정확한 data를 통한 도장 작업으로 불필요한 도료를 절감하여 원가
              경쟁력을 확보할 수 있습니다. 더불어, 자체 검사 체계 구축을 통해
              검사 프로세스를 단축하고 검사 총 소요 시수를 줄여 생산성을
              증대시킵니다.
            </BenefitDescription>
          </BenefitTypoWrapper>

          <BenefitWrapper variants={containerVariants(0.5)}>
            <BenefitBox
              initial={{ y: 8, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                },
              }}
              variants={opacityAppearBottom(8, 0.5)}
              viewport={{ once: true }}
            >
              <BenefitItemWrapper>
                <Icon icon="DownArrow" />
                <Title>도료 Loss 절감</Title>
                <Description>Paint LOSS Savings</Description>
              </BenefitItemWrapper>

              <CircleContainer>
                <Circle
                  color="#c5282a"
                  circleWidth={circleWidth}
                  circleHeight={circleHeight}
                  circleDrawer={circleDrawer(1, 0.6, 1.5)}
                />
                <CircleText>60%</CircleText>
              </CircleContainer>
            </BenefitBox>

            <BenefitBox
              initial={{ y: 8, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                },
              }}
              variants={opacityAppearBottom(8, 0.5)}
              viewport={{ once: true }}
            >
              <BenefitItemWrapper>
                <Icon icon="UpArrow" />
                <Title>생산성 증가</Title>
                <Description>Productivity Increase</Description>
              </BenefitItemWrapper>

              <CircleContainer>
                <Circle
                  color="#b1d4f4"
                  circleWidth={circleWidth}
                  circleHeight={circleHeight}
                  circleDrawer={circleDrawer(0.7, 1, 2)}
                />
                <CircleText>7.6%</CircleText>
              </CircleContainer>
            </BenefitBox>

            <BenefitBox
              initial={{ y: 8, opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                },
              }}
              variants={opacityAppearBottom(8, 0.5)}
              viewport={{ once: true }}
            >
              <BenefitItemWrapper>
                <Icon icon="BarGraph" />
                <Title>총 기대효과</Title>
                <Description>Total BENEFIT</Description>
              </BenefitItemWrapper>

              <CircleContainer>
                <Circle
                  color="#1C49A6"
                  circleWidth={circleWidth}
                  circleHeight={circleHeight}
                  circleDrawer={circleDrawer(0, 1, 2.5)}
                />
                <CircleText>300억원</CircleText>
              </CircleContainer>
            </BenefitBox>
          </BenefitWrapper>
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
            <Benefit variants={onlyOpacity(0.3)}>BENEFIT 2.</Benefit>
            <BenefitTitle variants={opacityAppearBottom(8, 0.3)}>
              {`원가 경쟁력 확보와\n생산성 개선`}
            </BenefitTitle>
            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              정확한 data를 통한 도장 작업으로 불필요한 도료를 절감하여 원가
              경쟁력을 확보할 수 있습니다. 더불어, 자체 검사 체계 구축을 통해
              검사 프로세스를 단축하고 검사 총 소요 시수를 줄여 생산성을
              증대시킵니다.
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
                  icon="PankiBenefitSecond"
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
              <BenefitBox
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 0.5,
                  },
                }}
              >
                <BenefitItemWrapper>
                  <Icon icon="DownArrow" />
                  <Title>도료 Loss 절감</Title>
                  <Description>Paint LOSS Savings</Description>
                </BenefitItemWrapper>
                <CircleContainer>
                  <Circle
                    color="#c5282a"
                    circleWidth={circleWidth}
                    circleHeight={circleHeight}
                    circleDrawer={circleDrawer(1, 0.6, 1.5)}
                  />
                  <CircleText>60%</CircleText>
                </CircleContainer>
              </BenefitBox>

              <BenefitBox
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1,
                  },
                }}
              >
                <BenefitItemWrapper>
                  <Icon icon="UpArrow" />
                  <Title>생산성 증가</Title>
                  <Description>Productivity Increase</Description>
                </BenefitItemWrapper>
                <CircleContainer>
                  <Circle
                    color="#b1d4f4"
                    circleWidth={circleWidth}
                    circleHeight={circleHeight}
                    circleDrawer={circleDrawer(0.7, 1, 2)}
                  />
                  <CircleText>7.6%</CircleText>
                </CircleContainer>
              </BenefitBox>

              <BenefitBox
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1.5,
                  },
                }}
              >
                <BenefitItemWrapper>
                  <Icon icon="BarGraph" />
                  <Title>총 기대효과</Title>
                  <Description>Total BENEFIT</Description>
                </BenefitItemWrapper>
                <CircleContainer>
                  <Circle
                    color="#1C49A6"
                    circleWidth={circleWidth}
                    circleHeight={circleHeight}
                    circleDrawer={circleDrawer(0, 1, 2.5)}
                  />
                  <CircleText>300억원</CircleText>
                </CircleContainer>
              </BenefitBox>
            </BenefitWrapper>
          )}
        </DesktopFlexWrapper>
      )}
    </Container>
  );
};

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
    flexDirection: 'row-reverse',
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
    bottom: 0,
  },
  '@desktop': {
    display: 'block',
    top: 0,
    left: 0,
    width: '50%',
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
    marginBottom: '80px',
  },
  '@desktop': {
    width: '50%',
  },
});

const Benefit = styled(motion.h2, {
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
  wordBreak: 'keep-all',
  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
});

const BenefitItemWrapper = styled('div', {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '12px',
  },
});

const BenefitBox = styled(motion.div, {
  boxShadow: '$homepage1',
  borderRadius: '$benefitItem',
  display: 'flex',
  gap: '12px',

  '@mobile': {
    padding: '16px 16px 16px 20px',
    justifyContent: 'space-between',
  },
  '@tabletSm': {
    padding: '18px 24px',
  },
  '@tabletLg': {
    padding: '32px',
    flexDirection: 'column-reverse',
    flex: 1,
  },
  '@desktop': {
    width: '500px',
    flexDirection: 'row',
  },
});

const BenefitWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',

  '@mobile': {
    marginBottom: '60px',
    gap: '12px',
  },
  '@tabletSm': {
    body1: true,
    gap: '24px',
    marginBottom: '90px',
  },
  '@tabletLg': {
    flexDirection: 'row',
    position: 'relative',
    gap: '18px',
  },
  '@desktop': {
    width: '50%',
    margin: 0,
    flexDirection: 'column',
  },
});

const CircleContainer = styled(motion.div, {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
});

const CircleText = styled(motion.span, {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  menu: true,
});

const Title = styled('h1', {
  color: '$textPrimary',

  '@mobile': {
    subtitle2: true,
  },
  '@tabletSm': {
    heading5: true,
  },
});

const Description = styled('p', {
  color: '$textSecondary',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
});

export default PankiBenefitSecond;
