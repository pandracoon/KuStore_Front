import React, { ReactElement } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../../components/Header';
import MemberAddTemplate from '../../../components/Member/MemberAddTemplate';

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
}`;

const Title = styled.h1`
  text-align: center;
`;

const MemberAdd = (): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Title>νμμΆκ°</Title>
      <MemberAddTemplate></MemberAddTemplate>
    </>
  );
};

export default MemberAdd;
