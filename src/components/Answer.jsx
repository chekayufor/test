import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answer = () => {
  const { checked } = useContext(Context);
  return !checked.correct ? (
    <Box>Your answer is not correct</Box>
  ) : (
    <Box>Your answer is correct</Box>
  );
};
export default Answer;

const Box = styled.div`
  margin-bottom: 2%;
  text-align: center;
  font-size: 1.6rem;
  color: black;
  font-weight;
`;
