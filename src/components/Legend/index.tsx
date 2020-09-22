import React from 'react';

import { Container, Content, Circle, ContainerLabels, Labels } from './styles';

interface Value {
  color: string;
  amount: number;
}

interface Legend {
  total: number;
  medicamentos: Value;
  consultas: Value;
  banhoTosa: Value;
}

const Legend = ({ total, banhoTosa, consultas, medicamentos }: Legend) => {
  const formatNumber = (value: number) =>
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);

  const porcentage = (value: number, valueTotal: number) => {
    const valueInPorcentage = (value / 100 / (valueTotal / 100)) * 100;
    // eslint-disable-next-line radix
    // eslint-disable-next-line no-bitwise
    return valueInPorcentage | 0;
  };

  return (
    <Container>
      <Content>
        <ContainerLabels>
          <Circle color={banhoTosa.color} />
          <Labels>
            <span>Banho & Tosa</span>
            <span>
              {formatNumber(banhoTosa.amount)}(
              {porcentage(banhoTosa.amount, total)}
              %)
            </span>
          </Labels>
        </ContainerLabels>
        <ContainerLabels>
          <Circle color={consultas.color} />
          <Labels>
            <span>Consultas</span>
            <span>
              {formatNumber(consultas.amount)}(
              {porcentage(consultas.amount, total)}
              %)
            </span>
          </Labels>
        </ContainerLabels>
        <ContainerLabels>
          <Circle color={medicamentos.color} />
          <Labels>
            <span>Medicamentos</span>
            <span>
              {formatNumber(medicamentos.amount)}(
              {porcentage(medicamentos.amount, total)}
              %)
            </span>
          </Labels>
        </ContainerLabels>
        <ContainerLabels>
          <Labels>
            <span>Total</span>
            <span>{formatNumber(total)}</span>
          </Labels>
        </ContainerLabels>
      </Content>
    </Container>
  );
};

export default Legend;
