import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import { Link } from 'gatsby';
import { ChildrenType } from '@client/src/types/common.types';
import { motion } from 'framer-motion';

const ChildItem = ({ child }: { child: ChildrenType[] }) => (
  <Container
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: 0.3 }}
  >
    {child.map((item) => (
      <ChildLink key={item.label} to={item.to}>
        {item.label}
      </ChildLink>
    ))}
  </Container>
);

const ChildLink = styled(Link, {
  color: '$textSecondary',
  textDecoration: 'none',
  marginBottom: '20px',

  '&:hover': {
    color: '$textHover',
  },
});

const Container = styled(motion.div, {
  paddingLeft: '60px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
});

export default ChildItem;
