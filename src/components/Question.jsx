import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';
import Answers from './Answers';
import Answer from './Answer';

const Question = () => {
  const { question_list, next, checked, currentIndex, gameOver } = useContext(
    Context
  );

  return (
    question_list.length &&
    !gameOver && (
      <Box>
        <Ul>
          <P>Select you answer:</P>
          {question_list[currentIndex].title}
          <Answers answers={question_list[currentIndex].answers} />

          <Button
            onClick={() => {
              next();
            }}
          >
            NEXT...
          </Button>
          {checked && <Answer />}
        </Ul>
      </Box>
    )
  );
};
export default Question;

const Box = styled.div`
  justify-content: center;
  width: 80%;
  margin: 20px;
  background: white;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-content: center;
  height: auto;
  overflow: hidden;
  @media (min-width: 736px) {
    display: flex;
  }
`;
const P = styled.p`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const Ul = styled.ul`
  justify-content: center;
  display: flex;
  padding-left: 0;
  flex-direction: column;
  width: 100%;
  justify-content: space-around;
  padding-right: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  margin: 2rem 0 2rem 0;
  font-size: 1.2rem;
  color: -webkit-link;
  text-decoration: underline;
  transition: 0.7s all ease-out;

  font-family: 'Luckiest Guy', cursive;
  -webkit-font-smoothing: antialiased;
  @media (min-width: 736px) {
    font-size: 2rem;
  }
`;
