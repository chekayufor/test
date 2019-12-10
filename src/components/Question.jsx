import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';
import Answers from './Answers';

const Question = () => {
  const { question_list, currentQuestion, setIndex } = useContext(Context);
  console.log(question_list);
  console.log({ currentQuestion });

  return question_list.length == 0 ? null : (
    <Box>
      <Ul>
        <P>Select you answer:</P>
        {currentQuestion.title}
        <Answers answers={currentQuestion.answers} />
        <a
          href="#"
          onClick={() => {
            setIndex();
          }}
          className="next"
        >
          Next &raquo;
        </a>
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
