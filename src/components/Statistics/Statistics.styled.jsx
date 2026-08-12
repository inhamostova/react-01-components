import styled from '@emotion/styled';

export const Section = styled.section`
  margin: 32px auto;
  width: 500px;

  background-color: aliceblue;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0;
  padding: 16px 0;
  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const StatListItem = styled.li`
  flex-basis: 60px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 8px;

  background-color: ${getRandomHexColor};
  border-radius: 5px;
`;

function getRandomHexColor() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
}
