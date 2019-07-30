import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from '../../hooks/useRouter';
import { fetchPost, savePost } from '../../redux/actions/post';
import { getPostBySlug } from '../../redux/reducers/post';
import { PostEditor } from '../../components/Post/PostEditor';

export const EditBlog = () => {
  const { match: { params: { slug } } } = useRouter();
  const dispatch = useDispatch();
  const post = useSelector(state => getPostBySlug(state, slug));

  React.useEffect(() => {
    dispatch(fetchPost(slug));
  }, [slug]);

  const submitPost = values => dispatch(savePost(values));

  return (
    <div>
      <PostEditor post={post.entity} isLoading={post.isLoading} onSubmit={submitPost} />
    </div>
  );
};

export default EditBlog;
