import { styled } from '@client/src/styles/stitches.config';
import React from 'react';
import { NavLinkItem } from '@client/src/types/common.types';
import DesktopHeader from '../DesktopHeader';
import MobileHeader from '../MobileHeader';

interface HeaderProps {
  menuItems: NavLinkItem[];
}

const Header = ({ menuItems }: HeaderProps) => (
  <Container>
    <DesktopHeader menuItems={menuItems} />
    <MobileHeader />
  </Container>
);

const Container = styled('header', {
  width: '100%',

  position: 'fixed',
  zIndex: '$header',
  background: '$white',

  '@tabletSm': {
    height: '64px',
  },

  '@desktop': {
    height: '98px',
  },
});

export default Header;
