import {gql} from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
    mutation createProduct(
        $id: Number!,
        $name: String!,
        $description: String!,
        $img: String!, 
    ) {
        createProduct(
        $id: Number!,
        $name: String!,
        $description: String!,
        $img: String!,
        ) 
        {
            id
        } 
    }
    
`
