import React from "react";

const Question = () => {
  return (
    <>
      <div className="question">
        <h1>Which was the largest carnivour dinosaur</h1>
        <div className="options">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <button>option 1</button>
            <button>option 2</button>
          </div>
          <br />
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <button>option 3</button>
            <button>option 4</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
