import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';
import Answers from './Answers';

const Question = () => {
  const { question_list, currentQuestion } = useContext(Context);
  console.log(currentQuestion.answers);
  return (
    <Box>
      <Ul>
        <P>Select you answer:</P>
        {question_list.map(({ id, title, content, url, answers }) => {
          return (
            <Li key={id}>
              {title}
              <Answers answers={answers} />
            </Li>
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
  height: 770px;
  overflow: hidden;
  @media (min-width: 600px) {
    display: flex;
  }
`;
const P = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;
const Li = styled.li`
  text-align: center;
  text-transform: uppercase;
  margin: 5rem 0 5rem 0;
`;
const Ul = styled.ul`
  justify-content: center;
  padding-right: 40px;
  padding-bottom: 40px;
`;
