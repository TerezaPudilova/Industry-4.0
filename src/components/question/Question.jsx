import React from 'react';

const Question = (props) => {
  const answers = props.answers;
  const buttons = answers.map((answer) => <button>{answer.text}</button>);
  const question = props.question;
  const numbers = answers.map((answer) => <div>{answer.number}</div>)
  return (
    <>
      <div className="question">
        <div>{question}</div>
        <div>
          <div className="answer">
            {numbers[0]} {buttons[0]}
          </div>
          <div className="answer">
            {numbers[1]} {buttons[1]}
          </div>
          <div className="answer">
            {numbers[2]} {buttons[2]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
