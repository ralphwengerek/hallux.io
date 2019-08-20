import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { px } from '../utils/pixel';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { sendMail } from '../redux/actions/serviceActions';

const PageTitle = styled.h1`
  padding: 0 ${px(16)};
  text-align: center;
`;

const ContactPage = () => {
  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(sendMail(values));
  };

  return (
    <>
      <PageTitle>Contact Me</PageTitle>
      <ContactForm onSubmit={onSubmit} isLoading={false} />
    </>
  );
};
export default ContactPage;
