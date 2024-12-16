import React from 'react';

import OGImage from '../../../assets/images/OG/OGImage.png';

type SEOProps = {
  title: string;
};

const SEO = ({ title }: SEOProps) => (
  <>
    <title>{title}</title>
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SSVT" />
    <meta property="og:locale" content="ko_KR" />
    <meta property="og:locale:alternate" content="es_US" />
    <meta property="og:image" content={OGImage} />
    <meta property="og:title" content="에스에스브이티 홈페이지" />
    <meta
      property="og:description"
      content="안녕하세요, 스마트 해양을 이끌어 갈 에스에스브이티입니다."
    />
    <meta
      property="og:url"
      content="https://develop.d5jamrwz2x9u6.amplifyapp.com/"
    />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="400" />
  </>
);
export default SEO;
