import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import Icon from '@client/src/components/common/Icon';
import useMedia from '@client/src/hooks/common/useMedia';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import IconButton from '../../common/IconButton';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '../../common/transitions/transitions';

const techIconSize = {
  mobile: { width: '60px', height: '60px' },
  tabletSm: { width: '88px', height: '88px' },
  tabletLg: { width: '96px', height: '96px' },
  desktop: { width: '100px', height: '100px' },
};

const buttonSize = {
  mobile: { width: '40px', height: '40px' },
  tabletSm: { width: '48px', height: '48px' },
  tabletLg: { width: '48px', height: '48px' },
  desktop: { width: '56px', height: '56px' },
};

const ThirdSection = () => {
  const curMedia = useMedia();
  const { width: techIconWidth, height: techIconheight } =
    useMediaSvgSize(techIconSize);

  const { width: buttonWidth, height: buttonheight } =
    useMediaSvgSize(buttonSize);

  return (
    <Container>
      <TypoWrapper
        initial="initial"
        whileInView="active"
        variants={containerVariants(0.3)}
        viewport={{ once: true, amount: 1 }}
      >
        <Tech variants={onlyOpacity(0.5)}>SSVT TECH</Tech>

        <Title
          variants={opacityAppearBottom(8, 0.5)}
        >{`스마트 해양을 이끌어갈\nSSVT만의 솔루션`}</Title>

        <Description variants={opacityAppearBottom(8, 0.5)}>
          블록체인과 AI, IOT를 기술을 접목하여
          {curMedia === 'mobile' && '\n'} 체계적인 조선·해양·항만 서비스를
          구축합니다
        </Description>
      </TypoWrapper>

      {curMedia === 'desktop' ? (
        <TechWrapper
          initial="initial"
          whileInView="active"
          viewport={{ once: true, amount: 0.15 }}
        >
          <ColumnWrapper left>
            <Link to="/tech">
              <TechBox variants={opacityAppearBottom(8, 0.5)}>
                <IconContainer>
                  <Icon
                    width={`${techIconWidth}`}
                    height={`${techIconheight}`}
                    icon="TechPanki"
                  />
                </IconContainer>

                <PlusIconContainer>
                  <IconButton
                    width={`${buttonWidth}`}
                    height={`${buttonheight}`}
                    icon="PlusButton"
                  />
                </PlusIconContainer>

                <TypoWrapper leftAlign>
                  <ServiceTitle>PANKI</ServiceTitle>
                  <ServiceDescription>{`위치측위 기반\n스마트 도막 측정 시스템`}</ServiceDescription>
                </TypoWrapper>
              </TechBox>
            </Link>
            <Link to="/tech/etc">
              <TechBox
                variants={opacityAppearBottom(8, 0.5, 1)}
                css={{ marginBottom: 0 }}
              >
                <IconContainer>
                  <Icon
                    width={`${techIconWidth}`}
                    height={`${techIconheight}`}
                    icon="TechOceanview"
                  />
                </IconContainer>

                <PlusIconContainer>
                  <IconButton
                    width={`${buttonWidth}`}
                    height={`${buttonheight}`}
                    icon="PlusButton"
                  />
                </PlusIconContainer>

                <TypoWrapper leftAlign>
                  <ServiceTitle>OCEANVIEW</ServiceTitle>
                  <ServiceDescription>
                    {`도선사의 해양 사고 방지를 위한\n선박 어라운드뷰 시스템`}
                  </ServiceDescription>
                </TypoWrapper>
              </TechBox>
            </Link>
          </ColumnWrapper>

          <ColumnWrapper right>
            <Link to="/tech/oilpass">
              <TechBox variants={opacityAppearBottom(8, 0.5, 0.5)}>
                <IconContainer>
                  <Icon
                    width={`${techIconWidth}`}
                    height={`${techIconheight}`}
                    icon="TechOilpass"
                  />
                </IconContainer>

                <PlusIconContainer>
                  <IconButton
                    width={`${buttonWidth}`}
                    height={`${buttonheight}`}
                    icon="PlusButton"
                  />
                </PlusIconContainer>

                <TypoWrapper leftAlign>
                  <ServiceTitle>OILPASS</ServiceTitle>
                  <ServiceDescription>
                    {`블록체인 기반\n선박유 부정유통방지 솔루션`}
                  </ServiceDescription>
                </TypoWrapper>
              </TechBox>
            </Link>

            <Link to="/tech/etc">
              <TechBox
                variants={opacityAppearBottom(8, 0.5, 1.5)}
                css={{ marginBottom: 0 }}
              >
                <IconContainer>
                  <Icon
                    width={`${techIconWidth}`}
                    height={`${techIconheight}`}
                    icon="TechSSVT"
                  />
                </IconContainer>

                <PlusIconContainer>
                  <IconButton
                    width={`${buttonWidth}`}
                    height={`${buttonheight}`}
                    icon="PlusButton"
                  />
                </PlusIconContainer>

                <TypoWrapper leftAlign>
                  <ServiceTitle>PASSTHRU</ServiceTitle>
                  <ServiceDescription>
                    {`안전 관리와 직원 신원 확인을 위한\n블록체인 기반 조선소 출입관리 시스템`}
                  </ServiceDescription>
                </TypoWrapper>
              </TechBox>
            </Link>
          </ColumnWrapper>
        </TechWrapper>
      ) : (
        <TechWrapper
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.5)}
          viewport={{ once: true, amount: 0.1 }}
        >
          <Link to="/tech">
            <TechBox variants={opacityAppearBottom(8, 0.5)}>
              <IconContainer>
                <Icon
                  width={`${techIconWidth}`}
                  height={`${techIconheight}`}
                  icon="TechPanki"
                />
              </IconContainer>

              <PlusIconContainer>
                <IconButton
                  width={`${buttonWidth}`}
                  height={`${buttonheight}`}
                  icon="PlusButton"
                />
              </PlusIconContainer>

              <TypoWrapper leftAlign>
                <ServiceTitle>PANKI</ServiceTitle>
                <ServiceDescription>{`위치측위 기반\n스마트 도막 측정 시스템`}</ServiceDescription>
              </TypoWrapper>
            </TechBox>
          </Link>
          <Link to="/tech/oilpass">
            <TechBox variants={opacityAppearBottom(8, 0.5)}>
              <IconContainer>
                <Icon
                  width={`${techIconWidth}`}
                  height={`${techIconheight}`}
                  icon="TechOilpass"
                />
              </IconContainer>

              <PlusIconContainer>
                <IconButton
                  width={`${buttonWidth}`}
                  height={`${buttonheight}`}
                  icon="PlusButton"
                />
              </PlusIconContainer>

              <TypoWrapper leftAlign>
                <ServiceTitle>OILPASS</ServiceTitle>
                <ServiceDescription>
                  {`블록체인 기반\n선박유 부정유통방지 솔루션`}
                </ServiceDescription>
              </TypoWrapper>
            </TechBox>
          </Link>

          <Link to="/tech/etc">
            <TechBox variants={opacityAppearBottom(8, 0.5)}>
              <IconContainer>
                <Icon
                  width={`${techIconWidth}`}
                  height={`${techIconheight}`}
                  icon="TechOceanview"
                />
              </IconContainer>

              <PlusIconContainer>
                <IconButton
                  width={`${buttonWidth}`}
                  height={`${buttonheight}`}
                  icon="PlusButton"
                />
              </PlusIconContainer>

              <TypoWrapper leftAlign>
                <ServiceTitle>OCEANVIEW</ServiceTitle>
                <ServiceDescription>
                  {`도선사의 해양 사고 방지를 위한\n선박 어라운드뷰 시스템`}
                </ServiceDescription>
              </TypoWrapper>
            </TechBox>
          </Link>
          <Link to="/tech/etc">
            <TechBox variants={opacityAppearBottom(8, 0.5)}>
              <IconContainer>
                <Icon
                  width={`${techIconWidth}`}
                  height={`${techIconheight}`}
                  icon="TechSSVT"
                />
              </IconContainer>

              <PlusIconContainer>
                <IconButton
                  width={`${buttonWidth}`}
                  height={`${buttonheight}`}
                  icon="PlusButton"
                />
              </PlusIconContainer>
              <TypoWrapper leftAlign>
                <ServiceTitle>PASSTHRU</ServiceTitle>
                <ServiceDescription>
                  {`안전 관리와 직원 신원 확인을 위한\n블록체인 기반 조선소 출입관리 시스템`}
                </ServiceDescription>
              </TypoWrapper>
            </TechBox>
          </Link>
        </TechWrapper>
      )}
    </Container>
  );
};

const ColumnWrapper = styled('div', {
  width: '47%',

  variants: {
    left: {
      true: {
        marginTop: '35px',
        left: 0,
      },
    },
    right: {
      true: {
        marginTop: '120px',
        right: 0,
      },
    },
  },
});

const ServiceTitle = styled('div', {
  color: '$textPrimary',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    heading5: true,
    marginBottom: '16px',
  },
  '@tabletSm': {
    heading6: true,
  },
  '@tabletLg': {
    heading3: true,
  },
  '@desktop': {
    heading2: true,
    marginBottom: '24px',
  },
});

const ServiceDescription = styled('div', {
  color: '$textSecondary',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
  '@desktop': {
    body2: true,
  },
});

const Container = styled(motion.section, {
  position: 'relative',
  margin: '0 auto',

  '@mobile': {
    maxWidth: '500px',
    padding: '140px 0',
  },
  '@tabletSm': {
    maxWidth: '800px',
    padding: '140px 32px',
  },
  '@tabletLg': {
    padding: '0 60px',
    maxWidth: 'none',
  },
  '@desktop': {
    padding: '0 80px',
  },
});

const TypoWrapper = styled(motion.div, {
  '@mobile': {
    textAlign: 'center',
  },
  '@desktop': {
    marginBottom: '155px',
  },

  variants: {
    leftAlign: {
      true: {
        textAlign: 'left',
        marginBottom: 0,
      },
    },
  },
});

const Tech = styled(motion.div, {
  whiteSpace: 'pre-wrap',
  color: '$textPrimary2',

  '@mobile': {
    subtitle3: true,
    marginBottom: '18px',
  },

  '@tabletSm': {
    subtitle2: true,
    textAlign: 'left',
  },

  '@tabletLg': {},

  '@desktop': {},
});

const Title = styled(motion.h1, {
  whiteSpace: 'pre-wrap',
  color: '$textPrimary',

  '@mobile': {
    heading5: true,
    marginBottom: '32px',
  },

  '@tabletSm': {
    heading7: true,
    textAlign: 'left',
  },

  '@tabletLg': {
    heading6: true,
  },

  '@desktop': {
    heading3: true,
  },
});

const Description = styled(motion.p, {
  color: '$textSecondary',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
    textAlign: 'left',
  },
  '@tabletLg:': {},
});

const TechWrapper = styled(motion.div, {
  '@mobile': {
    padding: '81px 16px 0 16px',
  },
  '@tabletSm': {
    padding: '135px 0 0 0',
  },
  '@tabletLg': {
    padding: '100px 0 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  '@desktop': {
    padding: '0 0 280px 0',
    display: 'flex',
  },
});

const TechBox = styled(motion.div, {
  boxShadow: '$homepage1',
  position: 'relative',
  borderRadius: '$component',

  '@mobile': {
    padding: '65px 24px 24px 24px',
    marginBottom: '42px',
  },
  '@tabletSm': {
    padding: '106px 32px 48px 32px',
    marginBottom: '54px',
  },
  '@tabletLg': {
    width: '49%',
    marginBottom: '95px',
  },
  '@desktop': {
    width: '100%',
  },

  variants: {
    marginBottomZero: {
      true: {
        marginBottom: 0,
      },
    },
  },
});

const IconContainer = styled('div', {
  '@mobile': {
    width: '60px',
    height: '60px',
    position: 'absolute',
    top: '-21px',
    left: '24px',
  },
  '@tabletSm': {
    top: '-25px',
    left: '32px',
  },
  '@tabletLg': {
    top: '-35px',
  },
  '@desktop': {
    position: 'absolute',
    top: '-35px',
    left: '48px',
  },
});

const PlusIconContainer = styled('div', {
  '@mobile': {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  '@tabletSm': {
    top: '122px',
    right: '32px',
  },
  '@tabletLg': {
    top: '36px',
    right: '36px',
  },
  '@desktop': {
    top: '40px',
    right: '40px',
  },
});

export default ThirdSection;
