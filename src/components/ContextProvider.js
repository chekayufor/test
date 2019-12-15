import React, { useState, useEffect } from "react";
import data from "../data.json";

const Context = React.createContext();
const { Provider } = Context;

const ContextProvider = ({ children }) => {
  const [question_list, setQuestion_list] = useState([]);
  const [answer, setAnswer] = useState({});
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState('');
  const [current, setCurrent] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('#576ec2');
  const [gameOver, setGameOver] = useState(false);


  useEffect(() => {
    setQuestion_list(data);
    // eslint-disable-next-line
  }, []);

  const start = () => {
    setCurrentIndex(0);

    setGameOver(false);
    setScore(0);
    setChecked('');
    setCurrent('');
    setClicked(false);
    setAnswer({})
  }
  const handleChange = item => {
    console.log(item);
    setColor('red')
    setChecked(item);
    setCurrent(item)
    setClicked(true);
    setAnswer(item);

  };

  const checkAnswer = (item) => {
    if (item === true && clicked === false) setScore(score + 1);
  };

  const next = () => {
    console.log('click')
    setCurrentIndex(currentIndex + 1);

    if (currentIndex >= question_list.length - 1) {
      setGameOver(true);
      console.log(currentIndex);
    }
    else {
      console.log(currentIndex);
      setClicked(false);
    }
  }

  const state = {
    question_list,
    answer,
    checked,
    checkAnswer,
    currentIndex,
    score,
    clicked,
    gameOver,
    color,
    current
  };
  const actions = {
    setScore,
    setAnswer,
    handleChange,
    checkAnswer,
    next,
    setClicked,
    start
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
  // return <Provider value={ { messages,things,add_message,make_thing} }> {children} </Provider>;
};

export { ContextProvider, Context };
