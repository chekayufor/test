import React, { useState, useEffect } from "react";
import data from "../data.json";

const Context = React.createContext();
const { Provider } = Context;

const ContextProvider = ({ children }) => {
  const [question_list, setQuestion_list] = useState([]);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    // console.log({ data });
    setQuestion_list(data);
  }, []);

  const handleClick = item => {
    setAnswer(item);
    console.log(item);
    setCondition(!condition);
  };
  const checkAnswer = () => {
    setScore(score + 1);
  };

  const state = {
    question_list,
    answer,
    condition
  };
  const actions = {
    setScore,
    setAnswer,
    handleClick,
    checkAnswer
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
  // return <Provider value={ { messages,things,add_message,make_thing} }> {children} </Provider>;
};

export { ContextProvider, Context };
