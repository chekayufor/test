import React, { useState, useEffect } from "react";
import data from "../data.json";

const Context = React.createContext();
const { Provider } = Context;

const ContextProvider = ({ children }) => {
  const [question_list, setQuestion_list] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [condition, setCondition] = useState(false);
  const [checked, setChecked] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    // console.log({ data });
    setQuestion_list(data);
    setCurrentQuestion(data[currentIndex]);
  }, []);


  const handleChange = item => {
    console.log(item)
    setClicked(true);
    setCurrentIndex(currentIndex + 1)
    setChecked(item);
    setAnswer(item);
    setCondition(!condition);
  };

  const checkAnswer = (item) => {
    if (item === true) setScore(score + 1);
  };
  const setIndex = () => {
    if (currentIndex >= question_list.length) {
      setGameOver(true);
      console.log(currentIndex);
    }
    else {
      setCurrentQuestion(question_list[currentIndex]);
    }
  }

  const state = {
    question_list,
    answer,
    condition,
    checked,
    currentQuestion,
    checkAnswer,
    currentIndex,
    score,
    clicked,
    gameOver
  };
  const actions = {
    setScore,
    setAnswer,
    handleChange,
    checkAnswer,
    setIndex,
    setCurrentQuestion
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
  // return <Provider value={ { messages,things,add_message,make_thing} }> {children} </Provider>;
};

export { ContextProvider, Context };
