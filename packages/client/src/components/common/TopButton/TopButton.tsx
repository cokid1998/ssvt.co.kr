import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import Stitches from '@stitches/react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../Icon';

export type TopButtonProps = Stitches.ComponentProps<typeof StyledButton>;

const TopButton = ({ size = 'medium', ...props }: TopButtonProps) => {
  const [showButton, setShowButton] = useState(false);

  const buttonRef = useRef(null);

  useEffect(() => {
    const height = window.innerHeight;
    const button = buttonRef.current;

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    if (button) {
      button.addEventListener('click', scrollToTop);
    }

    const handleShowButton = () => {
      if (window.scrollY > height) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);
    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, [showButton]);

  return (
    <>
      <AnimatePresence>
        {showButton && (
          <StyledButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={buttonRef}
            size={size}
            {...props}
          >
            <Icon icon="ArrowUpward" />
          </StyledButton>
        )}
      </AnimatePresence>
    </>
  );
};

const StyledButton = styled(motion.button, {
  borderRadius: '$rounded',
  cursor: 'pointer',
  border: '1px solid $textSecondary',
  background: '$white',
  color: '$textSecondary',
  position: 'fixed',
  right: 0,
  bottom: 0,
  zIndex: '9',
  svg: {
    fill: 'CurrentColor',
  },

  '@mobile': {
    margin: '16px',
  },
  '@tabletSm': {
    margin: '24px',
  },
  '@desktop': {
    margin: '50px',
  },

  variants: {
    size: {
      medium: {
        width: '48px',
        height: '48px',
      },
      large: {
        width: '56px',
        height: '56px',
      },
    },
  },
});

export default TopButton;
