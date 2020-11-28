import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  margin: 32px 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  flex: 1;
  padding: 0 8px;
`;

const CategorySwitcher = (props) => {
  const categories = props.categories;

  return (
    <List>
      {categories.map((category, i) => (
        <ListItem key={category.codeName}>
          <Link to={`/dotaznik/${category.codeName}`}>
            {i + 1}. {category.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default CategorySwitcher;
