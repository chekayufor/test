import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answers = ({ answers }) => {
  const { handleChange, checkAnswer, clicked, currentIndex } = useContext(
    Context
  );
  console.log({ answers });
  console.log({ currentIndex });

  return (
    <Form>
      <Ul>
        {answers.map(answer => {
          return (
            <Li
              //disabled={clicked}
              className={answer.clicked && 'disabled'}
              key={answer.id}
              onClick={() => {
                handleChange(answer);
                checkAnswer(answer.correct);
              }}
            >
              {answer.url !== '' && <Img src={answer.url} />}
              <P>{answer.content}</P>
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
  min-width: 250px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Li = styled.button`
  border: 0;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  cursor: pointer;
  background-color: #576ec2;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  align-items: center;
  &:hover {
    background-color: #a9a2b5;
  }
  &:active {
    transform: translateY(1px);
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  input[type='radio'] {
    margin: 0 10px 0 0;
  }
`;
const Img = styled.img`
  display: flex;
  // border: 1px solid #ddd;
  // border-radius: 4px;
  padding: 5px;
  width: 100%;
  @media (min-width: 736px) {
    width: 300px;
    height: 300px;
    object-fit: cover;
  }
`;
const P = styled.p`
  text-align: center;
`;
