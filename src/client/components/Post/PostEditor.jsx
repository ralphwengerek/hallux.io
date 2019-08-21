/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import * as Showdown from 'showdown';
import styled from 'styled-components';
import { Formik, FieldArray } from 'formik';
import { Input } from 'antd';
import { PropTypes } from 'prop-types';
import { px } from '../../utils/pixel';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import { schema } from './PostEditorSchema';
import { Loader } from '../Loader/Loader';
import { MarkdownEditor } from '../MarkdownEditor/MarkdownEditor';
import { Label } from '../Label/Label';
import { TagForm } from '../Tag/TagForm';
import { FormError } from '../FormError/FormError';

const PostEditorContainer = styled.div`
  margin: ${px(16)} 0;
`;

const Title = styled.h1`
  text-align: center;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: ${px(16)};
`;

const Action = styled.div`
  padding: 0 ${px(8)};
`;

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const InputGroup = styled.div`
  padding: ${px(8)} ${px(16)};
`;

export const PostEditor = ({ post, onSubmit, isLoading }) => {
  const [selectedTab, setSelectedTab] = React.useState('write');
  const title = post.slug ? 'Edit post' : 'Create post';

  return (!post || isLoading ? <Loader show />
    : (
      <PostEditorContainer>
        <Title>
          {title}
        </Title>
        <Formik
          initialValues={post}
          onSubmit={onSubmit}
          validationSchema={schema}
          render={({
            values, touched, errors, isSubmitting,
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
                <FormError msg={errors.title} />
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
                <FormError msg={errors.image} />
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
                <FormError msg={errors.summary} />
                )}
              </InputGroup>

              <InputGroup>
                <Label text="Content" error={errors.content} showError={errors.content} />
                <MarkdownEditor
                  minEditorHeight="calc(100vh - 275px)"
                  value={values.content}
                  onChange={(value) => setFieldValue('content', value, true)}
                  onBlur={handleBlur}
                  selectedTab={selectedTab}
                  onTabChange={setSelectedTab}
                  generateMarkdownPreview={(markdown) => Promise.resolve(converter.makeHtml(markdown))}
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
                <FormError msg={errors.tags} />
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
                <FormError msg={errors.keywords} />
                )}
              </InputGroup>

              <InputGroup>
                <Label text="Slug" error={errors.slug} showError={errors.slug && touched.slug} />
                <Input
                  id="slug"
                  name="slug"
                  value={values.slug}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                />
                { errors.slug && touched.slug && (
                <FormError msg={errors.slug} />
                )}
              </InputGroup>

              <ActionContainer>
                <Action>
                  <Link to={post.slug ? `/blog/${post.slug}` : '/'}>Cancel</Link>
                </Action>
                <Action>
                  <Button link disabled={isLoading || isSubmitting} onClick={handleSubmit}>Save</Button>
                </Action>
              </ActionContainer>
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
  onSubmit: (values) => console.log(values),
};

export default PostEditor;
