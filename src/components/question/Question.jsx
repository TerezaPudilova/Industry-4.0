import React, { useEffect, useState } from 'react';
import { Form, Radio } from 'semantic-ui-react';
import { shuffle } from '../../shuffle';
const Question = (props) => {
  const [value, setValue] = useState();
  const [shuffled, setShuffled] = useState([]);

  useEffect(() => {
    const answers = [...props.answers];
    shuffle(answers);
    setShuffled(answers);
  }, []);

  const question = props.question;

  const handleChange = (e, { value }) => {
    setValue(value);
  };

  return (
    <>
      <div className="question">
        <div>{question}</div>
        <div>
          {shuffled.map((answer) => (
            <Form.Field key={answer.text}>
              {/*  <div>{answer.number}</div>
              <div>{answer.text}</div>
              <button onClick={() => setMarked(answer.number)}>Vybrat</button> */}

              <Radio
                label={answer.text}
                value={answer.number}
                name={question}
                checked={value === answer.number}
                onChange={handleChange}
              />
            </Form.Field>
          ))}
        </div>
      </div>
    </>
  );
};

export default Question;
