import React, { useState, useEffect } from 'react';
import {
  VictoryPie,
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
} from 'victory';

import api from '../../services/api';

import Colors from '../../styles/colors';
import ContainerMenu from '../../components/Menu';
import Filter from '../../components/Filter';
import Links from '../../components/Link';
import Legend from '../../components/Legend';

import {
  Container,
  ContainerContent,
  ContainerInfo,
  Header,
  Title,
  Value,
  ContainerGraphic,
  ContainerPie,
  Graphic,
  ContainerBar,
} from './styles';

interface Transaction {
  id: number;
  amount: number;
  type: string;
  product_id: number;
  product_name: string;
  time: Date;
}

const Totals: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [services, setServices] = useState({
    banhoTosa: { color: '#d063d5', amount: 0 },
    consultas: { color: '#7d59d5', amount: 0 },
    medicamentos: { color: '#3b85fc', amount: 0 },
    total: 0,
  });

  const [cashFlow, setCashFlow] = useState({
    income: 0,
    expense: 0,
    total: 0,
  });

  useEffect(() => {
    getTransaction();
  }, []);

  useEffect(() => {
    handleAmoutService();
    handleCashFlow();
  }, [transactions]);

  const handleCashFlow = () => {
    const income = transactions
      .filter(transaction => transaction.type === 'Receitas')
      .reduce((total, transaction) => (total += transaction?.amount), 0);
    const expense = transactions
      .filter(transaction => transaction.type === 'Despesas')
      .reduce((total, transaction) => (total += transaction?.amount), 0);
    const total = income - expense;

    setCashFlow({
      income,
      expense,
      total,
    });
  };

  const handleAmoutService = () => {
    const total = transactions
      .filter(transaction => transaction.product_name !== 'Folha de pagamento')
      .reduce((total, transaction) => (total += transaction?.amount), 0);

    const banhoTosa = transactions
      .filter(transaction => transaction.product_name === 'Banho & Tosa')
      .reduce((total, transaction) => (total += transaction.amount), 0);

    const consultas = transactions
      .filter(transaction => transaction.product_name === 'Consultas')
      .reduce((total, transaction) => (total += transaction.amount), 0);

    const medicamentos = transactions
      .filter(transaction => transaction.product_name === 'Medicamentos')
      .reduce((total, transaction) => (total += transaction.amount), 0);

    setServices({
      medicamentos: { ...services.medicamentos, amount: medicamentos },
      banhoTosa: { ...services.banhoTosa, amount: banhoTosa },
      consultas: { ...services.consultas, amount: consultas },
      total,
    });
  };

  const formatNumber = (value: number) =>
    Intl.NumberFormat('pt-BR').format(value);

  const getTransaction = async () => {
    const { data } = await api.get('/transactions');

    setTransactions(data);
  };

  return (
    <ContainerMenu>
      <ContainerContent>
        <Filter />
        <ContainerInfo>
          <Header>
            <Title>VALOR TOTAL</Title>
            <Value>
              <span>R$</span>
              {formatNumber(services.total)}
            </Value>
          </Header>
          <ContainerGraphic>
            <Graphic>
              <ContainerPie>
                <VictoryPie
                  data={[
                    { x: 'banho', y: services.banhoTosa.amount },
                    { x: 'consultas', y: services.consultas.amount },
                    { x: 'medicamentos', y: services.medicamentos.amount },
                  ]}
                  colorScale={[
                    services.banhoTosa.color,
                    services.consultas.color,
                    services.medicamentos.color,
                  ]}
                  innerRadius={110}
                  padAngle={2}
                  labelComponent={<g />}
                />
              </ContainerPie>
              <Legend
                total={services.total}
                banhoTosa={services.banhoTosa}
                consultas={services.consultas}
                medicamentos={services.medicamentos}
              />
            </Graphic>
            <Graphic>
              {/* <ContainerBar> */}
              <VictoryChart
                domainPadding={{ x: 100 }}
                width={300}
                height={200}
                padding={{
                  top: 30,
                  bottom: 30,
                  left: 90,
                  right: 10,
                }}
              >
                <VictoryBar
                  cornerRadius={13}
                  barWidth={26}
                  // width={150}
                  style={{
                    data: {
                      // fill: '#c43a31',
                    },
                  }}
                  data={[
                    { x: 'income', y: cashFlow.income },
                    { x: 'expense', y: cashFlow.expense },
                  ]}
                />
                <VictoryAxis dependentAxis tickFormat={t => `R$${t}`} />
              </VictoryChart>
              {/* </ContainerBar> */}
              <Legend
                total={10}
                banhoTosa={{ color: 'black', amount: 10 }}
                consultas={{ color: 'black', amount: 10 }}
                medicamentos={{ color: 'black', amount: 10 }}
              />
            </Graphic>
          </ContainerGraphic>
        </ContainerInfo>
      </ContainerContent>
    </ContainerMenu>
  );
};

export default Totals;
