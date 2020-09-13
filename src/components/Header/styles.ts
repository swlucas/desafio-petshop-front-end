import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.header`
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  font-family: 'avenir heavy';
  font-size: 12px;

  width: 100%;
  padding: 30px 10px;
  height: 90px;

  color: ${colors.gray};
  border-bottom: 2px solid ${lighten(0.4, colors.gray)};

  span {
    margin-left: 15px;
  }
`;
