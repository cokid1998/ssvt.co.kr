import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { styled } from '@client/src/styles/stitches.config';
import MainLayout from '@client/src/components/base/MainLayout';
import CompanyBannerSection from '@client/src/components/company/CompanyBannerSection';
import ThirdSection from '@client/src/components/company/ThirdSection';
import SecondSection from '@client/src/components/company/SecondSection';
import FourthSection from '@client/src/components/company/FourthSection';
import ServiceLogoBar from '@client/src/components/company/ServiceLogoBar';
import SEO from '@client/src/components/common/SEO';

const CompanyPage = () => (
  <MainLayout>
    <CompanyBannerSection />
    <ServiceLogoBar />
    <MaxWidth>
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </MaxWidth>
  </MainLayout>
);

const MaxWidth = styled('div', {
  margin: '0 auto',

  '@mobile': {
    maxWidth: '500px',
  },
  '@tabletSm': {
    maxWidth: '800px',
  },
  '@tabletLg': {
    maxWidth: 'none',
  },
  '@desktop': {
    maxWidth: '1400px',
  },
});

export default CompanyPage;

export const Head: HeadFC = () => <SEO title="SSVT | COMPANY" />;
