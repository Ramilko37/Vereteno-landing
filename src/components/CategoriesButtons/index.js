import React from 'react';
import styled from 'styled-components';


const CategoryButton = styled.button`
  width: fit-content;
  height: 37px;
  background: #414141;
  border: 1px solid #414141;
  border-radius: 16px;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  color: #FFFFFF;
  margin-right: 19px;
  :last-child {
    margin-right: 0;
  }
`

function CategoriesButton(category) {
    return (
            <CategoryButton onClick={() => console.log('Filter')}>{category.name}</CategoryButton>
    );
}

export default CategoriesButton;
