import React, { useState } from 'react';
import { useParams, Redirect, useRouteMatch, Link } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';
import Category from '../category/Category.jsx';
import CategorySwitcher from '../categorySwitcher/CategorySwitcher.jsx';

const Survey = (props) => {
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const categories = props.categories;
  const codeNames = categories.map((category) => category.codeName);
  const { categoryCodeName } = useParams();
  const categoryIndex = codeNames.indexOf(categoryCodeName);

  const isLastCategory = categoryIndex === 6;

  const handleValueChange = (value, questionIndex) => {
    const copySurveyScore = [...props.surveyScore];

    copySurveyScore[categoryIndex] = [...copySurveyScore[categoryIndex]];
    copySurveyScore[categoryIndex][questionIndex] = value;

    props.onChange(copySurveyScore);
  };

  const validate = () => {
    const currentCategoryScore = props.surveyScore[categoryIndex];
    const unansweredQuestions = currentCategoryScore.filter((question) => {
      return question === 0;
    });

    return unansweredQuestions.length === 0;
  };

  if (categoryIndex === -1) {
    return <Redirect to="/dotaznik/MSA" />;
  }

  const onNextHandler = (e) => {
    const isValid = validate();
    if (isValid) {
      setIsCategoryValid(true);
    } else {
      e.preventDefault();
      setIsCategoryValid(false);
    }
  };

  const previousUrl = `/dotaznik/${codeNames[categoryIndex - 1]}`;
  const nextUrl = `/dotaznik/${codeNames[categoryIndex + 1]}`;
  const category =
    categories.find((item) => item.codeName === categoryCodeName) ??
    categories[0];

  return (
    <Form error={!isCategoryValid}>
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
          isCategoryValid={isCategoryValid}
        />
      </div>
      <Link to={previousUrl}>
        <Button disabled={categoryIndex === 0}>Předchozí</Button>
      </Link>
      {isLastCategory ? (
        <Link to="/vysledky">
          <Button onClick={onNextHandler}>Vyhodnotit</Button>
        </Link>
      ) : (
        <Link to={nextUrl}>
          <Button onClick={onNextHandler} disabled={categoryIndex === 6}>
            Další
          </Button>
        </Link>
      )}

      {!isCategoryValid && (
        <Message
          error
          header="Action Forbidden"
          content="Formulář není validní"
        />
      )}
    </Form>
  );
};

export default Survey;
