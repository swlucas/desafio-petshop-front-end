import styled from 'styled-components';
import colors from '../../styles/colors';

interface Button {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const Button = styled.button`
  font-family: 'din condensed';
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 80px;
  padding: 5px 15px 0 15px;
  margin: 0 10px;
  height: 35px;
  color: ${colors.white};
  background-color: ${colors.green};
  text-transform: uppercase;
  border: none;
  border-radius: 18px;
  opacity: ${(props: Button) => (props.active ? 1 : 0.5)};
`;
