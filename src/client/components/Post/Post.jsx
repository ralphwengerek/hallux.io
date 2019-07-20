/* eslint-disable */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Mdx from '../../data/post.mdx';

export const Post = ({ content }) => (
  <>
    <MDXProvider>
      <Mdx />
    </MDXProvider>
  </>
);

export default Post;
