import React, { PropsWithChildren } from 'react';
import { styled } from '@client/src/styles/stitches.config';

interface HistoryTypoWrpperProps {
  marginBottom?: string;
}

const HistoryTypoWrapper = ({
  marginBottom,
  children,
}: HistoryTypoWrpperProps & PropsWithChildren) => (
  <StyledHistoryTypoWrapper css={{ $$marginBottom: `${marginBottom}` }}>
    {children}
  </StyledHistoryTypoWrapper>
);
const StyledHistoryTypoWrapper = styled('div', {
  marginBottom: '$$marginBottom',
  '@tabletLg': {
    width: '322px',
  },
  '@desktop': {
    width: '430px',
  },
});

export default HistoryTypoWrapper;
