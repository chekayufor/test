import React, { useContext } from 'react';
import styled from 'styled-components';
import Answer from './Answer';

import { Context } from './ContextProvider';

const Answers = ({ answers }) => {
  const { handleClick, checkAnswer, condition } = useContext(Context);
  console.log({ answers });
  return (
    <Box>
      <ul>
        {answers.map(answer => {
          return (
            <Item
              className={condition ? 'button toggled' : 'button'}
              key={answer.id}
              onClick={() => {
                handleClick(answer);
                if (answer.correct === true) checkAnswer();
              }}
            >
              <Answer {...answer} />
            </Item>
          );
        })}
      </ul>
      {/* <button onClick={() => checkAnswer()}>Submit</button> */}
    </Box>
  );
};
export default Answers;
const Box = styled.div`
  font-size: 1.2rem;
`;

const Item = styled.li``;
