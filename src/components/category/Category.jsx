import React from 'react';
import Question from '../question/Question.jsx';
import { useState } from 'react';

const Category = (props) => {
  const name = props.name;
  const description = props.description;
  const questions = props.questions;

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
              onValueChange={(value) => props.onValueChange(value, i)}
              type={props.type}
              name={props.itemName}
              isCategoryValid={props.isCategoryValid}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
