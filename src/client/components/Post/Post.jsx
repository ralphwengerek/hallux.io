/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Disqus from 'disqus-react';
import * as Showdown from 'showdown';
import { FaWindowMinimize } from 'react-icons/fa';
import { Loader } from '../Loader/Loader';
import { FaSignLanguage } from 'react-icons/fa'
import { TagList } from '../Tag/TagList';
import { px } from './../../utils/pixel';
import { Link } from '../Link/Link';

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

const PublishDate = styled.div``;

const PostContent = styled.div.attrs({
  'data-testid': 'post-container',
})`
  padding: ${px(16)};
`;

const Container = styled.div`
  padding: 0 ${px(16)};
`;

const PostDivider = styled.div`
  display: block;
  text-align: center;
  margin-bottom: ${px(8)};
`;

const EditPostButton = styled(Link)`
  position: absolute;
  right: 0px;
`;

export const Post = ({ post, isLoading}) => {
  const disqusConfig = {
    url: `https://www.hallux.io/blog/${slug}`,
    identifier: slug,
    title,
  };
  const disqusShortname = 'hallux';
  const { title, image, content, published, tags, likes, slug } = post;
  return isLoading ? <Loader show={isLoading} /> : (
    <>
      <EditPostButton to={`/blog/${slug}/edit`} >Edit post</EditPostButton>
      <PostMeta>
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
