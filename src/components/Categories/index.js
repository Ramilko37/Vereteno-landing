import React, {useEffect, useState} from 'react';
import styled from 'styled-components/macro';
import ProductItem from "../ProductItem";
import { useQuery } from "@apollo/client";
import {Link} from "react-router-dom";
import Footer from "../Footer";
import GET_PRODUCTS, {getProducts} from "../../mainApi/get-products-apollo";
import axios from "axios";
import product from "../../views/product";
import {API_URL} from "../../mainApi/constants";
import login from "../Login/Login";





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
  grid-auto-rows: 260px;
  gap: 24px 16px;
  @media (min-width: 768px) and (max-width: 1920px) {
    width: 582px;
    margin: 0;
    grid-template-columns: repeat(3,180px);
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
  display: flex;
  flex-direction: column;
  width: 358px;
  height: 188px;
  border: 1px solid red;
  margin: 0 auto 24px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  @media (min-width: 768px) {
    margin: 0;
  }
`

const PremiumImg = styled.div`
  width: 100%;
  height: 156px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  margin-bottom: 4px;
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
`


// item

const ItemContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    background-size: cover;
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    justify-content: start;
`

const ProductImg = styled.div`
  width: 100%;
  height: 228px;
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 24px;
  justify-content: flex-end;
  position: relative;
  
`

const ItemTitle = styled.h4`
  position: absolute;
  bottom: 0;
  font-family: 'Viaoda Libre', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.02em;
  font-feature-settings: 'ordn' on;
  color: #FFFFFF;
  text-shadow: 0px 3.52941px 7.05882px rgba(0, 0, 0, 0.15);
  justify-content: center;
  font-feature-settings: 'ordn' on;
  margin: 0 auto 16px;
`
const ItemPrice = styled.span`
  width: 100%;
  height: 30px;
  font-family: 'Acherus Feral',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 120%;
  color: #414141;
  margin-top: 4px;
  position: absolute;
  bottom: 0;
`




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

const premiumProduct = {
    title: 'Замок любви',
    picture: 'https://marimirai.s3.eu-central-1.amazonaws.com/mari/img/1.jpg',
    price: 'От 7999'
}


const MyQuery = `{
    vereteno_product {
        description
        id
        picture
        picture_preview
        product_type_id
        title
    }
}`

function Categories() {
    const [listOfProducts, setListOfProducts] = useState([]);


    //get data from hasura
    // React.useEffect(() => {
    //     fetch('http://89.111.136.199:8080/v1/graphql', {
    //         method: "POST",
    //         body: JSON.stringify({ query: MyQuery })
    //     })
    //         .then(res => res.json())
    //         .then(data => setListOfProducts(data.data.vereteno_product))
    // }, []);

    //get data from mary-api
    React.useEffect(() => {
       axios.get(`http://newapi-env.eba-extbp2py.eu-central-1.elasticbeanstalk.com/product_types/all`)
            .then(res => {
                console.log(res)
            })
    }, []);



    //
    // console.log(listOfProducts.map(item => {
    //
    //     console.log(typeof item.id)
    // }))





    return (
        <CategoriesContainer>
            <CategoriesTitle>Библиотека</CategoriesTitle>
            <CaregoriesBtnsWrapper style={{ display: "flex", marginBottom: "40px"}}>
            {
                categories.map(category => {
                    return <CategoryButton key={category.name} name={category.name}>{category.name}</CategoryButton>
                })
            }
            </CaregoriesBtnsWrapper>
            <PremiumProduct>
                <PremiumImg img={premiumProduct.picture}>
                    <ProductTitle>{premiumProduct.title}</ProductTitle>
                </PremiumImg>

                    <ProductPrice>{premiumProduct.price}</ProductPrice>
            </PremiumProduct>
            <CategoriesGrid>

                    {listOfProducts.map((product) => {
                      return (
                          <Link to={`/products/${product.id}`}>
                          <ItemContainer>
                            <ProductImg img={product.picture}>
                                 <ProductTitle>{product.title}</ProductTitle>
                            </ProductImg>
                            <ProductPrice>{product.price}</ProductPrice>
                        </ItemContainer>
                          </Link>
                              )
                    })}
            </CategoriesGrid>

            <Footer/>

        </CategoriesContainer>
    );
}

export default Categories;
