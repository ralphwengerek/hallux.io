import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaCalendarDay } from 'react-icons/fa';
import moment from 'moment';
import { Link } from '../Link/Link';
import { Card } from '../Card/Card';
import { px } from '../../utils/pixel';
import { TagList } from '../Tag/TagList';
import { media } from '../../utils/mediaQuery';

const ArticleLink = styled(Link)`
  text-decoration: none;
  color: unset;
  &:hover {
    color: ${({ theme }) => theme.colors.body};
    text-decoration: none;
  }
`;

const CardWrapper = styled.div`
  margin: ${px(32)} ${px(16)};
`;

const CardTitle = styled.h2`
  display: block;
  margin-bottom: 0px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
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

  ${media.up.phone`
    padding: ${px(32)};
  `}
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  margin: ${px(8)} 0;
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
      <CardImage src={image} alt={title} title={title} height="140" />
      <CardContent>
        <ArticleLink to={`/blog/${slug}`}>
          <CardTitle>
            {title}
          </CardTitle>
          <DateContainer>
            <FaCalendarDay />
            <span>{moment(published).format('LL')}</span>
          </DateContainer>
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
