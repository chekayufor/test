import React, { useState, useEffect } from "react";
import data from "../data.json";

const Context = React.createContext();
const { Provider } = Context;

const ContextProvider = ({ children }) => {
  const [question_list, setQuestion_list] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [condition, setCondition] = useState(false);
  const [checked, setChecked] = useState('');

  useEffect(() => {
    // console.log({ data });
    setQuestion_list(data);
    setCurrentQuestion(data[0]);
  }, []);


  const handleChange = item => {
    console.log(item)
    //console.log('e.target.value', e.target.value)
    setChecked(item);
    setAnswer(item);
    setCondition(!condition);
  };

  const checkAnswer = (item) => {
    if (item === true) setScore(score + 1);
  };

  const state = {
    question_list,
    answer,
    condition,
    checked,
    currentQuestion,
    checkAnswer,
    score
  };
  const actions = {
    setScore,
    setAnswer,
    handleChange,
    checkAnswer
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
  // return <Provider value={ { messages,things,add_message,make_thing} }> {children} </Provider>;
};

export { ContextProvider, Context };
