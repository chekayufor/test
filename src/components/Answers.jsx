import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { Context } from './ContextProvider';

const Answers = ({ answers }) => {
  const { handleChange, checkAnswer, condition, checked } = useContext(Context);
  console.log({ answers });
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Ul>
        {answers.map(answer => {
          return (
            <Li>
              <Label>
                <input
                  type="radio"
                  value={answer.id}
                  checked={checked === answer.id}
                  onChange={handleChange}
                />
                {answer.content}
              </Label>
            </Li>
          );
        })}
      </Ul>
      {/* <Button type="submit" className="submit-button">
        Make your choice
      </Button> */}
    </Form>
  );
};
export default Answers;
const Box = styled.div`
  font-size: 1.2rem;
`;
const Form = styled.form`
  max-width: 185px;
  background-color: #fff;
  margin: 0 auto;
  padding: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  margin: 0 0 20px;
  padding: 0;
`;

const Li = styled.li`
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

// .title {
//   font-weight: bold;
//   font-size: 18px;
// }

const Button = styled.button`
  border: 0;
  font-family: inherit;
  font-size: inherit;
  outline: none;
  cursor: pointer;
  background-color: #7e57c2;
  color: #fff;
  padding: 10px 30px;
  border-radius: 5px;
  &&:hover {
    background-color: #673ab7;
  }
  &&:active {
    transform: translateY(1px);
  }
`;
