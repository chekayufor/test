import React, { useState, useEffect } from "react";
import data from "../data.json";

const Context = React.createContext();
const { Provider } = Context;

const ContextProvider = ({ children }) => {
  const [question_list, setQuestion_list] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('#576ec2');
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    setQuestion_list(data);
    setCurrentQuestion(data[currentIndex]);
    // eslint-disable-next-line
  }, []);


  const handleChange = item => {
    console.log(item);
    setColor('red')
    setClicked(true);
    setChecked(item);
    setAnswer(item);
    setCurrentIndex(currentIndex + 1);

  };

  const checkAnswer = (item) => {
    if (item === true && clicked === false) setScore(score + 1);
  };
  const next = () => {
    console.log('click')

    if (currentIndex >= question_list.length) {
      setGameOver(true);
      console.log(currentIndex);
    }
    else {
      console.log(currentIndex);
      setCurrentQuestion(question_list[currentIndex]);
      setClicked(false);
    }
  }

  const state = {
    question_list,
    answer,
    checked,
    currentQuestion,
    checkAnswer,
    currentIndex,
    score,
    clicked,
    gameOver,
    color
  };
  const actions = {
    setScore,
    setAnswer,
    handleChange,
    checkAnswer,
    next,
    setCurrentQuestion,
    setClicked
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
  // return <Provider value={ { messages,things,add_message,make_thing} }> {children} </Provider>;
};

export { ContextProvider, Context };
