import React from 'react';
import Question from '../question/Question.jsx';
import { useState } from 'react';
import { QuestionTitle1} from '../../styles/Container';

const Category = (props) => {
  const name = props.name;
  const description = props.description;
  const questions = props.questions;

  return (
    <>
      <QuestionTitle1>{name}</QuestionTitle1>
      <div>{description}</div>
      <div>
        {questions.map((question, i) => (
          <div key={question.question} className="question">
        
            <Question
              questionNumber= {  `${i + 1} / 7`}
              question={question.question}
              answers={question.answers}
              onValueChange={(value) => props.onValueChange(value, i)}
              type={props.type}
              name={props.itemName}
              isCategoryValid={props.isCategoryValid}
              value={props.currentCategoryScore[i]}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
