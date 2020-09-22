import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  /* border-collapse: collapse; */
  border-radius: 10px;
  text-transform: uppercase;

  tr:nth-child(even) {
    background: ${colors.blueLight};
  }

  tr {
    font-family: 'avenir black';
    color: ${colors.green};
    font-size: 12px;
    border-radius: 10px;
    height: 40px;
    border-top-left-radius: 10px;
  }

  td:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  td:last-child {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }

  td {
    font-family: 'avenir medium';
    color: ${colors.gray};
    text-align: center;
    font-size: 12px;
  }
`;

export const SearchIcon = styled(GoSearch)`
  position: absolute;
  top: 10px;
  margin-left: 10px;
  color: ${colors.gray};
`;
export const ContainerSearch = styled.div`
  position: relative;

  input {
    width: 230px;
    height: 40px;
    padding: 0 30px;
    border-radius: 20px;
    text-transform: uppercase;
    border: 1px solid ${lighten(0.4, colors.gray)};
    font-family: 'avenir medium';
    font-size: 12px;
    color: ${colors.gray};
  }
`;
