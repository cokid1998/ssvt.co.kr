import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMedia from '@client/src/hooks/common/useMedia';
import { motion, Variants } from 'framer-motion';
import Icon from '../common/Icon';
import image from '../../assets/images/company/company_tech.jpg';

const opacityAppearBottom: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const ServiceLogoBar = () => {
  const curMedia = useMedia();
  return (
    <StyledServiceLogoBar>
      <MaxWidth
        initial="initial"
        whileInView="active"
        variants={opacityAppearBottom}
        viewport={{ once: true }}
      >
        {curMedia === 'mobile' && <Icon icon="MobileServiceLogo" />}
        {curMedia === 'tabletSm' && <Icon icon="TabletSmServiceLogo" />}
        {curMedia === 'tabletLg' && <Icon icon="TabletLgServiceLogo" />}
        {curMedia === 'desktop' && <Icon icon="DesktopServiceLogo" />}
      </MaxWidth>
    </StyledServiceLogoBar>
  );
};

const StyledServiceLogoBar = styled(motion.div, {
  background: `url(${image})`,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',

  '@mobile': {
    marginTop: '70px',
    height: '60px',
  },
  '@tabletSm': {
    marginTop: '130px',
    height: '80px',
  },
  '@tabletLg': {
    marginTop: '130px',
    height: '100px',
  },
  '@desktop': {},
});

const MaxWidth = styled(motion.div, {
  '@mobile': {
    maxWidth: '460px',
  },
  '@tabletSm': {
    maxWidth: '720px',
  },
  '@tabletLg': {
    maxWidth: '900px',
  },
  '@desktop': {
    maxWidth: '1200px',
  },
});

export default ServiceLogoBar;
