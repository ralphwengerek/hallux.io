import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PostSummaryList } from '../../components/Post/PostSummaryList';
import { Loader } from '../../components/Loader/Loader';
import { fetchPosts } from '../../redux/actions/post';
import { getAllPosts } from '../../redux/reducers/post';
import { TagBrowser } from '../../components/TagBrowser/TagBrowser';
import { media } from '../../utils/mediaQuery';


const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  ${media.up.tablet`
    flex-direction: row;
  `}
`;

const Column = styled.div`
`;

const Home = () => {
  const dispatch = useDispatch();
  const {
    error,
    isLoading,
    postEntities,
    postIds,
  } = useSelector(getAllPosts);

  const tags = [
    {
      count: 10,
      value: 'React.js',
    },
    {
      count: 4,
      value: 'Node.js',
    },
    {
      count: 7,
      value: 'MongoDB',
    },
    {
      count: 2,
      value: 'javascript',
    },
  ];

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Loader size={50} show={isLoading} />
      {!isLoading && (
      <Flexbox>
        <Column>
          <PostSummaryList
            postEntities={postEntities}
            postIds={postIds}
            error={error}
          />
        </Column>
        <Column>
          <TagBrowser tags={tags} />
        </Column>
      </Flexbox>
      )
      }
    </>
  );
};

export default Home;
