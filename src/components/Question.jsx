import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';
import Answers from './Answers';
import Answer from './Answer';

const Question = () => {
  const { question_list } = useContext(Context);
  // const { id, title, content, url, answers } = currentQuestion;
  console.log(question_list);
  return (
    <Box>
      {/* {title}
      <Answers answers={answers} />
      <Answer answers={answers} /> */}
      <Ul>
        <P>Select you answer:</P>
        {question_list.map(({ id, title, content, url, answers }) => {
          return (
            <li>
              {title}
              <Answers answers={answers} />
              <Answer answers={answers} />
            </li>
          );
        })}
      </Ul>
    </Box>
  );
};
export default Question;

const Box = styled.div`
  // margin-left: 10%;
  justify-content: center;
  width: 80%;
  margin: 20px;
  background: white;
  // padding: 1em;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: auto;
  @media (min-width: 600px) {
    display: grid;
  }
`;
const P = styled.p`
  font-weight: bold;
  font-size: 25px;
`;

const Ul = styled.ul``;
