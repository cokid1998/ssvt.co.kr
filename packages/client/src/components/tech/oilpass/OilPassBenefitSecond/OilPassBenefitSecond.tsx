import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion } from 'framer-motion';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';
import { StaticImage } from 'gatsby-plugin-image';
import Icon from '../../../common/Icon';
import OilPassBackground1 from '../../../../assets/images/tech/oilpass/oilpass1Background.png';
import OilPassBackground2 from '../../../../assets/images/tech/oilpass/oilpass2Background.png';
import OilPassBackground3 from '../../../../assets/images/tech/oilpass/oilpass3Background.png';

const iconSvgSize = {
  mobile: { width: '31.25px', height: '32.25px' },
  tabletSm: { width: '37.5px', height: '37.5px' },
  tabletLg: { width: '37.5px', height: '37.5px' },
  desktop: { width: '37.5px', height: '37.5px' },
};

const OilPassBenefitSecond = () => {
  const benefitSize = useMediaSvgSize(iconSvgSize);
  const { width: benefitWidth, height: benefitHeight } = benefitSize;
  const curMedia = useMedia();

  const firstVariants = {
    initial: { opacity: 1 },
    active: {
      opacity: [1, 1, 0, 0, 1, 1],
    },
  };

  const secondVariants = {
    initial: { opacity: 0 },
    active: {
      opacity: [0, 0, 1, 1, 0, 0],
    },
  };

  const thirdVariants = {
    initial: { opacity: 0 },
    active: {
      opacity: [0, 0, 0, 0, 1, 1, 0, 0],
    },
  };

  return (
    <Container>
      {(curMedia === 'mobile' || curMedia === 'tabletSm') && (
        <motion.div
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.3)}
          viewport={{ once: true }}
        >
          <BenefitTypoWrapper>
            <Benefit variants={onlyOpacity(0.3)}>BENEFIT 2.</Benefit>

            <BenefitTitle variants={opacityAppearBottom(8, 0.3)}>
              선박유 유통 과정의 관리 효율화
            </BenefitTitle>

            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              선박유 주문과 적재 완료까지의 전체 과정에서 발생되는 거래를
              블록체인과 IoT가 결합한 네트워크를 통해 자동화하여 시간 및 비용이
              절감됩니다. 또한, 수집되는 신뢰도 높은 데이터를 통해 선박유 거래
              투명성을 확보합니다.
            </BenefitDescription>
          </BenefitTypoWrapper>

          <BoxColumn>
            <BenefitBox variants={opacityAppearBottom(8, 0.3)} first>
              <Icon
                width={`${benefitWidth}`}
                height={`${benefitHeight}`}
                icon="Petrol"
              />
              <BenefitItemDescription>
                {`블록체인과 IoT가 결합한 네트워크의\n거래 자동화를 통해 시간 및 비용 절감`}
              </BenefitItemDescription>
            </BenefitBox>

            <BenefitBox variants={opacityAppearBottom(8, 0.3)} second>
              <Icon
                width={`${benefitWidth}`}
                height={`${benefitHeight}`}
                icon="Magnifiers"
              />
              <BenefitItemDescription>
                {`노드에 참여하며 선박유 전체 유통과정에서\n발생한 이벤트 및 불법급유 모니터링`}
              </BenefitItemDescription>
            </BenefitBox>

            <BenefitBox variants={opacityAppearBottom(8, 0.3)} third>
              <Icon
                width={`${benefitWidth}`}
                height={`${benefitHeight}`}
                icon="Checked"
              />
              <BenefitItemDescription>
                {`해운사 소유 선박에 급유되는\n유류의 원산지 및 검증된 품질 정보를 확인`}
              </BenefitItemDescription>
            </BenefitBox>
          </BoxColumn>
        </motion.div>
      )}

      {(curMedia === 'tabletLg' || curMedia === 'desktop') && (
        <>
          <ImgWrapper>
            <motion.img
              src={OilPassBackground1}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                position: 'absolute',
              }}
              initial="initial"
              whileInView="active"
              variants={firstVariants}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.img
              src={OilPassBackground2}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                position: 'absolute',
              }}
              initial="initial"
              whileInView="active"
              variants={secondVariants}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.img
              src={OilPassBackground3}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                position: 'absolute',
              }}
              initial="initial"
              whileInView="active"
              variants={thirdVariants}
              transition={{ duration: 12, repeat: Infinity }}
            />
          </ImgWrapper>

          <BenefitTypoWrapper>
            <DesktopBenefitTypoWrapper>
              <Benefit>BENEFIT 2.</Benefit>

              <BenefitTitle>{`선박유 유통 과정의\n관리 효율화`}</BenefitTitle>

              <BenefitDescription>
                선박유 주문과 적재 완료까지의 전체 과정에서 발생되는 거래를
                블록체인과 IoT가 결합한 네트워크를 통해 자동화하여 시간 및
                비용이 절감됩니다. 또한, 수집되는 신뢰도 높은 데이터를 통해
                선박유 거래 투명성을 확보합니다.
              </BenefitDescription>
            </DesktopBenefitTypoWrapper>

            <motion.div
              initial="initial"
              whileInView="active"
              variants={containerVariants(3)}
            >
              <IconWrapper>
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="Petrol"
                />
                <TypoWrapper>
                  {`블록체인과 IoT가 결합한 네트워크의\n거래 자동화를 통해 시간 및 비용 절감`}
                </TypoWrapper>
              </IconWrapper>

              {/* <IconWrapper
                initial="initial"
                whileInView="active"
                variants={secondVariants}
                transition={{ duration: 10, repeat: Infinity }}
              >
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="Magnifiers"
                />
                <TypoWrapper>
                  {`노드에 참여하며 선박유 전체 유통과정에서\n발생한 이벤트 및 불법급유 모니터링`}
                </TypoWrapper>
              </IconWrapper>

              <IconWrapper
                initial="initial"
                whileInView="active"
                variants={thirdVariants}
                transition={{ duration: 12, repeat: Infinity }}
              >
                <Icon
                  width={`${benefitWidth}`}
                  height={`${benefitHeight}`}
                  icon="Checked"
                />
                <TypoWrapper>
                  {`해운사 소유 선박에 급유되는\n유류의 원산지 및 검증된 품질 정보를 확인`}
                </TypoWrapper>
              </IconWrapper> */}
            </motion.div>
          </BenefitTypoWrapper>
        </>
      )}
    </Container>
  );
};

const DesktopBenefitTypoWrapper = styled(motion.div, {
  '@tabletLg': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  '@desktop': {
    marginBottom: '60px',
  },
});

const IconWrapper = styled(motion.div, {
  '@tabletLg': {
    display: 'flex',
    gap: '28px',
    alignItems: 'center',
  },
});

const TypoWrapper = styled('p', {
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',

  '@tabletLg': {
    footer: true,
  },

  '@desktop': {
    subtitle1: true,
  },
});

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
    display: 'flex',
    gap: '50px',
  },
  '@desktop': {
    position: 'relative',
    padding: '281px 80px 256px 80px',
    gap: '100px',
  },
});

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
});

const DesktopWrapper = styled('div', {
  '@desktop': {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const ImgWrapper = styled(motion.div, {
  width: '50%',
  position: 'relative',
});

const BenefitTypoWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@mobile': {
    marginBottom: '60px',
  },
  '@tabletLg': {
    width: '50%',
    position: 'relative',
    marginBottom: 0,
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
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',
  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
});

const BenefitWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '@mobile': {
    gap: '12px',
  },
  '@tabletSm': {
    body1: true,
    gap: '24px',
    marginBottom: '90px',
  },
  '@tabletLg': {
    position: 'relative',
  },
  '@desktop': {
    width: '50%',
    margin: '0 0 0 auto',
  },
});

const BenefitBox = styled(motion.div, {
  boxShadow: '$homepage1',
  borderRadius: '$benefitItem',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  gap: '16px',

  '@mobile': {
    padding: '23px 20px',
  },
  '@tabletSm': {
    padding: '34px 32px 34px 24px',
    gap: '24px',
  },
  '@tabletLg': {
    padding: '32px',
  },

  variants: {
    first: {
      true: {
        '&::before': {
          content: '',
          background: `url(${OilPassBackground1})`,
          borderRadius: '$benefitItem',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.2,
          zIndex: -1,
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
        },
      },
    },
    second: {
      true: {
        '&::before': {
          content: '',
          background: `url(${OilPassBackground2})`,
          borderRadius: '$benefitItem',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.2,
          zIndex: -1,
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
        },
      },
    },
    third: {
      true: {
        '&::before': {
          content: '',
          background: `url(${OilPassBackground3})`,
          borderRadius: '$benefitItem',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.2,
          zIndex: -1,
          position: 'absolute',
          top: '0px',
          left: '0px',
          right: '0px',
          bottom: '0px',
        },
      },
    },
  },
});

const BenefitItemDescription = styled('p', {
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    footerMobile: true,
  },
  '@tabletSm': {
    body2: true,
  },
});

export default OilPassBenefitSecond;
