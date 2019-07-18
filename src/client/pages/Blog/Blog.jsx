import React from 'react';
import Post from '../../components/Post/Post';
import useRouter from '../../hooks/useRouter';
import { fetchPost } from '../../redux/actions/post';

const Blog = () => {
  const { match } = useRouter();

  React.useEffect(() => {
    fetchPost(match.params.slug);
  });

  return (
    <div>
      <h1>Blog</h1>
      <hr />
      <Post />
    </div>
  );
};
export default Blog;
