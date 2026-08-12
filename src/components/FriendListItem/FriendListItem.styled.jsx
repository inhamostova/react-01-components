import styled from '@emotion/styled';

export const Item = styled.li`
  width: 200px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background-color: lightblue;
  border-radius: 10px;
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;
