import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
                           html,
                           body {
                               margin: 0;
                               font-family: -apple-system, Acherus Feral, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                               Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

                           }


                           @font-face {
                            font-family: "Acherus Feral", serif;
                            src: local('Acherus Feral'), url("../fonts/AcherusFeral-Light.otf");
                           }
                           
body {
    padding: 0 1rem;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}


h1,h2,h3,h4,h5,h6,body {
    font-family: 'Acherus Feral', serif;
}
`

const BasicLayout = ({ children }) => {
return (
<>
 <GlobalStyle />
               {children}
</>
)
}

export default BasicLayout;
