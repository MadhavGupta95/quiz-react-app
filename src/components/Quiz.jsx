import React, { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import PrevIcon from "./PrevIcon";
import NextIcon from "./NextIcon";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestions] = useState(0); //storing the index of current question (on which question the user is on)
  const [questions, setQuestions] = useState([
    {
      id: "q1",
      question: "Which period is known as the 'Age of Dinosaurs'?",
      options: ["Jurassic", "Triassic", "Cretaceous", "Mesozoic"],
      answer: 3,
    },
    {
      id: "q2",
      question: "Which of these dinosaurs was a carnivore?",
      options: [
        "Triceratops",
        "Stegosaurus",
        "Tyrannosaurus rex",
        "Brachiosaurus",
      ],
      answer: 2,
    },
    {
      id: "q3",
      question: "What is the largest known land predator dinosaur?",
      options: ["Spinosaurus", "T. rex", "Allosaurus", "Giganotosaurus"],
      answer: 0,
    },
    {
      id: "q4",
      question: "Which dinosaur had three horns on its face?",
      options: ["Velociraptor", "Triceratops", "Iguanodon", "Ankylosaurus"],
      answer: 1,
    },
    {
      id: "q5",
      question: "What did most herbivorous dinosaurs eat?",
      options: ["Meat", "Fish", "Plants", "Insects"],
      answer: 2,
    },
    {
      id: "q6",
      question: "Which dinosaur had a large sail on its back?",
      options: [
        "Spinosaurus",
        "Diplodocus",
        "Carnotaurus",
        "Pachycephalosaurus",
      ],
      answer: 0,
    },
    {
      id: "q7",
      question: "Where have most T. rex fossils been found?",
      options: ["Europe", "North America", "Asia", "Africa"],
      answer: 1,
    },
    {
      id: "q8",
      question:
        "Which of these dinosaurs was a fast runner and had a sickle-shaped claw on its foot?",
      options: ["Stegosaurus", "Velociraptor", "Brachiosaurus", "Triceratops"],
      answer: 1,
    },
    {
      id: "q9",
      question:
        "What event is believed to have led to the extinction of the dinosaurs?",
      options: ["Earthquake", "Ice Age", "Meteor impact", "Volcanic eruption"],
      answer: 2,
    },
    {
      id: "q10",
      question: "Which dinosaur had a club-like tail for defense?",
      options: [
        "Ankylosaurus",
        "Parasaurolophus",
        "Pachycephalosaurus",
        "Therizinosaurus",
      ],
      answer: 0,
    },
  ]);

  //initially the answers are an array of null values with equal to the number of questions in the quiz
  const [answers, setAnswers] = useState(questions.map((q) => null));
  const goNext = ()=>setCurrentQuestions((prev)=>{
    if(prev < questions.length-1){
        return prev+1
    }
    return prev
  })
  const goBack = ()=>setCurrentQuestions((prev)=>{
    if(prev>0){
        return prev-1
    }
    return prev
  })
  console.log(currentQuestion);
  
  return (
    <div className="quiz-container">
      <Header />
      <div className="quiz">
        <div style={{display:'flex', alignItems:'center'}}>
        <PrevIcon goBack={goBack} />
        <Question />
        <NextIcon goNext={goNext} />
        </div>
        <div className="submit">
        <button className="custom-btn btn-3"><span>Submit</span></button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
