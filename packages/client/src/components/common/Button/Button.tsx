import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import Stitches from '@stitches/react';
import { motion } from 'framer-motion';

export type ButtonProps = Stitches.ComponentProps<typeof StyledButton> & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

const Button = ({
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) => (
  <StyledButton color={color} size={size} {...props}>
    {startIcon}
    {children}
    {endIcon}
  </StyledButton>
);

const StyledButton = styled(motion.button, {
  borderRadius: '$rounded',
  cursor: 'pointer',
  border: 'none',
  rowCentered: true,
  gap: '8px',
  fontFamily: '$Roboto',

  svg: {
    fill: 'currentColor',
  },

  variants: {
    size: {
      medium: {
        buttonMedium: true,
        padding: '6px 14px',
      },
      large: {
        buttonLarge: true,
        padding: '10px 24px',
      },
    },
    color: {
      primary: {
        color: '$primaryContrast',
        background: '$primaryMain',
        '&:hover': {},
      },
      secondary: {
        color: '$secondaryMain',
        background: 'none',
        '&:hover': {},
      },
      contrast: {
        color: '$primaryContrast',
        background: '$primaryOutlinedHoverBackground',
        border: '1px solid $primaryContrast',
        '&:hover': {},
      },
    },
  },
});

export default Button;
