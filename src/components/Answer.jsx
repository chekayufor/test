import React from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answer = ({ id, correct, content, url }) => {
  return (
    <Box>
      <div>{id}</div>
      {content !== '' && <p>{content}</p>}
    </Box>
  );
};
export default Answer;

const Box = styled.div`
  display: flex;
  align-self: center;
  font-size: 1.2rem;
  width: 150px;
  height: 100px;
  background: blue;
  margin-bottom: 2%;
`;
