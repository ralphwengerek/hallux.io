import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCalendarDay } from 'react-icons/fa';
import moment from 'moment';
import { Card } from '../Card/Card';
import { px } from '../../utils/pixel';
import { TagList } from '../Tag/TagList';

const ArticleLink = styled.button`
  text-decoration: none;
  color: unset;
`;

const CardWrapper = styled.div`
  margin: ${px(32)} 0;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  display: block;
  margin: ${px(16)} 0px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const CardImage = styled.img`
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  object-fit: cover;
  border-radius: 3px 3px 0px 0px;
`;

const CardSummary = styled.div`
  margin-bottom: ${px(16)};
`;

const CardContent = styled.div`
  padding: ${px(16)};
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom-left-radius: 3px;
  border-top-right-radius: 3px;
  right: 0px;
  padding: 4px;
  font-size: ${px(14)};
  text-transform: uppercase;
  > span {
    margin-left:4px;
  }
`;

export const PostSummary = ({
  title, image, summary, published, tags, slug,
}) => (
  <CardWrapper>
    <Card>
      <DateContainer>
        <FaCalendarDay />
        <span>{moment(published).format('LL')}</span>
      </DateContainer>
      <CardImage src={image} alt={title} title={title} height="140" />
      <CardContent>
        <ArticleLink as={Link} to={`/blog/${slug}`}>
          <CardTitle to={`/blog/${slug}`}>
            {title}
          </CardTitle>
          <CardSummary>
            {summary}
          </CardSummary>
        </ArticleLink>
        <CardFooter>
          <TagList tags={tags} />
        </CardFooter>
      </CardContent>
    </Card>
  </CardWrapper>
);

PostSummary.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  summary: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
};

PostSummary.defaultProps = {
  image: '',
};

export default PostSummary;
