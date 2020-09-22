import React from 'react';
import SideBar from '../Sidebar';
import Header from '../Header';
import Links from '../Link';

import { Container, BodyContainer, Body } from './styles';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Menu = ({ children }: Props) => (
  <Container>
    <SideBar />
    <BodyContainer>
      <Header />
      <Body>
        <Links />
        {children}
      </Body>
    </BodyContainer>
  </Container>
);

export default Menu;
