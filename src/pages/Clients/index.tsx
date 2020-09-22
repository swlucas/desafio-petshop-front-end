import React, { useEffect, useState } from 'react';
import ContainerMenu from '../../components/Menu';

import api from '../../services/api';

import { Container, Table, SearchIcon, ContainerSearch } from './styles';

interface Customer {
  id: number;
  name: string;
  document: number;
  birthdate: Date;
  customer_since: Date;
  last_purchase: Date;
}

const Totals: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const { data } = await api.get('/customers');
    console.log(data);
    setCustomers(data);
  };

  return (
    <ContainerMenu>
      <Container>
        <ContainerSearch>
          <SearchIcon />
          <input placeholder="PESQUISAR NOME" />
        </ContainerSearch>
        <div style={{ overflowY: 'auto' }}>
          <Table>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DOCUMENTO</th>
              <th>DATA NASCIMENTO</th>
              <th>CLIENTE DESDE</th>
              <th>ULTIMA COMPRA</th>
            </tr>
            {customers.map(
              ({
                id,
                name,
                document,
                birthdate,
                customer_since,
                last_purchase,
              }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{document}</td>
                  <td>{birthdate}</td>
                  <td>{customer_since}</td>
                  <td>{last_purchase}</td>
                </tr>
              ),
            )}
          </Table>
        </div>
      </Container>
    </ContainerMenu>
  );
};

export default Totals;
