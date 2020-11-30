import React, { useEffect, useState } from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { shuffle } from '../../shuffle';
import { QuestionTitle2} from '../../styles/Container';

const Question = (props) => {
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    const answers = [...props.answers];
    shuffle(answers);
    setShuffled(answers);
  }, []);

  const question = props.question;
  const questionNumber = props.questionNumber;

  const handleChange = (value) => {
    props.onValueChange(value);
  };

  const isError = !props.isCategoryValid && !value;

  return (
    <>
      <div className="question">
  <QuestionTitle2>{questionNumber} - {question}</QuestionTitle2>
        <div>
          {shuffled.map((answer) => (
            <Form.Field key={answer.text} error={isError}>
              {/*  <div>{answer.number}</div>
              <div>{answer.text}</div>
              <button onClick={() => setMarked(answer.number)}>Vybrat</button> */}

              <Radio
                label={answer.text + ' ' + answer.number}
                value={answer.number}
                name={question}
                checked={props.value === answer.number}
                onClick={() => {
                  handleChange(answer.number);
                }}
              />
            </Form.Field>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
