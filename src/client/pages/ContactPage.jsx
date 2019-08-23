import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { PageTitle } from '../components/PageTitle/PageTitle';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { sendMail } from '../redux/actions/serviceActions';

const Byline = styled.div`
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
      <Byline>
        <p>Have you found my articles interesting and would you like to work with me?</p>
        <p>I always love a new challenge! Feel free to contact me below.</p>
      </Byline>
      <ContactForm onSubmit={onSubmit} isLoading={false} />
    </>
  );
};
export default ContactPage;
