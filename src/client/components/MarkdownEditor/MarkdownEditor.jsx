import React from 'react';
import ReactMde from 'react-mde';
import styled, { css } from 'styled-components';
import 'react-mde/lib/styles/css/react-mde-all.css';

const StyledMarkdownEditor = styled(ReactMde)`
  ${({ theme }) => css`
    .mde-header ul.mde-header-group li.mde-header-item button {
      color: ${theme.colors.body};

    }
    .mde-header ul.mde-header-group li.mde-header-item {
      border: solid 1px ${theme.colors.background};
      &:hover {
        border: solid 1px ${theme.colors.primary};
      }
    }
    .mde-header {
      background: ${theme.colors.background};
      color: ${theme.colors.body};
      border-bottom: none;
    }
    .mde-header .mde-tabs button.selected {
      border: solid 1px ${theme.colors.primary};
    }
  `}
`;

export const MarkdownEditor = props => (
  <StyledMarkdownEditor textAreaProps={{ className: 'ant-input' }} {...props} />
);

export default MarkdownEditor;
