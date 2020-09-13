import React from 'react';
import totalsIcon from '../../assets/icons/ic_totais.svg';
import clientsIcon from '../../assets/icons/ic_clientes.svg';

import { Container, Content, Button } from './styles';

const Link: React.FC = () => (
  <Container>
    <Content>
      <Button active>
        <img src={totalsIcon} alt="totals" />
        <span>$</span>
        <span>TOTAIS</span>
      </Button>
      <Button>
        <img src={clientsIcon} alt="clients" />
        <span>clientes</span>
      </Button>
    </Content>
  </Container>
);

export default Link;
