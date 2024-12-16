import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import Stitches from '@stitches/react';
import Icon, { IconType } from '../Icon/Icon';

type IconButtonProps = Stitches.ComponentProps<typeof StyledButton> & {
  icon: IconType;
  width?: string;
  height?: string;
};

const IconButton = ({ icon, ...props }: IconButtonProps) => (
  <StyledButton>
    <Icon {...props} icon={icon} />
  </StyledButton>
);

const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'none',
  cursor: 'pointer',
});

export default IconButton;
