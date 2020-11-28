import React, { useState } from 'react';
import { useParams, Redirect, useRouteMatch } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import Category from '../category/Category.jsx';
import CategorySwitcher from '../categorySwitcher/categorySwitcher.jsx';

const Survey = (props) => {
  const categories = props.categories;
  const codeNames = categories.map((category) => category.codeName);
  const { categoryCodeName } = useParams();
  console.log(categoryCodeName);

  const handleValueChange = (value, questionIndex) => {
    const copySurveyScore = [...props.surveyScore];

    copySurveyScore[categoryIndex] = [...copySurveyScore[categoryIndex]];
    copySurveyScore[categoryIndex][questionIndex] = value;

    props.onChange(copySurveyScore);
  };

  const categoryIndex = codeNames.indexOf(categoryCodeName);
  if (categoryIndex === -1) {
    return <Redirect to="/dotaznik/MSA" />;
  }

  const category =
    categories.find((item) => item.codeName === categoryCodeName) ??
    categories[0];

  return (
    <Form>
      <CategorySwitcher
        categories={categories}
        categoryId={Math.max(codeNames.indexOf(categoryCodeName), 0)}
      ></CategorySwitcher>
      <div className="category">
        <Category
          name={category.name}
          description={category.description}
          questions={category.questions}
          onValueChange={handleValueChange}
        />
      </div>
    </Form>
  );
};

export default Survey;
