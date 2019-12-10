import React, { useContext } from 'react';
import Question from './Question';
import Counter from './Counter';
import Answer from './Answer';
import styled from 'styled-components';
import { Context } from './ContextProvider';

const App = () => {
  const {
    gameOver,
    score,
    question_list,
    checked,
    currentQuestion
  } = useContext(Context);
  console.log({ gameOver, currentQuestion });
  return !gameOver ? (
    <Box>
      <H1>
        <Span>p</Span>
        <Span>l</Span>
        <Span>a</Span>
        <Span>y</Span>
        <br />
        <Span>&</Span>
        <br />
        <Span>d</Span>
        <Span>e</Span>
        <Span>v</Span>
        <Span>e</Span>
        <Span>l</Span>
        <Span>o</Span>
        <Span>p</Span>
      </H1>
      <Counter />
      <Question />
      {checked && currentQuestion ? <Answer /> : ''}
    </Box>
  ) : (
    <Box1>{`your Evaluation = ${(score / question_list.length) * 100} %`}</Box1>
  );
};
export default App;

const Box = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(90deg, skyblue 0%, steelblue 100%);
  overflow: hidden;
  font-family: 'Luckiest Guy', cursive;
  -webkit-font-smoothing: antialiased;
`;
const H1 = styled.h1`
  font-family: Lobster;
  font-size: 1rem;
  height: auto;
  text-align: center;
  font-family: 'Luckiest Guy', cursive;
  -webkit-font-smoothing: antialiased;
`;

const Span = styled.span`
  position: relative;
  top: 20px;
`;
const Box1 = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(90deg, skyblue 0%, steelblue 100%);
  overflow: hidden;
  font-family: 'Luckiest Guy', cursive;
  -webkit-font-smoothing: antialiased;
`;
