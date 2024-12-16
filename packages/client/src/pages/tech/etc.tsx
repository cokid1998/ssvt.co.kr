import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { styled } from '@client/src/styles/stitches.config';
import MainLayout from '@client/src/components/base/MainLayout';
import OceanViewSection from '@client/src/components/tech/etc/OceanViewSection';
import PassThruSection from '@client/src/components/tech/etc/PassThruSection';
import EcoStampSection from '@client/src/components/tech/etc/EcoStampSection';
import SEO from '@client/src/components/common/SEO';

const TechPage = () => (
  <MainLayout>
    <MaxWidth>
      <OceanViewSection />
      <PassThruSection />
      <EcoStampSection />
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

export const Head: HeadFC = () => <SEO title="SSVT | Etc Service" />;
