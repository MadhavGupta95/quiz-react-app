import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) navigate("/");
  const [score, setScore] = useState(0)
  const calculateScore = ()=>{
    const {answers, questions} = state
    let score = 0
    answers.forEach((answer, index) => {
        if(answer === questions[index].answer){
            score++
        }
        setScore(score)
    });
  }

  useEffect(()=>{
    calculateScore()
  }, [])
  return (
    <>
      <h1>Result : {score} answers correct</h1>
    </>
  );
};

export default Result;
