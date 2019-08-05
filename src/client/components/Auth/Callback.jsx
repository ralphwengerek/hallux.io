/* eslint-disable */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleAuthentication } from '../../redux/actions/userActions';

export const Callback = ({ location, history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      dispatch(handleAuthentication());
    } else {
      throw new Error('Invalid callback URL');
    }
  }, []);

  return (<span>...</span>);
};

Callback.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Callback;
