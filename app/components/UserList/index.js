import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserCard from 'components/UserCard';

const UserListWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-wrap: wrap;
  margin: auto;
  z-index: 99;
  width: 50%;
`;

const UserList = ({ users }) => (
  <UserListWrapper>
    {users.map((item) => (
        <UserCard key={item.id} user={item}/>
      )
    )}
  </UserListWrapper>
)

UserList.propTypes = {
  name: PropTypes.array
};

export default UserList;
