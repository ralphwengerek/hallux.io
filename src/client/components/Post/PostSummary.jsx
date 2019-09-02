import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { FaCalendarDay } from 'react-icons/fa';
import moment from 'moment';
import { px } from '../../utils/pixel';
import { Link } from '../Link/Link';
import { Card } from '../Card/Card';
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
  margin: ${px(8)};

  ${media.up.phone`
    margin: ${px(32)} ${px(16)};
  `}
`;

const CardLayout = styled.div`
  display: flex;

  ${({ hero }) => hero && css`
    display: block;
  `}
`;

const CardSummary = styled.div`
  margin-bottom: ${px(8)};
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
  title, image, summary, published, tags, slug, hero,
}) => (
  <CardWrapper>
    <Card>
      <CardLayout hero={hero}>
        <Card.Image src={image} alt={title} title={title} hero={hero} />
        <Card.Content hero={hero}>
          <ArticleLink to={`/blog/${slug}`}>
            <Card.Title>
              {title}
            </Card.Title>
            <DateContainer>
              <FaCalendarDay />
              <span>{moment(published).format('LL')}</span>
            </DateContainer>
            <CardSummary>
              {summary}
            </CardSummary>
          </ArticleLink>
          <Card.Footer>
            <TagList tags={tags} />
          </Card.Footer>
        </Card.Content>
      </CardLayout>
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
  hero: PropTypes.bool,
};

PostSummary.defaultProps = {
  image: '',
  hero: false,
};

export default PostSummary;
