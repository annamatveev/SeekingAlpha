import React from 'react';
import PropTypes from 'prop-types';
import {UserCardWrapper, UserInfoWrapper, UserNameWrapper, FollowButtonWrapper, HeadlineWrapper} from 'components/UserCard/Wrappers';
import messages from './messages';
import CardProperty from './CardProperty';

const UserCard = ({user}) => (
  <UserCardWrapper>
    <HeadlineWrapper>
      <UserNameWrapper>
        {user.name}
      </UserNameWrapper>
      <FollowButtonWrapper>
        <button>Follow</button>
      </FollowButtonWrapper>
    </HeadlineWrapper>
    <UserInfoWrapper>
      <CardProperty name={messages.group} value={user.group}/>
      {user.followers > 0 ? <CardProperty name={messages.followers} value={user.followers.length}/> : null}
    </UserInfoWrapper>
  </UserCardWrapper>
);

UserCard.propTypes = {
  name: PropTypes.array,
};

export default UserCard;
