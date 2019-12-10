import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answers = ({ answers }) => {
  const { handleChange, checkAnswer, condition, checked } = useContext(Context);
  console.log({ answers });

  return (
    <Form>
      <Ul>
        {answers.map(answer => {
          return (
            <Li
              key={answer.id}
              onClick={() => {
                handleChange(answer);
                checkAnswer(answer.correct);
              }}
            >
              {answer.content}
            </Li>
          );
        })}
      </Ul>
    </Form>
  );
};
export default Answers;
const Box = styled.div`
  font-size: 1.2rem;
`;
const Form = styled.div`
  max-width: 185px;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  align-items: center;
`;

const Li = styled.li`
border: 0;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  cursor: pointer;
  background-color: #7e57c2;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  &:hover {
    background-color: #673ab7;
  }
  &:active {
    transform: translateY(1px);
  }
&:not(:last-child) {
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  input[type='radio'] {
    margin: 0 10px 0 0;
  }
`;
