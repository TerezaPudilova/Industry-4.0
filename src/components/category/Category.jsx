import React from 'react';
import Question from '../question/Question.jsx';

const Category = (props) => {
  const name = props.name;
  const description = props.description;
  const questions = props.questions;
  console.log(name)

  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
      <div>{questions.map((question, i) => (
    <div key={question.question} className="question">
      i={i+1} /7
      <Question
        question={question.question}
        answers={question.answers}
      />
    </div>
  ))}</div>
    </>
  );
};

export default Category;
