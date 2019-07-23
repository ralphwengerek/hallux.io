import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostSummaryList } from '../../components/Post/PostSummaryList';
import { Loader } from '../../components/Loader/Loader';
import { fetchPosts } from '../../redux/actions/post';
import { getAllPosts } from '../../redux/reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const {
    error,
    isLoading,
    postEntities,
    postIds,
  } = useSelector(getAllPosts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Loader size={50} show={isLoading} />
      {!isLoading && (
      <PostSummaryList
        postEntities={postEntities}
        postIds={postIds}
        error={error}
      />
      )
      }
    </>
  );
};

export default Home;
