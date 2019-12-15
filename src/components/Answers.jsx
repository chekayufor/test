import React, { useContext } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answers = ({ answers }) => {
  const { handleChange, checkAnswer, clicked, current } = useContext(Context);

  return (
    <Form>
      <Ul>
        {answers.map(answer => {
          return (
            <Button
              id={answer.id}
              clicked={clicked}
              current={current}
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
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  margin: 0 auto;
  transition: all 1s;
`;

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  display: flex;

  -webkit-flex-flow: row wrap;
  justify-content: space-around;
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
  background-color: #576ec2;
  background-color: ${props => {
    // console.log({ props });
    return props.clicked && '#7291b1';
  }}
  border: ${props => {
    // console.log(props.id, props.current.id);
    return props.clicked && props.id === props.current.id
      ? '4px solid red'
      : '';
  }}
  border: ${props =>
    props.clicked && props.checked ? '4px solid lightgreen' : ''};
  background-color: ${props =>
    props.clicked && props.checked ? 'lightgreen' : ''};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.7s all ease-out;
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
  width: 120px;
  height: 120px;
  padding: 5px;
  width: 100%;
  @media (min-width: 736px) {
    width: 230px;
    height: 230px;
    object-fit: cover;
  }
`;
const P = styled.p`
  text-align: center;
`;
