import React from 'react';
import Category from '../category/Category.jsx';

const Survey = (props) => {
  const categories = props.mycategory;
  const categoryDiv = categories.map((category) => (
      <Category
        name={category.name}
        description={category.description}
        questions={category.questions}
      />
  ));
  return (
    <>
      <div>{categoryDiv}</div>
      <div>
        <button>Spočítej</button>
      </div>
    </>
  );
};

export default Survey;
