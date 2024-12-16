import React from 'react';
import { styled } from '@client/src/styles/stitches.config';
import useMediaSvgSize from '@client/src/hooks/common/useMediaSvgSize';
import Icon from '../../common/Icon';

const IconSize = {
  mobile: { width: '80px', height: '0' },
  tabletSm: { width: '120px', height: '0' },
  tabletLg: { width: '143px', height: '0' },
  desktop: { width: '143px', height: '0' },
};

const Footer = () => {
  const { width: iconWidth } = useMediaSvgSize(IconSize);

  return (
    <StyledFooter>
      <FooterContainer>
        <p>COMPANY INFO</p>
        <div>
          <p>Company : SSVT I Company Registration No : 074-02-01185</p>
          <p>Address : 울산광역시 남구 테크노산업로55번길 16, 6층 602호</p>
          <p>Tel : 070-7779-0736</p>
        </div>
        <p>SSVT © 2022. korea</p>
      </FooterContainer>

      <Logo width={iconWidth} icon="Logo" />
    </StyledFooter>
  );
};

const StyledFooter = styled('footer', {
  width: '100%',
  padding: '88px 160px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid $divider',
  color: '$textSecondary',

  '@mobile': {
    padding: '60px 20px 40px 20px',
    flexDirection: 'column',
    gap: '48px',
    footerMobile: true,
  },

  '@tabletSm': {
    padding: '80px 66.67px',
    flexDirection: 'row',
    gap: '60px',
  },

  '@tabletLg': {
    padding: '88px 106.67px 108px 106.67px',
  },

  '@desktop': {
    padding: '88px 213.33px 88px 213.33px',
    footer: true,
  },
});

const Logo = styled(Icon, {
  '@mobile': {
    width: '80px',
    height: '37.48px',
  },
  '@tabletSm': {
    width: '120px',
    height: '56.22px',
  },
  '@tableLg': {
    width: '143px',
    height: '67px',
  },
  '@desktop': {
    width: '143px',
    height: '67px',
  },
});

const FooterContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
});

export default Footer;
