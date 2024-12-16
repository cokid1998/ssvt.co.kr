import * as React from 'react';
import type { HeadFC } from 'gatsby';
import MainLayout from '@client/src/components/base/MainLayout';
import Contact from '@client/src/components/contact/ContactPage';
import SEO from '@client/src/components/common/SEO';

const ContactPage = () => (
  <MainLayout>
    <Contact />
  </MainLayout>
);

export default ContactPage;

export const Head: HeadFC = () => <SEO title="SSVT | CONTACT" />;
