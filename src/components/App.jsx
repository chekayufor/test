import React, { useContext } from 'react';
import Question from './Question';
import Counter from './Counter';
import styled from 'styled-components';
import { Context } from './ContextProvider';

const App = () => {
  const { gameOver, score, question_list, currentQuestion } = useContext(
    Context
  );
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
      {/* {checked && currentQuestion ? <Answer /> : ''} */}
    </Box>
  ) : (
    <Box1>
      <H2>{`your Evaluation = ${(score / question_list.length) * 100} %`}</H2>
    </Box1>
  );
};
export default App;

const Box = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  padding-left: 0px;
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
  text-align: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(90deg, skyblue 0%, steelblue 100%);
  font-size: 2rem;
  font-weight: 600;
  color: aliceblue;
  font-family: 'Luckiest Guy', cursive;
  -webkit-font-smoothing: antialiased;
  @media (min-width: 736px) {
    font-size: 3rem;
  }
`;
const H2 = styled.h2`
  font-family: 'Avant Garde', Avantgarde, 'Century Gothic', CenturyGothic,
    'AppleGothic', sans-serif;
  font-size: 32px;
  padding: 80px 50px;
  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  color: #131313;
  background-color: #e7e5e4;
  letter-spacing: 0.15em;
  text-shadow: 1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474,
    -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d,
    -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89,
    -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897,
    -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6,
    -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5,
    -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4,
    -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1,
    -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc,
    -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2;
  @media (min-width: 736px) {
    font-size: 52px;
  }
`;
