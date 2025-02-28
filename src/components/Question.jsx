import React from "react";

const Question = ({ data, selectedAnswer, handleAnswer }) => {
  return (
    <>
      <div className="question">
        <h1>{data.question}</h1>
        <div className="options">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {data.options.map((option, index) => {
              if (selectedAnswer === index) {
                return (
                  <button
                    id="option"
                    onClick={() => handleAnswer(index, data.id)}
                    style={{ backgroundColor: "#d79921" }}
                  >
                    {option}
                  </button>
                );
              }
              return (
                <button
                  id="option"
                  onClick={() => handleAnswer(index, data.id)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
