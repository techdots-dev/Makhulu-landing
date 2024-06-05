import React from 'react';
import styled from '@emotion/styled';


const StyledHeaderContainer = styled.div`
  align-items: center;
  background-color: #ffff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 15px;
  padding-top: 10px;
  border-bottom: 1px solid #ccc;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 16px;
  margin-right: 40px;
`;

const StyledNavCenter = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledNavButton = styled.button`
  width: 80px;
  height: 40px;
  background: none;
  border: 1px;
  border-radius: 10px;
  color: #333333;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  padding: 2px;
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.1s;

  &:hover {
    background-color: #F0F0F0;
  }
`;

const StyledSignInButton = styled.button`
  width: 80px;
  height: 40px;
  background: none;
  border: 1px;
  border-radius: 10px;
  color: #333333;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.1s;

  &:hover {
    background-color: #F0F0F0;
  }
`;

const StyledSignUpButton = styled.button`
  background: #000;
  border: 1px;
  border-radius: 10px;
  color: #ffff;
  cursor: pointer;
  font-size: 1rem;
  height: 40px;
  padding: 8px 16px;
  transition:
    background-color 0.3s,
    color 0.3s,
    transform 0.1s;
  width: 120px;

  &:hover {
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Header: React.FC = () => {

  const baseUrl = process.env.REACT_APP_MAKHULU_BASE_URL;

  const navigateToMakhuluApp = () => {
    if (baseUrl) {
      window.location.href = baseUrl;
    } else {
      console.error('REACT_APP_MAKHULU_BASE_URL is not defined');
    }
  }

  return (
    <StyledHeaderContainer>
      <div></div>
      <StyledNavCenter>
        <StyledNavButton>Features</StyledNavButton>
        <StyledNavButton>FAQ</StyledNavButton>
        <StyledNavButton>About</StyledNavButton>
      </StyledNavCenter>
      <StyledNav>
        <StyledSignInButton onClick={navigateToMakhuluApp}>Sign in</StyledSignInButton>
        <StyledSignUpButton onClick={navigateToMakhuluApp}>Get Started</StyledSignUpButton>
      </StyledNav>
    </StyledHeaderContainer>
  );
};
