import { HTMLAttributes, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import colors from '../../styles/colors';

interface ButtonProps {
  active?: boolean;
}

export const Container = styled.div``;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 130px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  font-family: 'avenir heavy';
  font-size: 14px;
  color: ${colors.gray};
  opacity: ${(props: ButtonProps) => (props.active ? 1 : 0.5)};

  background-color: transparent;
  border: none;
  margin-bottom: 30px;

  text-transform: uppercase;

  img {
    margin-right: 10px;
    filter: brightness(
      ${(props: ButtonProps) => (!props.active ? '50%' : '100%')}
    );
  }
`;
