import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductItem from "../ProductItem";
import CategoriesButtons from "../CategoriesButtons";
import {gql, useQuery} from "@apollo/client";




const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
`

const CategoriesTitle = styled.h2`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  margin-top: 40px;
  margin-bottom: 24px;
  font-feature-settings: 'ordn' on;
  color: #414141;
  font-family: "ViaodaLibre", serif;
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 32px 16px;
`

const products = [
    {
        src: 'https://images.unsplash.com/photo-1596751303335-ca42b3ca50c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80',
        title: 'Замок Любви',
        id: 1,
        price: '5999 ₽',
    },
    {
        src: 'https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
        title: 'Отель',
        price: '5999 ₽',
    },
    {
        src: 'https://images.unsplash.com/photo-1594335034276-470bb3d7ceac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
        title: 'Пути Любви',
        id: 2,
        price: '2999 ₽',
    },
    ]

    //
    // const productsFromApi = axios({
    //     method: 'get',
    //     url: 'https://mariapi-env.eba-mrqymv5q.eu-central-1.elasticbeanstalk.com/api/v2/tail/',
    //     withCredentials: false,
    // })
    //     .then(res => {
    //         return res;
    //     })
    //     .catch(err => console.log('Error'))



    const categories = [
        {
            name: 'Премиум',
        },
        {
            name: 'Бесплатные',
        },
        {
            name: 'Подкасты',
        },
    ]


const GET_GATEGORY = gql`
  query MyQuery {
  product {
    description
    id
    img
    is_free
    name
  }
}
`;

function Categories() {

    const {error, loading, data} = useQuery(GET_GATEGORY)
    const [listOfProducts, setListOfProducts] = useState([]);


    useEffect(() => {
        if (data) {
            setListOfProducts(data.product)
        }
    }, [data]);



    console.log(data)

    return (
        <CategoriesContainer>
            <CategoriesTitle>Библиотека</CategoriesTitle>
            <div style={{ display: "flex", marginBottom: "40px"}}>
            {
                categories.map(category => {
                    return <CategoriesButtons key={category.name} name={category.name}/>
                })
            }
            </div>
            <CategoriesGrid>
                    {listOfProducts.map((product) => {
                        return <ProductItem key={product.id} title={product.name} img={product.img} price={product.name}/>


                    })}
            </CategoriesGrid>
        </CategoriesContainer>
    );
}

export default Categories;
