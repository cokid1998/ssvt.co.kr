import React, { PropsWithChildren } from 'react';
import DrawerProvider from '@client/src/contexts/DrawerContext';
import { NavLinkItem } from '@client/src/types/common.types';
import { styled } from '@client/src/styles/stitches.config';
import Footer from '../Footer';
import Header from '../Header';
import Drawer from '../Drawer';
import TopButton from '../../common/TopButton';

const MENU_ITEMS: NavLinkItem[] = [
  { label: 'HOME', to: '/' },
  {
    label: 'COMPANY',
    to: '/company',
    children: [
      { label: '기업소개', to: '/company' },
      { label: '보도자료', to: '/media' },
    ],
  },
  {
    label: 'TECH',
    to: '/tech',
    children: [
      { label: 'PANKI', to: '/tech' },
      { label: 'OILPASS', to: '/tech/oilpass' },
      { label: '기타 서비스', to: '/tech/etc' },
    ],
  },
  {
    label: 'CAREER',
    to: 'https://about-ssvt.notion.site/SSVT-bb547b20cc93452ca6b53e1d66de3e74',
  },
  { label: 'CONTACT', to: '/contact' },
];

const MainLayout = ({ children }: PropsWithChildren) => (
  <>
    <DrawerProvider>
      <Header menuItems={MENU_ITEMS} />
      <Drawer menuItems={MENU_ITEMS} />
    </DrawerProvider>
    <Container>{children}</Container>
    <TopButton />
    <Footer />
  </>
);

const Container = styled('main', {});

export default MainLayout;
