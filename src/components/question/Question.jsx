import React, {useState} from 'react';

const Question = (props) => {
const [marked,setMarked] = useState(0);

const question = props.question;
const answers = props.answers;

const answersDiv = answers.map((answer) => <div key={answer.text}   className="answer">
  <div>{answer.number}</div>
  <div>{answer.text}</div>
  <button onClick={() => setMarked(answer.number)}>Vybrat</button>
</div>
);

  return (
    <>
      <div className="question">
        <div>{question}</div>
        <div>
          {answersDiv}
        </div>
      </div>
    </>
  );
};

export default Question;
