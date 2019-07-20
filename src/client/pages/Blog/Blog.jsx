import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../components/Post/Post';
import useRouter from '../../hooks/useRouter';
import { fetchPost } from '../../redux/actions/post';
import { getPostBySlug } from '../../redux/reducers/post';

const Blog = () => {
  const { match } = useRouter();
  const dispatch = useDispatch();
  const post = useSelector(state => getPostBySlug(state, match.params.slug));

  React.useEffect(() => {
    dispatch(fetchPost(match.params.slug));
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <hr />
      <Post {...post} />
    </div>
  );
};
export default Blog;
