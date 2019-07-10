import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as userActions from '../../redux/actions/user';

const Callback = ({ location, history, handleAuthentication }) => {
  useEffect(() => {
    if (/access_token|id_token|error/.test(location.hash)) {
      handleAuthentication()
        .then(() => history.push('/'))
        .catch(err => console.log(err));
    } else {
      throw new Error('Invalid callback URL');
    }
  }, []);

  return (<span>...</span>);
};

Callback.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleAuthentication: PropTypes.func.isRequired,
};

const mapDispatchToProps = ({
  handleAuthentication: userActions.handleAuthentication,
});

export default connect(null, mapDispatchToProps)(Callback);
