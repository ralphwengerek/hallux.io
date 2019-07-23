import * as React from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import styled from 'styled-components';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { PropTypes } from 'prop-types';
import { px } from '../../utils/pixel';
import { Button } from '../Button/Button';

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${px(16)};
`;

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const PostEditor = ({ content, onSave }) => {
  const [value, setValue] = React.useState(content);
  const [selectedTab, setSelectedTab] = React.useState('write');

  return (
    <>
      <ReactMde
        minEditorHeight="calc(100vh - 275px)"
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))
        }
      />
      <ActionContainer>
        <Button onClick={() => onSave(value)}>Save</Button>
      </ActionContainer>

    </>
  );
};

PostEditor.propTypes = {
  content: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default PostEditor;
