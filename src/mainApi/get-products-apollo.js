import { gql } from "@apollo/client";


const GET_PRODUCTS = gql`
 query MyQuery {
  vereteno_product {
    picture_preview
    id
    picture
    product_type_id
    title
    description
  }
}
`;


export default GET_PRODUCTS;
