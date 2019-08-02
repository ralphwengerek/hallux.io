/* eslint-disable */
import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Button } from '../Button/Button';
import { schema } from './ContactFormSchema';
import { Label } from '../Label/Label';
import { FormError } from '../FormError/FormError';
import { Loader } from '../Loader/Loader';
import { px } from '../../utils/pixel';

const InputGroup = styled.div`
  padding: ${px(8)} ${px(16)};
`;


const ActionContainer = styled.div`
  text-align: center;
  padding: ${px(32)};
`;

const formValues = {
  name: '',
  company: '',
  email: '',
  message: '',
};

export const ContactForm = ({ onSubmit, isLoading }) => {
  const [token, setToken] = React.useState(null);
  // sitekey="6LdlCbEUAAAAAG__gqDYZjZQoVcc_6NPRui0urfR"
  console.log('TOKEN:', token);
  const verifyCallback = (recaptchaToken) => {
    setToken(recaptchaToken);
  };

  return (
    <>
      <Loader show={false} />
      <Formik
        initialValues={formValues}
        onSubmit={onSubmit}
        validationSchema={schema}
        render={({
          values, touched, errors, isSubmitting,
          handleChange, handleBlur, handleSubmit,
        }) => (
          <form disabled={isLoading || isSubmitting} onSubmit={handleSubmit}>
            <InputGroup>
              <Label text="Name" error={errors.name} showError={errors.name && touched.name} />
              <Input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              { errors.name && touched.name && (
              <FormError msg={errors.name} />
              )}
            </InputGroup>

            <InputGroup>
              <Label text="Company" error={errors.company} showError={errors.company && touched.company} />
              <Input
                id="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              { errors.company && touched.company && (
              <FormError msg={errors.company} />
              )}
            </InputGroup>

            <InputGroup>
              <Label text="Email address" error={errors.email} showError={errors.email && touched.email} />
              <Input
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
              />
              { errors.email && touched.email && (
              <FormError msg={errors.email} />
              )}
            </InputGroup>

            <InputGroup>
              <Label text="Message" error={errors.message} showError={errors.message && touched.message} />
              <Input.TextArea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"
                rows={4}
              />
              { errors.message && touched.message && (
              <FormError msg={errors.message} />
              )}
            </InputGroup>

            <ActionContainer>
              <Button disabled={isLoading || isSubmitting} type="submit">
              Send Message
              </Button>
            </ActionContainer>
          </form>
        )}
      />
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

ContactForm.defaultProps = {
  isLoading: false,
};

export default ContactForm;
