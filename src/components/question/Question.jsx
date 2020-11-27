import React, {useState} from 'react';

const Question = (props) => {
const [marked,setMarked] = useState(null);

const question = props.question;
const answers = props.answers;

function handleChange (marked) {
  props.onMarkedChange(marked)
}

const answersDiv = answers.map((answer) => <div className="answer">
  <div>{answer.number}</div>
  <div>{answer.text}</div>
  <button onClick={() => 
    {
      setMarked(answer.number);
      handleChange(answer.number);
      console.log("ahoj")
    }}>Vybrat</button>
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
