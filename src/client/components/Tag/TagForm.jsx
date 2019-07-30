import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input, Icon } from 'antd';
import { Tag } from './Tag';
import { px } from '../../utils/pixel';

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: ${px(8)} 0;
  flex-wrap: wrap;
`;

export const TagForm = ({
  name, push, remove, values,
}) => {
  const [value, setValue] = React.useState('');

  const addTag = () => {
    if (value && !values.some(v => v === value)) {
      push(value);
      setValue('');
    }
  };

  const removeTag = (i) => {
    remove(i);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTag();
    }
  };

  return (
    <>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={e => setValue(e.target.value)}
        autoComplete="off"
        placeholder="Type and press enter to add"
        onKeyDown={handleKeyDown}
        addonAfter={<Icon type="plus" onClick={addTag} />}
      />
      <TagsContainer>
        {values.map((tag, i) => <Tag key={tag} value={tag} onClick={() => removeTag(i)} />)}
      </TagsContainer>
    </>
  );
};

TagForm.propTypes = {
  name: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  values: PropTypes.array,
};

TagForm.defaultProps = {
  values: [],
};

export default TagForm;
