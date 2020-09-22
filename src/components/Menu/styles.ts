import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  margin: 30px;
  overflow-y: auto;
`;
