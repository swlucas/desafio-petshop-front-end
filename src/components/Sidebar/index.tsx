import React from 'react';

import logoIcon from '../../assets/icons/ic_logo.svg';
import menuIcon from '../../assets/icons/ic_dashboard.svg';
import signupIcon from '../../assets/icons/ic_cadastro.svg';

import { Container, Content, Button } from './styles';

const sidebar: React.FC = () => (
  <Container>
    <Content>
      <img src={logoIcon} alt="paw" />
      <Button active>
        <img src={menuIcon} alt="menu" />
        <span>Meu Faturamento</span>
      </Button>
      <Button>
        <img src={signupIcon} alt="singup" />
        <span>Cadastro</span>
      </Button>
    </Content>
  </Container>
);

export default sidebar;
