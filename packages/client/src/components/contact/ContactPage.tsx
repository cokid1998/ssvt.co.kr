import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import {
  containerVariants,
  onlyOpacity,
} from '../common/transitions/transitions';

const CONTACTBANNERSRC = '../../assets/images/contact/contact_banner.png';

const Contact = () => (
  <Container
    initial="initial"
    whileInView="active"
    variants={containerVariants(0.3)}
  >
    <ImageWrapper variants={onlyOpacity(0.3)}>
      <StaticImage src={`${CONTACTBANNERSRC}`} alt="" layout="fullWidth" />
    </ImageWrapper>

    <TypoWrapper variants={onlyOpacity(0.3)}>
      <ContentWrapper>
        <Title>MAIN OFFICE</Title>
        <Description>
          울산광역시 남구 테크노산업로 55번길 16 조선해양하이테크타운 6층 602호
        </Description>
      </ContentWrapper>

      <ContentWrapper>
        <Title>RESEARCH LAB</Title>
        <Description>
          부산광역시 해운대구 센텀중앙로 60퍼스트인센텀 201호
        </Description>
      </ContentWrapper>

      <ContentWrapper>
        <Title>CONTACT</Title>
        <Description>{`Tel   070 - 7779 - 0736\nMail   contact@ssvt.co.kr`}</Description>
      </ContentWrapper>
    </TypoWrapper>
  </Container>
);

const Container = styled(motion.section, {
  '@mobile': {
    paddingTop: 'calc($mobileHeaderHeight + 28px)',
    paddingBottom: '75px',
  },
  '@tabletSm': {
    paddingTop: 'calc($mobileHeaderHeight + 58px)',
    paddingBottom: '80px',
  },
  '@tabletLg': {
    paddingTop: 'calc($mobileHeaderHeight + 120px)',
    paddingBottom: '160px',
  },
  '@desktop': {
    padding: 'calc($mobileHeaderHeight + 104px) 0 137px 0',
    gap: '63px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1400px',
    margin: '0 auto',
  },
});

const ImageWrapper = styled(motion.div, {
  '@mobile': {
    padding: '0 38px',
    marginBottom: '48px',
  },

  '@tabletSm': {
    padding: 0,
    maxWidth: '550px',
    margin: '0 auto 32px',
  },

  '@tabletLg': {
    padding: 0,
    maxWidth: '600px',
    margin: '0 auto 65px',
  },

  '@desktop': {
    width: '50%',
    padding: 0,
    margin: 0,
    paddingLeft: '90px',
  },
});

const TypoWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',

  '@mobile': {
    padding: '0 16px',
    gap: '32px',
  },
  '@tabletSm': {
    padding: '25px 50px 0',
  },
  '@tabletLg': {
    padding: '0 80px',
  },
  '@desktop': {
    padding: 0,
    paddingRight: '90px',
  },
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const Title = styled('h1', {
  color: '$textPrimary',

  '@mobile': {
    subtitle2: true,
  },
  '@tabletSm': {
    heading5: true,
  },
  '@tabletLg': {
    heading4: true,
  },
});

const Description = styled('p', {
  color: '$textSecondary',
  whiteSpace: 'pre-wrap',

  '@mobile': {
    footer: true,
  },
  '@tabletSm': {
    body1: true,
  },
  '@tabletLg': {
    subtitle1: true,
  },
});

export default Contact;
