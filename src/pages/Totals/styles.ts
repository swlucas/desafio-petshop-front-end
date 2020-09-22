import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;

  margin: 30px;
  height: 84%;
`;

export const ContainerContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60%;
  margin-bottom: 50px;
  /* border-bottom: 2px solid ${lighten(0.3, colors.gray)}; */
`;

export const Title = styled.span`
  font-family: 'din condensed';
  font-size: 25px;
  color: ${colors.gray};
  text-transform: uppercase;
  margin-bottom: -15px;
`;

export const Value = styled.span`
  display: flex;
  align-items: flex-start;
  font-family: 'avenir medium';
  font-size: 70px;
  color: ${colors.green};
  text-transform: uppercase;

  & > span {
    font-size: 35px;
    padding-top: 15px;
  }
`;

export const ContainerGraphic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 60%;
  border-top: 2px solid ${lighten(0.4, colors.gray)};
`;

export const ContainerPie = styled.div`
  width: 200px;
`;

export const ContainerBar = styled.div`
  width: 100%;
`;

export const Graphic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
