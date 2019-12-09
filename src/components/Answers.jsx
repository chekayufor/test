import React, { useContext } from 'react';
import styled from 'styled-components';
import Answer from './Answer';

import { Context } from './ContextProvider';

const Answers = () => {
  const { answer_list, updateAnswer, checkAnswer, condition } = useContext(
    Context
  );
  // console.log(answer_list);
  const { id, correct, text, url } = answer_list;
  return (
    <Box>
      <ul>
        {answer_list.map(answer => {
          return (
            <Item
              className={condition ? 'green' : 'red'}
              key={answer.id}
              onClick={e => {
                updateAnswer(answer);
                e.currentTarget.style.backgroundColor = '#ccc';
                if (correct) checkAnswer();
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
