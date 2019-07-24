import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from '../../hooks/useRouter';
import { fetchPost } from '../../redux/actions/post';
import { getPostBySlug } from '../../redux/reducers/post';
import { PostEditor } from '../../components/Post/PostEditor';

export const EditBlog = () => {
  const { match } = useRouter();
  const dispatch = useDispatch();
  const post = useSelector(state => getPostBySlug(state, match.params.slug));

  React.useEffect(() => {
    dispatch(fetchPost(match.params.slug));
  }, [post]);

  return (
    <div>
      <PostEditor post={post} />
    </div>
  );
};

export default EditBlog;
