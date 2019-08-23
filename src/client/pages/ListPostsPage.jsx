import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PostSummaryList } from '../components/Post/PostSummaryList';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { Loader } from '../components/Loader/Loader';
import { fetchPosts } from '../redux/actions/postActions';
import { getPostsByTag, getDistinctTags } from '../redux/reducers/postReducer';
import { TagBrowser } from '../components/Tag/TagBrowser';
import { media } from '../utils/mediaQuery';
import { useRouter } from '../hooks';
import { Bio } from '../components/Bio/Bio';


const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  ${media.up.tablet`
    flex-direction: row;
  `}
`;

const Column = styled.div``;

const ListPostsPage = () => {
  const { match: { params: { tag } } } = useRouter();

  const dispatch = useDispatch();
  const {
    error,
    isLoading,
    entities,
  } = useSelector((state) => getPostsByTag(state, tag));

  const tags = useSelector(getDistinctTags);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Loader size={50} show={isLoading} />
      { tag ? (
        <PageTitle>
          {`'${tag}'`}
        </PageTitle>
      ) : <Bio /> }

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
      )}
    </>
  );
};

export default ListPostsPage;
