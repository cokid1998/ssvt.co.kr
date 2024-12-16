import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import Stitches from '@stitches/react';

type MenuItemProps = Stitches.ComponentProps<typeof Container>;

const MenuItem = ({ children, active }: MenuItemProps) => (
  <Container active={active}>{children}</Container>
);

const Container = styled('div', {
  cursor: 'pointer',
  menu: true,

  '&:hover': {
    color: '$textPrimary2',
  },

  variants: {
    active: {
      true: { color: '$textPrimary2' },
      false: { color: '$textPrimary' },
    },
  },
});

export default MenuItem;
