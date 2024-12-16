import * as React from 'react';
import { Link, HeadFC } from 'gatsby';
import SEO from '../components/common/SEO';

const NotFoundPage = () => (
  <main>
    <h1>유효하지 않은 경로입니다.</h1>
    <p>
      <Link to="/">돌아가기</Link>.
    </p>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <SEO title="Not Found" />;
