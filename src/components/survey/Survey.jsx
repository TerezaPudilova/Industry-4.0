import React, { useState } from 'react';
import { useParams, Redirect, useRouteMatch, Link } from 'react-router-dom';
import { Button, Form, Message } from 'semantic-ui-react';
import Category from '../category/Category.jsx';
import CategorySwitcher from '../categorySwitcher/CategorySwitcher.jsx';
import { QuestionnaireButton } from '../../styles/Container';
import { Footer } from '../../homepage/footer.jsx';

const Survey = (props) => {
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [isSurveyValid, setIsSurveyValid] = useState([]);
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
    let index = 0
    props.surveyScore.forEach((category) => {
      const unansweredQuestions = category.filter((question) => {
        return question === 0;
      });
      index++
      if (unansweredQuestions.length !== 0) {
        unansweredCategories.push(index)
      }
    });
    
    
    return unansweredCategories
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
    if (isValid.length === 0) {
      setIsSurveyValid(isValid);
    } else {
      e.preventDefault();
      setIsSurveyValid(isValid);
    }
  };


  const previousUrl = `/dotaznik/${codeNames[categoryIndex - 1]}`;
  const nextUrl = `/dotaznik/${codeNames[categoryIndex + 1]}`;
  const category =
    categories.find((item) => item.codeName === categoryCodeName) ??
    categories[0];

  return (
    <>
    <Form error={!isCategoryValid || isSurveyValid.length !== 0 }>
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


{isSurveyValid.length !== 0 && (
        <Message
          error
          header="Dotazník nelze odeslat"
          content = {"Vyplňte všechny otázky v následujících kategoriích: " + isSurveyValid}
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
    <Footer/>
    </>
  );
};

export default Survey;
