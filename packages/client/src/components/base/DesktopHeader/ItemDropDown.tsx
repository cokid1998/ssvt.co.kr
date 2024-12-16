import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { NavLinkItem } from '@client/src/types/common.types';
import { motion } from 'framer-motion';
import ChildrenItem from './ChildrenItem';

interface ItemDropDownProps {
  menuItems: NavLinkItem[];
  handleHover: () => void;
}

const ItemDropDown = ({ menuItems, handleHover }: ItemDropDownProps) => (
  <Container
    initial={{ y: -150 }}
    animate={{ y: 0 }}
    exit={{ opacity: 0, y: -150 }}
    transition={{ bounce: 'noBounce' }}
    onMouseOver={handleHover}
    onMouseOut={handleHover}
  >
    <MenuContainer>
      {menuItems.map(
        (item) => item.children && <ChildrenItem child={item.children} />,
      )}
    </MenuContainer>
  </Container>
);

const Container = styled(motion.div, {
  padding: '41px 330px 48px',
  background: '$white',
  height: '170px',
  display: 'flex',
  justifyContent: 'right',
  boxShadow: '$desktopHeader',
  position: 'relative',
  zIndex: -1,
});

const MenuContainer = styled(motion.div, {
  display: 'flex',
});

export default ItemDropDown;
