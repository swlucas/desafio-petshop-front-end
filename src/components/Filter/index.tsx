import React from 'react';

import { Container, Button } from './styles';

const Filter: React.FC = () => (
  <Container>
    <Button active>Hoje</Button>
    <Button>Última Semana</Button>
    <Button>Último Mês</Button>
    <Button>Outro Período</Button>
  </Container>
);

export default Filter;
