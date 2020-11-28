import React from 'react';
import { Form } from 'semantic-ui-react';
import Category from '../category/Category.jsx';
import CategorySwitcher from '../categorySwitcher/categorySwitcher.jsx';

const Survey = (props) => {
  const categories = props.categories;
  const category =
    categories.find((item) => item.codeName === 'MSA') ?? categories[0];

  return (
    <Form>
      <CategorySwitcher categories={categories}></CategorySwitcher>
      <div className="category">
        <Category
          name={category.name}
          description={category.description}
          questions={category.questions}
        />
      </div>
    </Form>
  );
};

export default Survey;
