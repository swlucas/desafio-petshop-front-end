import styled from 'styled-components';

interface Circle {
  color: string;
}

export const Container = styled.div`
  /* width: 100%; */
`;

export const Content = styled.ul`
  /* min-width: 230px; */
  /* display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column; */
`;

export const Circle = styled.div`
  width: 20px;
  height: 18px;
  border-radius: 10px;
  background-color: ${(props: Circle) => props.color};
  margin-right: 10px;
`;

export const ContainerLabels = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
  height: 30px;
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  text-transform: uppercase;

  & > span:first-child {
    font-family: 'avenir roman';
    color: #4a4a4a;
    font-size: 10px;
  }

  & > span:last-child {
    font-family: 'avenir black';
    color: #4a4a4a;
    font-size: 12px;
  }
`;
