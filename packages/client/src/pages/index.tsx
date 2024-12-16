import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { styled } from '@client/src/styles/stitches.config';
import MainLayout from '../components/base/MainLayout';
import IndexBannerSection from '../components/index/IndexBannerSection';
import CompanyTechSummarySection from '../components/index/CompanyTechSummarySection';
import TechDescSection from '../components/index/TechDescSection';
import PankiDescBox from '../components/index/PankiDescBox';
import ContactBox from '../components/index/ContactBox';
import TabletLgTechDescSection from '../components/index/TechDescSection/TabletLgTechDescSection';
import DesktopTechDescSection from '../components/index/TechDescSection/DesktopTechDescSection';
import useMedia from '../hooks/common/useMedia';
import SEO from '../components/common/SEO';

const IndexPage = () => {
  const curMedia = useMedia();
  return (
    <MainLayout>
      <IndexBannerSection />
      <MaxWidth>
        <CompanyTechSummarySection />
        {(curMedia === 'mobile' || curMedia === 'tabletSm') && (
          <TechDescSection />
        )}
        {curMedia === 'tabletLg' && <TabletLgTechDescSection />}
        {curMedia === 'desktop' && <DesktopTechDescSection />}
      </MaxWidth>
      <PankiDescBox />
      <ContactBox />
    </MainLayout>
  );
};

const MaxWidth = styled('div', {
  margin: '0 auto',

  '@mobile': {
    maxWidth: '460px',
  },
  '@tabletSm': {
    maxWidth: 'none',
  },
  '@tabletLg': {
    maxWidth: 'none',
  },
  '@desktop': {
    maxWidth: '1600px',
  },
});

export default IndexPage;

export const Head: HeadFC = () => <SEO title="SSVT" />;
