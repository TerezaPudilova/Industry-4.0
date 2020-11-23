import React from 'react';
import Question from '../question/Question.jsx';

const Category = (props) => {
  const name = props.name;
  const description = props.description;
  const questions = props.questions;
  console.log(name)

  const questionsDiv = questions.map((question) => (
    <div className="question">
      <Question
        question={question.question}
        answers={question.answers}
      />
    </div>
  ));
  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
      <div>{questionsDiv}</div>
    </>
  );
};

export default Category;
