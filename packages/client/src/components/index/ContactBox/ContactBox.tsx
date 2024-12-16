import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { motion } from 'framer-motion';
import useMedia from '@client/src/hooks/common/useMedia';
import { Link } from 'gatsby';
import Button from '../../common/Button';
import IconButton from '../../common/IconButton';
import backgroundLarge from '../../../assets/images/index/landing_background_large.png';
import backgroundSmall from '../../../assets/images/index/landing_background_small.png';
import laptopPeople from '../../../assets/images/index/landing_laptop_people.jpg';

const ContactBox = () => {
  const curMedia = useMedia();
  return (
    <Container>
      <ImageWrapper>
        <TypoWrapper
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        >
          <Title>CONTACT US</Title>
          <Description>We build great business</Description>
        </TypoWrapper>

        <Image
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
          }}
        />

        <Link to="/contact">
          <Button
            size={curMedia === 'mobile' ? 'medium' : 'large'}
            color="contrast"
            style={{ zIndex: 3 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.5,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            More About
            <IconButton icon="ArrowRightward" />
          </Button>
        </Link>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled('section', {
  '@mobile': {
    padding: '0 16px 80px 16px ',
  },

  '@tabletSm': {
    padding: '0 24px 100px 24px',
  },

  '@desktop': {
    padding: '51px 60px 118px 60px',
  },
});

const ImageWrapper = styled('div', {
  borderRadius: '$component',

  '@mobile': {
    width: '100%',
    height: '177px',
    background: `url(${backgroundSmall})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '28px 0',
  },
  '@tabletSm': {
    width: '100%',
    height: '153px',

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '44px',
  },
  '@tabletLg': {
    position: 'relative',
    padding: '41px 89px 40px 103px',
  },
  '@desktop': {
    height: '153px',
    background: `url(${backgroundLarge})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '100',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '35px 108px 35px 131px',
    position: 'relative',
    zIndex: '1',
  },
});

const Image = styled(motion.div, {
  '@mobile': {
    display: 'none',
  },
  '@tabletSm': {
    display: 'none',
  },

  '@tabletLg': {
    width: '279px',
    height: '292px',
    background: `url(${laptopPeople})`,
    backgroundRepeat: 'no-repeat',
    position: 'absolute',
    right: 235,
    bottom: -90,
    zIndex: 3,
    display: 'block',
  },
});

const TypoWrapper = styled(motion.div, {
  '@mobile': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '24px',
  },
  '@tabletSm': {
    alignItems: 'start',
    marginBottom: 0,
  },

  '@desktop': {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Title = styled('h1', {
  color: '$primaryContrast',

  '@mobile': {
    heading4: true,
    marginBottom: '6px',
  },

  '@desktop': {
    heading3: true,
  },
});

const Description = styled('p', {
  color: '$primaryContrast',

  '@mobile': {
    body1: true,
  },

  '@desktop': {
    body2: true,
  },
});

export default ContactBox;
