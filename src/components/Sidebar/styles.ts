import styled from 'styled-components';
import colors from '../../styles/colors';

interface ButtonProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 120px;
  padding: 30px 10px;
  background-color: ${colors.green};

  & > img {
    margin-bottom: 36px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'avenir medium';
  font-size: 12px;
  text-align: center;

  color: ${(props: ButtonProps) =>
    props.active ? colors.white : colors.greenDark};

  width: 80px;
  background-color: transparent;
  border: none;
  margin-bottom: 40px;

  img {
    margin-bottom: 10px;
    filter: brightness(
      ${(props: ButtonProps) => (!props.active ? '50%' : '100%')}
    );
  }
`;
