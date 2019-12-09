import React from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answer = ({ id, correct, text, url }) => {
  return (
    <div>
      {text !== '' && <p>{text}</p>}
      {url !== '' && <img src={url} />}
    </div>
  );
};
export default Answer;

const Box = styled.div`
  display: flex;
  font-size: 1.2rem;
`;
