import React from 'react';
import styled from 'styled-components';
import { px } from '../utils/pixel';
import { ContactForm } from '../components/ContactForm/ContactForm';

const PageTitle = styled.h1`
  padding: 0 ${px(16)};
  text-align: center;
`;

const ContactPage = () => {
  const onSubmit = values => console.log('Submitting form:', values);
  return (
    <>
      <PageTitle>Contact Me</PageTitle>
      <ContactForm onSubmit={onSubmit} isLoading={false} />
    </>
  );
};
export default ContactPage;
