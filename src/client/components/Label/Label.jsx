import React from 'react';
import { PropTypes } from 'prop-types';
import { Tooltip, Icon } from 'antd';
import styled from 'styled-components';
import { px } from '../../utils/pixel';

const LabelContainer = styled.div`
  min-width: 100px;
  position: relative;

  > i {
    margin-left: ${px(8)};
  }
`;

const InfoCircleIcon = styled(Icon)`
  color: ${({ theme }) => theme.colors.error};
`;

export const Label = ({ text, error, showError }) => (
  <LabelContainer>
    {`${text} `}
    { !!error && !!showError
    && (
      <Tooltip title={error}>
        <InfoCircleIcon type="info-circle" />
      </Tooltip>
    )}
  </LabelContainer>
);
Label.propTypes = {
  text: PropTypes.string.isRequired,
  error: PropTypes.string,
  showError: PropTypes.any,
};
Label.defaultProps = {
  error: undefined,
  showError: false,
};


export default Label;
