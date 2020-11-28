import React from 'react';
import Category from '../category/Category.jsx';

const Survey = (props) => {
  const categories = props.mycategory;
  const categoryDiv = categories.map((category) => (
    <div key={category.name} className="category">
      <Category
        name={category.name}
        description={category.description}
        questions={category.questions}
      />
    </div>
  ));
  return (
    <>
      <div>{categoryDiv}</div>
    </>
  );
};

export default Survey;
