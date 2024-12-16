import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import Icon from '@client/src/components/common/Icon';
import IconButton from '@client/src/components/common/IconButton';
import useDrawer from '@client/src/hooks/common/useDrawer';
import { Link } from 'gatsby';

const MobileHeader = () => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  return (
    <Container open={isDrawerOpen}>
      <Link to="/">
        <Logo icon="Logo" />
      </Link>
      <IconButton
        icon={isDrawerOpen ? 'CloseIcon' : 'MenuIcon'}
        onClick={toggleDrawer}
      />
    </Container>
  );
};

const Container = styled('div', {
  height: '$mobileHeaderHeight',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid black',

  '@mobile': {
    padding: '20px 20px',
    display: 'flex',
  },

  '@tabletSm': {
    padding: '14.5px 20px 14.5px 32px',
  },

  '@tabletLg': {
    padding: '14.5px 20px 14.5px 32px',
  },

  '@desktop': {
    display: 'none',
  },

  variants: {
    open: {
      true: {
        borderBottom: '1px solid $divider',
      },
      false: {
        borderBottom: 'none',
      },
    },
  },
});

const Logo = styled(Icon, {
  width: '60px',
  height: '20.57px',
});

export default MobileHeader;
