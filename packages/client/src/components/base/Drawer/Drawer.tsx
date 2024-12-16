import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useDrawer from '@client/src/hooks/common/useDrawer';
import useMedia from '@client/src/hooks/common/useMedia';
import { NavLinkItem } from '@client/src/types/common.types';
import IconButton from '@client/src/components/common/IconButton';
import { motion, Variants } from 'framer-motion';
import DrawerMenu from './DrawerMenuItem';

interface DrawerProps {
  menuItems: NavLinkItem[];
}

const backdropVariants: Variants = {
  open: {
    display: 'block',
    opacity: 1,
  },
  close: {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  },
};

const Drawer = ({ menuItems }: DrawerProps) => {
  const { isDrawerOpen, toggleDrawer } = useDrawer();
  const curMedia = useMedia();

  const tabSideMenuVariants: Variants =
    curMedia === 'mobile'
      ? {
          open: {
            display: 'block',
            opacity: 1,
            right: 0,
          },
          close: {
            opacity: 0,
            transitionEnd: {
              right: 0,
              display: 'none',
            },
          },
        }
      : {
          open: {
            display: 'block',
            right: 0,
            opacity: 1,
          },
          close: {
            right: -440,
            transitionEnd: {
              opacity: 0,
              display: 'none',
            },
          },
        };

  return (
    <>
      <Backdrop
        initial={{ display: 'none' }}
        animate={isDrawerOpen ? 'open' : 'close'}
        variants={backdropVariants}
        transition={{ ease: 'easeInOut', duration: 0.28 }}
        onClick={toggleDrawer}
      />
      <SideMenuContainer
        initial={{ display: 'none' }}
        animate={isDrawerOpen ? 'open' : 'close'}
        variants={tabSideMenuVariants}
        transition={{ ease: 'easeInOut', duration: 0.28 }}
      >
        <Header>
          <IconButton
            icon={isDrawerOpen ? 'CloseIcon' : 'MenuIcon'}
            onClick={toggleDrawer}
          />
        </Header>
        <MenuContainer>
          {menuItems.map((menuItem) => (
            <DrawerMenu key={menuItem.label} menuItem={menuItem} />
          ))}
        </MenuContainer>
      </SideMenuContainer>
    </>
  );
};

const SideMenuContainer = styled(motion.aside, {
  height: '100%',
  background: 'white',
  zIndex: '$drawer',
  position: 'fixed',

  '@mobile': {
    width: '100%',
  },

  '@tabletSm': {
    width: '440px',
    top: '$mobileHeaderHeight',
  },

  '@desktop': {
    display: 'none !important',
  },
});

const Header = styled('div', {
  width: '100%',
  height: '$mobileHeaderHeight',
  display: 'flex',
  flexDirection: 'row-reverse',
  alignItems: 'center',
  padding: '20px',

  '@tabletSm': {
    display: 'none',
  },
});

const MenuContainer = styled('div', {
  padding: '8px 16px',
});

const Backdrop = styled(motion.div, {
  '@tabletSm': {
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: '$backdropOverlay46',
    zIndex: '$backdrop',
    position: 'fixed',
  },

  '@desktop': {
    display: 'none !important',
  },
});

export default Drawer;
