import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import UserList from 'components/UserList';

function Info({ loading, error, data }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <div>Something went wrong</div>
    );

    return <List component={ErrorComponent} />;
  }

  if (data !== false) {
    return (
      <div>
        <UserList users={data} />
      </div>
    );
  }

  return null;
}

Info.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  data: PropTypes.any,
};

export default Info;
