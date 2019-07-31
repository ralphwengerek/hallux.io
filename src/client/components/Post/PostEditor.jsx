/* eslint-disable no-console */
/* eslint-disable max-len */
import * as React from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import styled from 'styled-components';
import { Formik, FieldArray } from 'formik';
import { Input, Tooltip, Icon } from 'antd';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { PropTypes } from 'prop-types';
import { px } from '../../utils/pixel';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import { schema } from './PostEditorSchema';
import 'antd/dist/antd.css';
import { Loader } from '../Loader/Loader';
import { TagForm } from '../Tag/TagForm';

const PostEditorContainer = styled.div`
  margin: ${px(16)} 0;
`;

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

const LabelContainer = styled.div`
  min-width: 100px;
  position: relative;

  > i {
    margin-left: ${px(8)};
  }
`;

const InputGroup = styled.div`
  padding: ${px(8)} ${px(16)};
`;

const ErrorContainer = styled.div`
  position:absolute;
  right: ${px(16)};
  font-size: ${({ theme }) => theme.typography.small};
  color: red;
`;

const Error = ({ msg }) => (
  <ErrorContainer>
    <span>{`* ${msg}`}</span>
  </ErrorContainer>
);
Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

const Label = ({ text, error, showError }) => (
  <LabelContainer>
    {`${text} `}
    { !!error && !!showError
    && (
      <Tooltip title={error}>
        <Icon type="info-circle" style={{ color: 'red' }} />
      </Tooltip>
    )}
  </LabelContainer>
);
Label.propTypes = {
  text: PropTypes.string.isRequired,
  error: PropTypes.string,
  showError: PropTypes.bool,
};
Label.defaultProps = {
  error: undefined,
  showError: false,
};

export const PostEditor = ({ post, onSubmit, isLoading }) => {
  const [selectedTab, setSelectedTab] = React.useState('write');

  return (!post || isLoading ? <Loader show />
    : (
      <PostEditorContainer>
        <Formik
          initialValues={post}
          onSubmit={onSubmit}
          validationSchema={schema}
          render={({
            values, touched, errors, dirty, isSubmitting,
            handleChange, handleBlur, setFieldValue, handleSubmit,
          }) => (
            <form disabled={isLoading || isSubmitting}>
              <InputGroup>
                <Label text="Title" error={errors.title} showError={errors.title && touched.title} />
                <Input
                  id="title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                { errors.title && touched.title && (
                <Error msg={errors.title} />
                )}
              </InputGroup>

              <InputGroup>
                <Label text="Image" error={errors.image} showError={errors.image && touched.image} />
                <Input
                  id="image"
                  name="image"
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                { errors.image && touched.image && (
                <Error msg={errors.image} />
                )}
              </InputGroup>

              <InputGroup>
                <Label text="Summary" error={errors.summary} showError={errors.summary && touched.summary} />
                <Input.TextArea
                  id="summary"
                  name="summary"
                  value={values.summary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  rows={4}
                />
                { errors.summary && touched.summary && (
                <Error msg={errors.summary} />
                )}
              </InputGroup>

              <InputGroup>
                <Label text="Content" error={errors.content} showError={errors.content} />
                <ReactMde
                  minEditorHeight="calc(100vh - 275px)"
                  value={values.content}
                  onChange={value => setFieldValue('content', value, true)}
                  onBlur={handleBlur}
                  selectedTab={selectedTab}
                  onTabChange={setSelectedTab}
                  generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
                />
              </InputGroup>

              <InputGroup>
                <Label text="Tags" error={errors.tags} showError={errors.tags && touched.tags} />
                <FieldArray
                  name="tags"
                  render={({
                    push, form, remove,
                  }) => (<TagForm name="tags" values={form.values.tags} push={push} remove={remove} />)}
                />

                { errors.tags && touched.tags && (
                <Error msg={errors.tags} />
                )}
              </InputGroup>

              <InputGroup>
                <Label text="Keywords" error={errors.keywords} showError={errors.keywords && touched.keywords} />
                <FieldArray
                  name="keywords"
                  render={({
                    push, form, remove,
                  }) => (<TagForm name="keywords" values={form.values.keywords} push={push} remove={remove} />)}
                />
                { errors.keywords && touched.keywords && (
                <Error msg={errors.keywords} />
                )}
              </InputGroup>

              <ActionContainer>
                <Link to={`/blog/${post.slug}`}>Cancel</Link>
                &nbsp;
                <Button link disabled={isLoading || isSubmitting} onClick={handleSubmit}>Save</Button>
              </ActionContainer>
              <h3>{`Dirty: ${dirty}`}</h3>
            </form>
          )}
        />
      </PostEditorContainer>
    )
  );
};

PostEditor.propTypes = {
  post: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func,
};

PostEditor.defaultProps = {
  post: {},
  onSubmit: values => console.log(values),
};

export default PostEditor;
