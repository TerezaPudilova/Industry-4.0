import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/variables';
import media from 'css-in-js-media';

const List = styled.ul`
  font-size: 16px;
  margin: 32px 0;
  padding: 0;
  ${media('>desktop')} {
    padding: 0;
    height: 120px;
    display: flex;
  }
  ${media('<=desktop', '>tablet')} {
    width: 640px;
    text-align: -webkit-center;
  }
  ${media('<=tablet', '>phone')} {
    text-align: -webkit-center;
  }
  ${media('<=phone')} {
    text-align: -webkit-center;
  }
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
            <CategoryNumber isActive={i === props.categoryId}>
              {i + 1}.
            </CategoryNumber>
            <CategoryName>{category.name}</CategoryName>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default CategorySwitcher;
