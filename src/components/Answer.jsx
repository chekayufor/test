import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answer = ({ answers }) => {
  const { checked } = useContext(Context);
  const test = answers.filter(answer => answer.id === checked);
  console.log({ test });
  return !test.correct ? (
    <Box>Your answer is not correct</Box>
  ) : (
    <Box>Your answer is correct</Box>
  );
};
export default Answer;

const Box = styled.div`
  display: flex;
  hight: 150px;
  weight: 270px;
  background-color: blue;
  margin-bottom: 2%;
`;
