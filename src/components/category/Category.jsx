import React from 'react';
import Question from '../question/Question.jsx';

const Category = (props) => {
  const name = props.name;
  const description = props.description;
  const questions = props.questions;
  let categoryScore = 0;

function handleMarkedChange(item) {
  console.log(item)
  categoryScore += item
  console.log(categoryScore)
}

  const questionsDiv = questions.map((question) => (
    <Question 
    question={question.question} 
    answers={question.answers}
    onMarkedChange={handleMarkedChange}
    />
  ));

  const countCategoryScore = () => {
    questionsDiv.map((qDiv) => {
      console.log(qDiv.marked)
    });
  };

  return (
    <>
      <div className="category">
        <div>{name}</div>
        <div>{description}</div>
        <div>{questionsDiv}</div>
      </div>
      <div>
        <button onClick={countCategoryScore}>Spočítej</button>
      </div>
    </>
  );
};

export default Category;
