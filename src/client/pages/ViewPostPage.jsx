
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Post } from '../components/Post/Post';
import { fetchPost } from '../redux/actions/postActions';
import { getPostBySlug } from '../redux/reducers/postReducer';
import { getUser } from '../redux/reducers/userReducer';
import config from '../config';
import useRouter from '../hooks/useRouter';

const ViewPostPage = () => {
  const { match } = useRouter();
  const dispatch = useDispatch();
  const post = useSelector((state) => getPostBySlug(state, match.params.slug));
  const user = useSelector(getUser);

  React.useEffect(() => {
    dispatch(fetchPost(match.params.slug));
  }, []);

  return (
    <div>
      { post.entity && (
      <Helmet>
        <title>
        Hallux.io -
          {' '}
          {post.entity.title}
        </title>
        <link rel="canonical" href={`${config.baseUrl}/blog/${post.entity.slug}`} />
        <meta name="description" content={post.entity.summary.substring(0, 145).concat('...')} />
      </Helmet>
      )}
      <Post post={post.entity} isLoading={post.isLoading} user={user} />
    </div>
  );
};
export default ViewPostPage;
