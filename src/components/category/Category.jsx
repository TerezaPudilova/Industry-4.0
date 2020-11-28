import React from 'react';
import Question from '../question/Question.jsx';
import { useState } from 'react';

const Category = (props) => {
  const name = props.name;
  const description = props.description;
  const questions = props.questions;
  const [categoryScore, setCategoryScore] = useState(0);

  const handleValueChange = (item) => {
    setCategoryScore(categoryScore + item);
    console.log(categoryScore + item);
  };

  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        {questions.map((question, i) => (
          <div key={question.question} className="question">
            i={i + 1} /7
            <Question
              question={question.question}
              answers={question.answers}
              onValueChange={handleValueChange}
              required
              type={props.type}
              name={props.itemName}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
