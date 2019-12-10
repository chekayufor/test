import React, { useContext } from 'react';
import { Context } from './ContextProvider';
import styled from 'styled-components';

const Counter = () => {
  const { score } = useContext(Context);

  return (
    <HBox>
      <TitleCount>counter: {score}</TitleCount>
    </HBox>
  );
};

export default Counter;

const HBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;
const TitleCount = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  text-align: center;
  color: DarkSlateBlue;
`;
