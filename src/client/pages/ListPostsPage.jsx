import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PostSummaryList } from '../components/Post/PostSummaryList';
import { Loader } from '../components/Loader/Loader';
import { fetchPosts } from '../redux/actions/post';
import { getPostsByTag, getDistinctTags } from '../redux/reducers/post';
import { TagBrowser } from '../components/Tag/TagBrowser';
import { media } from '../utils/mediaQuery';
import { px } from '../utils/pixel';
import { useRouter } from '../hooks';


const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  ${media.up.tablet`
    flex-direction: row;
  `}
`;

const Column = styled.div``;

const PageTitle = styled.h1`
  padding: 0 ${px(16)};
  text-align: center;
`;

const ListPostsPage = () => {
  const { match: { params: { tag } } } = useRouter();

  const dispatch = useDispatch();
  const {
    error,
    isLoading,
    entities,
  } = useSelector(state => getPostsByTag(state, tag));

  const tags = useSelector(getDistinctTags);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Loader size={50} show={isLoading} />
      <PageTitle>
        { (tag && `'${tag}'`) || 'Welcome' }
      </PageTitle>
      {!isLoading && (
      <Flexbox>
        <Column>
          <PostSummaryList
            entities={entities}
            error={error}
            isLoading={isLoading}
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

export default ListPostsPage;
