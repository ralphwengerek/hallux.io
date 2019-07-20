import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCalendarDay } from 'react-icons/fa';
import Card from '../Card/Card';
import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import { px } from '../../utils/pixel';

const ArticleLink = styled.button`
  text-decoration: none;
  color: unset;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  display: block;
  margin: ${px(16)} 0px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    text-decoration: underline;
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

const TagsContainer = styled.div`
  display: flex;
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
  <Card>
    <DateContainer>
      <FaCalendarDay />
      <span>{published}</span>
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
        <TagsContainer>
          {tags.map(t => <Tag key={t.id} value={t.value} />)}
        </TagsContainer>
        <Button as={Link} to={`/blog/${slug}`}>
          Continue reading
        </Button>
      </CardFooter>
    </CardContent>
  </Card>
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
