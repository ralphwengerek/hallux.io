import React from 'react';
import { Content } from '../components/Content/Content';
import { Link } from '../components/Link/Link';

const NotFoundPage = () => (
  <Content style={{ textAlign: 'center' }}>
    <h2>Oops! Sorry, the page you&apos;re looking for does not exist...</h2>
    <Link to="/">Take me home</Link>
  </Content>
);

export default NotFoundPage;
