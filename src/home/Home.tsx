import React from 'react';
import styled from '@emotion/styled';

import { Header } from './components';

const StyledPageContainer = styled.div`
  background: linear-gradient(to bottom, #f0f4f8, #d9e2ec);
  display: flex;
  flex-direction: column;
  font-family: 'Arial, sans-serif';
  height: 100vh;
  overflow-y: auto;
  width: 100%;
`;

const StyledLandingContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #ffffff;
  margin: 40px auto;
  max-width: 1300px;
  flex: 1;
`;

const StyledWelcomeTitle = styled.h1`
  font-size: 3rem;
  color: #333333;
  margin-bottom: 24px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const StyledSubtitle = styled.h2`
  font-size: 2rem;
  color: #666666;
  margin-bottom: 16px;
`;

const StyledDescription = styled.p`
  color: #666666;
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const StyledImage = styled.img`
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: auto;
  margin-top: 20px;
  max-width: 70%;
`;

export const LandingPage: React.FC = () => {
  return (
    <StyledPageContainer>
      <Header />
      <StyledLandingContainer>
        <StyledWelcomeTitle>Welcome to Makhulu</StyledWelcomeTitle>
        <StyledSubtitle>Makhulu | UAE's #1 Real Estate PMS</StyledSubtitle>
        <StyledDescription>
          From property management and beyond, this tool covers everything. A
          comprehensive solution for property brokerage firms to manage any type
          of property. Ideal for handling rentals and sales, all within a single
          software platform.
        </StyledDescription>
        <StyledImage
          src="https://framerusercontent.com/images/oclg8rdRgBnzeLnSJOfettLFjI.webp"
          alt="Makhulu Real Estate PMS"
        />
      </StyledLandingContainer>
    </StyledPageContainer>
  );
};
