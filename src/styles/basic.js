import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
                           html,
                           body {
                               margin: 0;
                               font-family: -apple-system, Acherus Feral, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                               Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                           }
                           
body {
    padding: 0 1rem;
}  
@media screen and (min-width: 768px) {
  body {
  max-width: 60%;
   margin: 0 auto;
  }
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}


h1,h2,h4,h5,h6,body {
    font-family: 'Acherus Feral', serif;
}
                           
                           h3 {
                            font-family: 'Acherus Feral', serif;
                            font-style: normal;
                            font-weight: 300;
                            font-size: 20px;
                            line-height: 120%;
                            color: #FFFFFF;
                           }
`



const Header = styled.section`
  width: 100%;
  height: 40px;
  border: 1px solid red;
  display: flex;
`




const BasicLayout = ({ children }, props) => {
return (
<>
 <GlobalStyle  />
 {props.header && <Header/>}
               {children}
</>
)
}

export default BasicLayout;
