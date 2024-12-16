import React, { useState, useEffect, useRef, PropsWithChildren } from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMedia from '@client/src/hooks/common/useMedia';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import { motion } from 'framer-motion';
import Icon from '../../common/Icon';
import { IconType } from '../../common/Icon/Icon';

interface HistoryContentWrapperProps {
  icon: IconType;
}

const IconSize = {
  mobile: { width: '32px', height: '32px' },
  tabletSm: { width: '54px', height: '54px' },
  tabletLg: { width: '54px', height: '54px' },
  desktop: { width: '54px', height: '54px' },
};

const HistoryContentWrapper = ({
  icon,
  children,
}: HistoryContentWrapperProps & PropsWithChildren) => {
  const [height, setHeight] = useState('');
  const contentWrapper = useRef<HTMLDivElement>(null);
  const curMedia = useMedia();
  const { width: iconWidth, height: iconHeight } = useMediaSvgSize(IconSize);

  useEffect(() => {
    if (contentWrapper && contentWrapper.current) {
      setHeight(`${String(contentWrapper.current.children[0].clientHeight)}px`);
    }
  }, [curMedia]);

  return (
    <StyledHistoryContentWrapper>
      <IconWrapper css={{ $$height: `${height}` }}>
        <Icon width={`${iconWidth}`} height={`${iconHeight}`} icon={icon} />
        {icon !== 'Element' && <Line css={{ $$height: `${height}` }} />}
        {curMedia === 'desktop' && <div ref={contentWrapper}>{children}</div>}
        {curMedia === 'tabletLg' && <div ref={contentWrapper}>{children}</div>}
      </IconWrapper>

      {curMedia === 'mobile' && <div ref={contentWrapper}>{children}</div>}
      {curMedia === 'tabletSm' && <div ref={contentWrapper}>{children}</div>}
    </StyledHistoryContentWrapper>
  );
};

const StyledHistoryContentWrapper = styled(motion.div, {
  width: '100%',

  '@mobile': {
    position: 'relative',
    display: 'flex',
  },
  '@tabletLg': {
    justifyContent: 'center',
  },
});

const IconWrapper = styled(motion.div, {
  height: '$$height',
  '@mobile': {
    position: 'relative',
    marginRight: '12px',
  },
  '@tabletSm': {
    marginRight: '32px',
  },
  '@tabletLg': {
    marginRight: 0,
  },
});

const Line = styled(motion.div, {
  height: '$$height',

  '@mobile': {
    borderLeft: '1px solid $divider',
    position: 'absolute',
    left: '50%',
  },
});

export default HistoryContentWrapper;
