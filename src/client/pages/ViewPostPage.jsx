
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../components/Post/Post';
import { fetchPost } from '../redux/actions/post';
import { getPostBySlug } from '../redux/reducers/post';
import useRouter from '../hooks/useRouter';

const ViewPostPage = () => {
  const { match } = useRouter();
  const dispatch = useDispatch();
  const post = useSelector(state => getPostBySlug(state, match.params.slug));

  React.useEffect(() => {
    dispatch(fetchPost(match.params.slug));
  }, []);

  return (
    <div>
      <Post post={post.entity} isLoading={post.isLoading} />
    </div>
  );
};
export default ViewPostPage;
