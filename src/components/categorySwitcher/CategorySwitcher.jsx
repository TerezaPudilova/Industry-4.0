import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/variables';

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

const CategoryNumber = styled.div`
  background-color: ${(props) =>
    props.isActive ? colors.darkBlue : colors.lightBlue};
  display: inline-block;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const CategoryName = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;
const CategorySwitcher = (props) => {
  const categories = props.categories;

  return (
    <List>
      {categories.map((category, i) => (
        <ListItem key={category.codeName}>
          <Link to={`/dotaznik/${category.codeName}`}>
            <CategoryNumber isActive={i === 2}>{i + 1}.</CategoryNumber>{' '}
            <CategoryName>{category.name}</CategoryName>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default CategorySwitcher;
