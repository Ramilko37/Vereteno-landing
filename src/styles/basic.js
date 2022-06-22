import styled, { createGlobalStyle } from 'styled-components';
import Footer from "../components/Footer";

export const GlobalStyle = createGlobalStyle`
                           html,
                           body {
                               margin: 0;
                               font-family: -apple-system, Acherus Feral, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                               Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                           }
                           
body {
    padding: 0;
  
}

                           @media screen and (min-width: 640px) and (max-width: 1920px){
                              body {
                               width: 80%;
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

                           .swiper-slide-active {
                            background: #FFFFFF;
                            border: 4px solid #CEA687;
                            box-shadow: 0px 0px 35px rgba(7, 11, 36, 0.3);
                            transition: box-shadow 1s;
                            border-radius: 16px;
                           }

                           .swiper-slide {
                            width: 159px;
                            height: 231px;
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
 {props.footer && <Footer />}
</>
)
}

export default BasicLayout;
