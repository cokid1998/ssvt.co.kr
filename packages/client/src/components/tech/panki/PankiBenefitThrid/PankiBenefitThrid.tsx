import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMedia from '@client/src/hooks/common/useMedia';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import {
  containerVariants,
  onlyOpacity,
  opacityAppearBottom,
} from '@client/src/components/common/transitions/transitions';
import Icon from '../../../common/Icon';

const ESG_SRC = '../../../../assets/images/tech/panki/ESGImg.png';

const iconSvgSize = {
  mobile: { width: '37.5px', height: '37.5px' },
  tabletSm: { width: '37.5px', height: '37.5px' },
  tabletLg: { width: '37.5px', height: '37.5px' },
  desktop: { width: '37.5px', height: '37.5px' },
};

const PankiBenefitThrid = () => {
  const curMedia = useMedia();
  const { width, height } = useMediaSvgSize(iconSvgSize);

  return (
    <Container>
      {curMedia !== 'desktop' && (
        <Wrapper
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.3)}
          viewport={{ once: true, amount: 0.3 }}
        >
          <BenefitTypoWrapper>
            <Benefit variants={onlyOpacity(0.3)}>BENEFIT 3.</Benefit>

            {curMedia === 'tabletLg' ? (
              <BenefitTitle
                variants={opacityAppearBottom(8, 0.3)}
              >{`선박탄소 절감을 통한\nESG 가치 창출`}</BenefitTitle>
            ) : (
              <BenefitTitle variants={opacityAppearBottom(8, 0.3)}>
                선박탄소 절감을 통한 ESG 가치 창출
              </BenefitTitle>
            )}

            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              PANKI를 활용한 효율적인 도장작업을 통해, 도장작업에서 발생되는
              전기 및 가스사용을 줄이고 조선소 도장 공정 탄소 저감과 생산공정
              탄소 저감에 동참합니다.
            </BenefitDescription>

            <BenefitWrapper variants={opacityAppearBottom(8, 0.3)}>
              <Icon width={`${width}`} height={`${height}`} icon="CO2Cloud" />
              <TypoWrapper>
                {`IMO 선박탄소배출 \`30년 40% 절감 목표 설정\n정부 2050 탄소중립 정책 동참 선언`}
              </TypoWrapper>
            </BenefitWrapper>
          </BenefitTypoWrapper>

          <ImageWrapper
            initial="initial"
            whileInView="active"
            variants={onlyOpacity(0.5, 1.2)}
            viewport={{ once: true }}
          >
            <StaticImage
              src={`${ESG_SRC}`}
              alt="Esg_image"
              style={{ borderRadius: '12px' }}
            />
          </ImageWrapper>
        </Wrapper>
      )}

      {curMedia === 'desktop' && (
        <Wrapper
          initial="initial"
          whileInView="active"
          variants={containerVariants(0.3)}
          viewport={{ once: true, amount: 0.3 }}
        >
          <BenefitTypoWrapper>
            <Benefit variants={onlyOpacity(0.3)}>BENEFIT 3.</Benefit>

            <BenefitTitle
              variants={opacityAppearBottom(8, 0.3)}
            >{`선박탄소 절감을 통한\nESG 가치 창출`}</BenefitTitle>

            <BenefitDescription variants={opacityAppearBottom(8, 0.3)}>
              PANKI를 활용한 효율적인 도장작업을 통해, 도장작업에서 발생되는
              전기 및 가스사용을 줄이고 조선소 도장 공정 탄소 저감과 생산공정
              탄소 저감에 동참합니다.
            </BenefitDescription>

            <BenefitWrapper variants={opacityAppearBottom(8, 0.3, 1.5)}>
              <Icon icon="CO2Cloud" />
              <TypoWrapper>
                {`IMO 선박탄소배출 \`30년 40% 절감 목표 설정\n정부 2050 탄소중립 정책 동참 선언`}
              </TypoWrapper>
            </BenefitWrapper>
          </BenefitTypoWrapper>

          <ImageWrapper variants={onlyOpacity(0.5)}>
            <StaticImage
              src={`${ESG_SRC}`}
              alt="Esg_image"
              style={{ borderRadius: '12px' }}
            />
          </ImageWrapper>
        </Wrapper>
      )}
    </Container>
  );
};

const ImageWrapper = styled(motion.div, {});

const Wrapper = styled(motion.div, {
  '@tabletLg': {
    display: 'flex',
    gap: '50px',
  },
});

const TypoWrapper = styled('p', {
  color: '$textPrimary',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    footerMobile: true,
  },
  '@tabletSm': {
    footer: true,
  },
  '@desktop': {
    subtitle1: true,
  },
});

const Container = styled('div', {
  '@mobile': {
    padding: '80px 16px 160px 16px',
  },
  '@tabletSm': {
    padding: '120px 32px',
  },
  '@tabletLg': {
    padding: '246px 60px 223px 60px',
  },
  '@desktop': {
    padding: '0 80px 225px 80px',
  },
});

const BenefitTypoWrapper = styled(motion.div, {
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
    width: '80%',
    marginBottom: 0,
  },
  '@desktop': {
    width: '50%',
    padding: '29px 0',
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
  '@tabletLg': {
    marginBottom: '20px',
  },
  '@desktop': {
    marginBottom: '40px',
  },
});

const BenefitWrapper = styled(motion.div, {
  display: 'flex',

  '@mobile': {
    gap: '12px',
    flexDirection: 'row',
  },
  '@tabletSm': {
    body1: true,
    gap: '24px',
    marginTop: '20px',
  },
  '@tabletLg': {
    marginTop: 0,
    flexDirection: 'row',
    position: 'relative',
    gap: '18px',
    alignItems: 'center',
  },
  '@desktop': {},
});

export default PankiBenefitThrid;
