import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import Mdx from '../../data/post.mdx';

const Post = () => (
  <>
    <MDXProvider>
      <Mdx />
    </MDXProvider>
  </>
);

export default Post;
