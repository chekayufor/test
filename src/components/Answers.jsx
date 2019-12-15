import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answers = ({ answers }) => {
  const { handleChange, checkAnswer, clicked, color } = useContext(Context);
  const buttonRef = useRef(null);

  return (
    <Form>
      <Ul>
        {answers.map(answer => {
          return (
            <Button
              // style={{ backgroundColor: color }}
              ref={buttonRef}
              clicked={clicked}
              current={answer}
              checked={answer.correct}
              key={answer.id}
              onClick={() => {
                handleChange(answer);
                checkAnswer(answer.correct);
              }}
            >
              {answer.url !== '' && <Img src={answer.url} />}
              <P>{answer.content}</P>
            </Button>
          );
        })}
      </Ul>
    </Form>
  );
};
export default Answers;

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

const Button = styled.li`
  border: 0;
  display: flex;
  flex-direction: column;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  cursor: pointer;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  align-items: center;
  background-color: ${props => (props.clicked ? '#7291b1' : '#576ec2')};
  border: ${props =>
    props.clicked && props.checked ? '4px solid lightgreen' : ''};
  background-color: ${props =>
    props.clicked && props.checked ? 'lightgreen' : ''};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:active {
    background-color: red;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    transform: translateY(-2%);
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
