import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;
`;

export const DataH = styled.th`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
  background-color: #009879;
  color: #ffffff;
`;

export const Row = styled.tr`
  :nth-of-type(even) {
    background-color: #f3f3f3;
  }

  :hover {
    background-color: #f1f1f1;
  }
`;

export const Data = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
`;
