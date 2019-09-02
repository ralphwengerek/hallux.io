import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../Avatar/Avatar';
import { px } from '../../utils/pixel';
import { media } from '../../utils/mediaQuery';

const BioContainer = styled.div`
  display:flex;
  padding: ${px(32)};
  align-items: center;
  justify-content: start;
`;

const BioTitle = styled.h2`
  display: inline-block;
  margin: 0;
`;

const BioInformation = styled.div`
  display: inline-block;
  margin: 0 ${px(16)};

  ${media.up.phone`
    margin: 0 ${px(32)};
  `}
`;

export const Bio = () => (
  <BioContainer>
    <Avatar picture="/images/bio.png" size="96px" shadow />
    <BioInformation>
      <BioTitle>
      Personal blog of
        {' '}
        <span style={{ whiteSpace: 'nowrap' }}>Ralph Wengerek</span>
      </BioTitle>
      <div>
        Develop, Eat, Surf, Repeat
        {' '}
        <span role="img" aria-label="repeat">🏄‍</span>
      </div>
    </BioInformation>
  </BioContainer>
);

export default Bio;
