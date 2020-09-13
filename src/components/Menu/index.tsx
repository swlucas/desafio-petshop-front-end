import React from 'react';
import SideBar from '../Sidebar';
import Header from '../Header';

import { Container, BodyContainer } from './styles';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Menu = ({ children }: Props) => (
  <Container>
    <SideBar />
    <BodyContainer>
      <Header />
      {children}
    </BodyContainer>
  </Container>
);

export default Menu;
