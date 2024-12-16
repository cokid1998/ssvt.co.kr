import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { styled } from '@client/src/styles/stitches.config';
import MainLayout from '@client/src/components/base/MainLayout';
import PankiBannerSection from '@client/src/components/tech/panki/PankiBannerSection';
import PankiSummary from '@client/src/components/tech/panki/PankiSummary';
import BenefitFirst from '@client/src/components/tech/panki/PankiBenefitFirst';
import BenefitSecond from '@client/src/components/tech/panki/PankiBenefitSecond';
import BenefitThrid from '@client/src/components/tech/panki/PankiBenefitThrid';
import SEO from '@client/src/components/common/SEO';

const TechPage = () => (
  <MainLayout>
    <PankiBannerSection />
    <MaxWidth>
      <PankiSummary />
      <BenefitFirst />
      <BenefitSecond />
      <BenefitThrid />
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

export default TechPage;

export const Head: HeadFC = () => <SEO title="SSVT | PANKI" />;
