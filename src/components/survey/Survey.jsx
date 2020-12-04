import React, { useState } from 'react';
import { useParams, Redirect, useRouteMatch, Link } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';
import Category from '../category/Category.jsx';
import CategorySwitcher from '../categorySwitcher/CategorySwitcher.jsx';
import { QuestionnaireButton } from '../../styles/Container';

const Survey = (props) => {
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [isSurveyValid, setIsSurveyValid] = useState(true);
  const categories = props.categories;
  const codeNames = categories.map((category) => category.codeName);
  const { categoryCodeName } = useParams();
  const categoryIndex = codeNames.indexOf(categoryCodeName);

  const currentCategoryScore = props.surveyScore[categoryIndex];

  const isLastCategory = categoryIndex === 6;

  const handleValueChange = (value, questionIndex) => {
    const copySurveyScore = [...props.surveyScore];

    copySurveyScore[categoryIndex] = [...copySurveyScore[categoryIndex]];
    copySurveyScore[categoryIndex][questionIndex] = value;

    props.onChange(copySurveyScore);
  };

  // Validate vrátí TRUE, pokud jsou všechny otázky vyplněné. FALSE pokud je alespoň jedna otázka nevyplněná.
  const validate = () => {
    const unansweredQuestions = currentCategoryScore.filter((question) => {
      return question === 0;
    });
    
    return unansweredQuestions.length === 0;
  };

  const validateSurvey = () => {
    const unansweredCategories = []; 
    props.surveyScore.forEach((category) => {
      const unansweredQuestions = category.filter((question) => {
        return question === 0;
      });
      unansweredCategories.push(unansweredQuestions)
    });
    
    let isValid = false;

    unansweredCategories.every((category) => {
      if (category.length === 0) {
        isValid = true;
      } else {
        return isValid = false;
      }
    })

    return isValid
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

  const onSubmitHandler = (e) => {
    const isValid = validateSurvey();
    if (isValid) {
      setIsSurveyValid(true);
    } else {
      e.preventDefault();
      setIsSurveyValid(false);
    }
  };


  const previousUrl = `/dotaznik/${codeNames[categoryIndex - 1]}`;
  const nextUrl = `/dotaznik/${codeNames[categoryIndex + 1]}`;
  const category =
    categories.find((item) => item.codeName === categoryCodeName) ??
    categories[0];

  return (
    <Form error={!isCategoryValid || !isSurveyValid}>
      <CategorySwitcher
        categories={categories}
        categoryId={Math.max(codeNames.indexOf(categoryCodeName), 0)}
      ></CategorySwitcher>

      <Category
        name={category.name}
        description={category.description}
        currentCategoryScore={currentCategoryScore}
        questions={category.questions}
        onValueChange={handleValueChange}
        isCategoryValid={isCategoryValid}
      />


{!isCategoryValid && (
        <Message
          error
          header="Nelze pokračovat"
          content="Prosím, vyplňte všechny otázky"
        />
      )} 


{!isSurveyValid && (
        <Message
          error
          header="Nelze odeslat dotazník"
          content="Prosím, vyplňte všechny kategorie"
        />
      )} 

      <QuestionnaireButton>
        <Link to={previousUrl}>
          <Button disabled={categoryIndex === 0}>Předchozí</Button>
        </Link>
        {isLastCategory ? (
          <Link to="/registrace">
            <Button onClick={onSubmitHandler}>Vyhodnotit</Button>
          </Link>
        ) : (
          <Link to={nextUrl}>
            <Button onClick={onNextHandler} disabled={categoryIndex === 6}>
              Další
            </Button>
          </Link>
        )}
      </QuestionnaireButton>

    </Form>
  );
};

export default Survey;
