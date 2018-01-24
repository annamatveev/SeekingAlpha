import styled from "styled-components";
export const HeadlineWrapper = styled.div`
  display: flexbox;
  justify-content: space-between;
  background-color: #3b5998;
  padding: 15px;
  
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px transparent;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #2098D1;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  &:hover:before, &:focus:before, &:active:before {
     right: 0;
  }
`

export const FollowButtonWrapper = styled.div`
  text-transform: capitalize;
  font-weight: lighter;
  font-size: 13px;
  color: white;
`;


export const UserCardWrapper = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  width: 300px;
  border-radius: 10px;
  border: 2px solid #3b5998;
  overflow: hidden;
    position: relative;
  vertical-align: middle;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  flex-direction: row;
  align-self: center;
  align-items: center;
  width: 100%;
`;

export const UserNameWrapper = styled.div`
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;
  text-align: center;

`;
