import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const UserPropertyWrapper = styled.div`
  margin: 10px;
  text-align: center;
`;

const UserPropertyNameWrapper = styled.div`
  text-transform: uppercase;
  color: #6e7175;
  font-size: 10px;
`

;const UserPropertyValueWrapper = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: #6e7175;
  font-size: 15px;
`;

const CardProperty = ({ name, value }) => (
  <UserPropertyWrapper>
    <UserPropertyValueWrapper>
      {value}
    </UserPropertyValueWrapper>
    < UserPropertyNameWrapper>
      < FormattedMessage
        {...name}
      />
    </UserPropertyNameWrapper>
  </UserPropertyWrapper>
);

CardProperty.propTypes = {
  name: PropTypes.object,
  value: PropTypes.string,
};

export default CardProperty;
