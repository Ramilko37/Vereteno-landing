import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import ProductItem from "../ProductItem";
import {gql, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import Footer from "../Footer";





const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    width: 100%;
    justify-self: left;
  }
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
  margin-left: 16px;
  @media (min-width: 768px) {
    font-size: 64px;
    line-height: 90px;
    letter-spacing: 0.02em;
    margin-left: 0;
    margin-bottom: 0;
  }
`

const CategoriesGrid = styled.div`
  margin: 0 auto;
  width: 358px;
  display: grid;
  grid-template-columns: repeat(2,171px);
  grid-template-rows: repeat(2,288px);
  gap: 24px 16px;
  @media (min-width: 768px) {
    margin: 0;
  }
`
const CaregoriesBtnsWrapper = styled.div`
  width: 358px;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`

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

const PremiumProduct = styled.div`
  width: 358px;
  height: 188px;
  border: 1px solid red;
  margin: 0 auto 68px;
  @media (min-width: 768px) {
    margin: 0;
    margin-bottom: 50px;
  }
`

const ProductImg = styled.div`
  width: 358px;
  height: 156px;
  background-image: url(${props => props.img});
  background-size: cover;
  border-radius: 24px;
  justify-content: start;
  display: flex;
  flex-direction: column;
`

const ProductTitle = styled.div`
  font-family: 'Viaoda Libre', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 56px;
  text-align: center;
  letter-spacing: 0.02em;
  font-feature-settings: 'ordn' on;
  color: #FFFFFF;
  text-shadow: 0px 3.52941px 7.05882px rgba(0, 0, 0, 0.15);
  justify-content: center;
  font-feature-settings: 'ordn' on;
  margin-top: 84px;
`

const ProductPrice = styled.span`
  font-family: 'Acherus Feral', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #414141;
  bottom: -60px;
  margin-top: 24px;
  
`

const products = [
    {
        src: 'https://images.unsplash.com/photo-1596751303335-ca42b3ca50c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80',
        title: 'Замок Любви',
        id: 1,
        price: '5999 ₽',
    },
    {
        src: 'https://images.unsplash.com/photo-1596751303335-ca42b3ca50c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80',
        title: 'Отель',
        id: 2,
        price: '5999 ₽',
    },
    {
        src: 'https://images.unsplash.com/photo-1596751303335-ca42b3ca50c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80',
        title: 'Замок Любви',
        id: 3,
        price: '5999 ₽',
    },
    {
        src: 'https://images.unsplash.com/photo-1621466550398-ac8062907657?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
        title: 'Отель',
        id: 4,
        price: '5999 ₽',
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
            name: 'Отель',
        },
        {
            name: 'Замок Любви',
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
    const [listOfProducts, setListOfProducts] = useState(products);
    const [activeProduct, setActiveProduct] = React.useState(
        []
    );


    useEffect(() => {
            setListOfProducts(products)
            console.log('I render')

    }, [data]);


    function handleCategory(e) {

        if (!data) {
            console.log('No data')
        }
        {
            console.log(products)
           setActiveProduct(products.filter((item) => {
               return item.title === e.target.name
               }
           ));
            console.log(activeProduct)
            setListOfProducts(activeProduct)

        }
    }

    function productHandler() {
        window.location.assign(`/product/${products.title}`)
    }





    return (
        <CategoriesContainer>
            <CategoriesTitle>Библиотека</CategoriesTitle>
            <CaregoriesBtnsWrapper style={{ display: "flex", marginBottom: "40px"}}>
            {
                categories.map(category => {
                    return <CategoryButton key={category.name} onClick={() => handleCategory} name={category.name}>{category.name}</CategoryButton>
                })
            }
            </CaregoriesBtnsWrapper>
            <PremiumProduct>
                <ProductImg img={products[0].src}>
                    <ProductTitle>{products[0].title}</ProductTitle>
                    <ProductPrice>{products[0].price}</ProductPrice>
                </ProductImg>
            </PremiumProduct>
            <CategoriesGrid>
                    {listOfProducts.map((product) => {
                        return <ProductItem onClick={productHandler} key={product.id} title={product.title} img={product.src} price={product.price}/>
                    })}
            </CategoriesGrid>

            <Footer/>

        </CategoriesContainer>
    );
}

export default Categories;
