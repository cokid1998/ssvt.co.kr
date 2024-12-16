import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { styled } from '@client/src/styles/stitches.config';
import OilPassBannerSection from '@client/src/components/tech/oilpass/OilPassBannerSection';
import OilPassSummary from '@client/src/components/tech/oilpass/OilPassSummary';
import MainLayout from '@client/src/components/base/MainLayout';
import OilPassBenefitFirst from '@client/src/components/tech/oilpass/OilPassBenefitFirst';
import OilPassBenefitSecond from '@client/src/components/tech/oilpass/OilPassBenefitSecond';
import OilPassBenefitThird from '@client/src/components/tech/oilpass/OilPassBenefitThird';
import SEO from '@client/src/components/common/SEO';

const oilpass = () => (
  <MainLayout>
    <OilPassBannerSection />
    <MaxWidth>
      <OilPassSummary />
      <OilPassBenefitFirst />
      <OilPassBenefitSecond />
      <OilPassBenefitThird />
    </MaxWidth>
  </MainLayout>
);

const MaxWidth = styled('div', {
  margin: '0 auto',

  '@mobile': {
    maxWidth: '460px',
  },
  '@tabletSm': {
    maxWidth: '800px',
  },
  '@tabletLg': {
    maxWidth: 'none',
  },
  '@desktop': {
    maxWidth: '1440px',
  },
});

export default oilpass;

export const Head: HeadFC = () => <SEO title="SSVT | OILLPASS" />;
