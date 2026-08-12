import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 32px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 24px;
  background-color: #c9e2c9;
  border-radius: 10px 10px 0 0;

  p {
    color: gray;
    margin: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100px;
  height: auto;
  object-fit: cover;
  background-color: aliceblue;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;

  list-style: none;
  margin: 0;
  padding: 0;

  background-color: lightblue;
  border-radius: 0 0 10px 10px;
`;

export const StatsItem = styled.li`
  flex-basis: calc((100%) / 3);
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding: 16px;
  border: 1px solid #000;
  border-bottom: none;

  :first-of-type {
    border-left: none;
  }

  :last-child {
    border-right: none;
  }
`;

export const StatsSpan = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
