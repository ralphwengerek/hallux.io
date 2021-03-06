import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchPost, savePost } from '../redux/actions/postActions';
import useRouter from '../hooks/useRouter';
import { getPostBySlug } from '../redux/reducers/postReducer';
import { PostEditor } from '../components/Post/PostEditor';
import { initialValues } from '../components/Post/PostEditorSchema';

const ManagePostPage = () => {
  const dispatch = useDispatch();

  const { match: { params: { slug } } } = useRouter();

  const post = slug ? useSelector((state) => getPostBySlug(state, slug)) : initialValues;

  React.useEffect(() => {
    if (slug) {
      dispatch(fetchPost(slug));
    }
  }, [slug]);

  const submitPost = (values) => dispatch(savePost(values));

  return (
    <>
      <Helmet>
        <title>
          Edit Post
        </title>
      </Helmet>
      <PostEditor post={post.entity} isLoading={post.isLoading} onSubmit={submitPost} />
    </>
  );
};

export default ManagePostPage;
