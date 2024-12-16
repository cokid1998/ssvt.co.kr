import React, { useState } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { Link } from 'gatsby';
import { NavLinkItem } from '@client/src/types/common.types';
import { motion, AnimatePresence } from 'framer-motion';
import useDrawer from '@client/src/hooks/common/useDrawer';
import MenuItem from '../../common/MenuItem';
import NavLink from '../../common/NavLink';
import Icon from '../../common/Icon';

interface DrawerMenuProps {
  menuItem: NavLinkItem;
}

const iconTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease: 'easeInOut', duration: 0.1 },
};

const DrawerMenu = ({ menuItem }: DrawerMenuProps) => {
  const { label, children, to } = menuItem;
  const { isDrawerOpen, toggleDrawer } = useDrawer();

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
    toggleDrawer();
  };

  return (
    <>
      {children ? (
        <MenuContainer onClick={handleOpen}>
          <AccordionButton>
            {label}
            <AnimatePresence mode="wait">
              {isOpen ? (
                <IconContainer key="open" {...iconTransition}>
                  <Icon icon="MinusIcon" />
                </IconContainer>
              ) : (
                <IconContainer key="close" {...iconTransition}>
                  <Icon icon="PlusIcon" />
                </IconContainer>
              )}
            </AnimatePresence>
          </AccordionButton>
        </MenuContainer>
      ) : (
        <StyledNavLink to={to} onClick={handleClose}>
          {({ isCurrent }) => (
            <MenuContainer>
              <MenuItem active={isCurrent}>{label}</MenuItem>
            </MenuContainer>
          )}
        </StyledNavLink>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 'auto' }}
            transition={{ ease: 'easeInOut', duration: 0.25 }}
          >
            {children?.map((child) => (
              <ChildLink key={child.label} to={child.to} onClick={handleClose}>
                {child.label}
              </ChildLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuContainer = styled('div', {
  width: '100%',
  height: '64px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'none',
  menu: true,
  color: '$textPrimary',
  padding: '18px 16px',
  cursor: 'pointer',

  '*': {
    cursor: 'pointer',
  },

  '&:active': {
    color: '$textPrimary2',
  },

  '&:hover': {
    background: '$actionHover',
  },
});

const AccordionButton = styled('button', {
  width: '100%',
  height: '100%',
  background: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const IconContainer = styled(motion.div, {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
});

const StyledNavLink = styled(NavLink, {
  width: '100%',
});

const MenuLink = styled(Link, {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  menu: true,
  color: '$textPrimary',
  cursor: 'pointer',
});

const ChildLink = styled(MenuLink, {
  body1: true,
  padding: '16px',
  color: '$textSecondary',

  '&:active': {
    color: '$textPrimary2',
  },

  '&:hover': {
    background: '#e3e3e3',
  },
});

export default DrawerMenu;
