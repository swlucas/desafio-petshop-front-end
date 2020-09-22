import React from 'react';
import { useHistory } from 'react-router-dom';
import totalsIcon from '../../assets/icons/ic_totais.svg';
import clientsIcon from '../../assets/icons/ic_clientes.svg';

import { Container, Content, Button } from './styles';

const Link: React.FC = () => {
  const history = useHistory();

  const goTo = (link: string) => {
    history.push(link);
  };

  return (
    <Container>
      <Content>
        <Button active onClick={() => goTo('/')}>
          <div
            style={{
              width: 28,
              height: 28,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              background: `url(${totalsIcon}) center center no-repeat`,
              backgroundSize: 'cover',
              overflow: 'hidden',
              marginRight: 10,
            }}
          >
            {/* <img
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              src={totalsIcon}
              alt="totals"
            /> */}
            $
          </div>
          {/* <span>$</span> */}
          <span>TOTAIS</span>
        </Button>
        <Button onClick={() => goTo('/clients')}>
          <img src={clientsIcon} alt="clients" />
          <span>clientes</span>
        </Button>
      </Content>
    </Container>
  );
};

export default Link;
