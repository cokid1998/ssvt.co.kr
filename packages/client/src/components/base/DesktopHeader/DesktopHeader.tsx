import React, { useEffect, useState } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { Link } from 'gatsby';
import { NavLinkItem } from '@client/src/types/common.types';
import { AnimatePresence } from 'framer-motion';
import Icon from '../../common/Icon';
import MenuItem from '../../common/MenuItem';
import NavLink from '../../common/NavLink';
import ItemDropDown from './ItemDropDown';

interface DesktopHeaderProps {
  menuItems: NavLinkItem[];
}

const DesktopHeader = ({ menuItems }: DesktopHeaderProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isScroll, isSetScroll] = useState(false);

  const handleHover = () => {
    setIsHover((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY !== 0) {
      isSetScroll(true);
    } else isSetScroll(false);
  };

  return (
    <Container>
      <Wrapper
        borderBottom={isScroll || isHover}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
      >
        <Link to="/">
          <Logo icon="Logo" />
        </Link>

        <MenuContainer>
          {menuItems.map((item) => (
            <NavLink key={item.label} to={item.to}>
              {({ isCurrent }) => (
                <MenuItem active={isCurrent}>{item.label}</MenuItem>
              )}
            </NavLink>
          ))}
        </MenuContainer>
      </Wrapper>

      <AnimatePresence>
        {isHover && (
          <ItemDropDown handleHover={handleHover} menuItems={menuItems} />
        )}
      </AnimatePresence>
    </Container>
  );
};

const Container = styled('div', {
  position: 'relative',
  zIndex: -2,
});

const Wrapper = styled('div', {
  height: 'calc($desktopHeaderHeight + 1)',
  justifyContent: 'space-between',
  padding: '35px 75px',
  background: '$white',

  '@mobile': {
    display: 'none',
  },
  '@desktop': {
    display: 'flex',
  },

  variants: {
    borderBottom: {
      true: {
        borderBottom: '1px solid $divider',
      },
    },
  },
});

const Logo = styled(Icon, {
  width: '80px',
  height: '27.43px',
});

const MenuContainer = styled('div', {
  display: 'flex',
  gap: '62px',
});

export default DesktopHeader;
