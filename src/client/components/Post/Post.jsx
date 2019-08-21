/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Disqus from 'disqus-react';
import * as Showdown from 'showdown';
import { useDispatch } from 'react-redux';
import { Switch, Tooltip } from 'antd';
import { FaWindowMinimize } from 'react-icons/fa';
import { Loader } from '../Loader/Loader';
import { TagList } from '../Tag/TagList';
import { px } from './../../utils/pixel';
import { Link } from '../Link/Link';
import { hasRole } from '../../../shared/utils/rbac';
import media from '../../utils/mediaQuery';
import { savePost } from '../../redux/actions/postActions';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const PostMeta = styled.div`
  text-align: center;
`;

const PostTitle = styled.h1``;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const PublishDate = styled.div`
  padding-bottom: ${px(16)};
`;

const PostContent = styled.div.attrs({
  'data-testid': 'post-container',
})`
  padding: ${px(16)};

  ${media.up.phone`
    padding: ${px(32)};
  `}
`;

const Container = styled.div`
  padding: 0 ${px(16)};
  margin-bottom: 40px;
`;

const PostDivider = styled.div`
  display: block;
  text-align: center;
  margin-bottom: ${px(8)};
`;

const PostActions = styled.div`
  padding: ${px(8)};
`;

const EditPostButton = styled(Link)``;


const DisqusFix = styled.div`
  display: block;
  min-height: 40px;

  ${media.up.tablet`
    display: none;
  `}
`;

export const Post = ({ post, isLoading, user }) => {
  const { title, image, content, published, tags, likes, slug, state } = post;

  const dispatch = useDispatch();
  const disqusConfig = {
    url: `https://www.hallux.io/blog/${slug}`,
    identifier: slug,
    title,
  };
  const disqusShortname = 'hallux';

  const changeState = (value) => {
    const state = value ? 'published' : 'draft';
    const updatedPost = {
      ...post,
      published: Date.now(),
      state
    };
    dispatch(savePost(updatedPost));
  };

  return isLoading ? <Loader show={isLoading} /> : (
    <>

      <PostMeta>
      { hasRole('admin', user) &&
        <PostActions>
          <div>
          <EditPostButton to={`/blog/${slug}/edit`} >Edit post</EditPostButton>
          </div>
          <div>
          Post state: <Tooltip placement="bottom" title={state === 'published' ? 'Change to Draft state' : 'Change to Published state'}>
            <Switch
              checkedChildren={<div>Published</div>}
              unCheckedChildren={<div>Draft</div>}
              onChange={changeState}
              checked={state === 'published'}
            />
          </Tooltip>
          </div>
        </PostActions>
      }
        <PostTitle>{title}</PostTitle>
        <PublishDate>{moment(published).format('LL')}</PublishDate>
        <PostImage src={image} alt={title} />
      </PostMeta>
      <PostContent dangerouslySetInnerHTML={{__html: converter.makeHtml(content)}} />
      <Container>
        <PostDivider >
          <FaWindowMinimize />
        </PostDivider>
        <TagList tags={tags} />
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </>
  );
};

Post.defaultProps = {
  post: {},
  isLoading: false,
};

export default Post;
