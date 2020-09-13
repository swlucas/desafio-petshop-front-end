import React from 'react';
import ContainerMenu from '../../components/Menu';
import Filter from '../../components/Filter';
import Links from '../../components/Link';

import { Container } from './styles';

const Totals: React.FC = () => (
  <ContainerMenu>
    <Container>
      <Links />
      <Filter />
      <div>
        <span>VALOR TOTAL</span>
      </div>
    </Container>
  </ContainerMenu>
);

export default Totals;
