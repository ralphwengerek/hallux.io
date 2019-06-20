import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleProfilePanel } from '../../redux/actions/app';

const AvatarLink = styled.a`
  color: #000;
  cursor: pointer;
  text-decoration: none;
`;

const Avatar = styled.div`
  background-image: url(${({ picture }) => picture});
  background-size: 32px 32px;
  border-radius: 50%;
  overflow: hidden;
  height: 32px;
  width: 32px;
  z-index: 0;
  ::before {
    content: url(${({ picture }) => picture});
    display: inline-block;
    transform: scale(.5);
  }
`;

const AvatarProfile = ({ profile }) => {
  const dispatch = useDispatch();
  return (
    <AvatarLink onClick={() => dispatch(toggleProfilePanel())}>
      <Avatar picture={profile.picture}>&nbsp;</Avatar>
    </AvatarLink>
  );
};

AvatarProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default AvatarProfile;
