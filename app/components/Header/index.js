import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  padding: 5px;
  background-color: #3b5998;
  color: white;
  padding-left: 50px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;


const Header = ({ name }) => ( // eslint-disable-line react/prefer-stateless-function
  <HeaderWrapper>
    <h1>SeekingAlpha</h1>
  </HeaderWrapper>
)

export default Header;
