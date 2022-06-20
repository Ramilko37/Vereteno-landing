import React, {createContext, useEffect, useState} from "react";
import Home from "../Home/Home";
import {BrowserRouter as Router, Route, Routes, Switch, useLocation, useNavigate} from 'react-router-dom'
import Catalog from "../../views/catalog";
import BasicLayout from "../../styles/basic";
import Confirmed from "../../views/confirmed";
import ProductCard from "../../views/product";
import OrderSummary from "../../views/orderSummary";
import Login from "../Login/Login";
import * as MainApi from "../../mainApi/mainApi";
import { CurrentUserContext } from "../../context/currentUserContext";
import NewLogin from "../NewLogin";
import Register from "../Register";
import {ApolloClient, InMemoryCache, ApolloProvider, useQuery} from "@apollo/client";
import GET_PRODUCTS from "../../mainApi/get-products-apollo";
import { onError } from "@apollo/client/link/error";
import GetCourse from "../../views/getcourse";
import Tariff from "../../views/tariff";

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if(graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(`Graphql Error ${message}`)
        });
    }
})

// const link = from([
//     errorLink,
//     new HttpLink({uri: "http://89.111.136.199:8080/v1/graphql"})
// ])

const myClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://89.111.136.199:8080/v1/graphql",
});




export function App() {





    const [loggedIn, setLoggedIn] = useState(
         false
    );
    const [registered, serRegistered] = useState(
        Boolean(localStorage.getItem("token")) || false
    );
    const [currentUser, setCurrentUser] = useState({});
    const [errorSignUp, setErrorSignUp] = useState(false);
    const [errorSignIn, setErrorSignIn] = useState(false);
    const [errorProfile, setErrorProfile] = useState(false);
    const [movies, setMovies] = useState([]);
    const [preloader, setPreloader] = useState(false);
    const [savedMovies, setSavedMovies] = useState([]);
    const [presenceFilms, setPresenceFilms] = useState(false);
    const [foundMovies, setFoundMovies] = useState([]);
    const [preloaderAuth, setPreloaderAuth] = useState(false);

    // let navigate = useNavigate();
    // const location = useLocation();

    // token check
    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         MainApi.checkToken(token)
    //             .then((result) => {
    //                 if (result) {
    //                     setLoggedIn(true);
    //                     // navigate(location.pathname);
    //                 }
    //             })
    //             .catch((err) => {
    //                 localStorage.removeItem("token");
    //                 // navigate("/signin");
    //                 console.log(`${err}`);
    //             });
    //     }
    // }, []);

    // ЛОГИН
    function login(name, password) {
        setPreloaderAuth(true);
        MainApi.authorize(name, password)
            .then((result) => {
                console.log(result)
                    localStorage.setItem("token", toString(result));
                    localStorage.setItem("loggedIn", true);
                    setLoggedIn(true);

                }
            )
            .catch((err) => {
                setErrorSignIn(true);
                console.log('Ощибка');
            })
            .finally(() => {
                setTimeout(() => {
                    setPreloaderAuth(false);
                }, 300);
            });

        // localStorage.getItem('TOKEN', '5555')
        // const token = '5555';
        // localStorage.setItem("loggedIn", token);
                    if (loggedIn) {
                        window.location.assign('/catalog')
                    }
        console.log(loggedIn);

    }

    // РЕГИСТРАЦИЯ
    function registration(name, email, password, USER_ROLE) {
        setPreloaderAuth(true);
         MainApi.register(name, email, password, USER_ROLE)
            .then(() => {
                login(email, password);
             })
             .catch((err) => {
                 if (err) {
                     setErrorSignUp(true);
                     console.log(err);
                 }
             })
             .finally(() => {
                 setTimeout(() => {
                     setPreloaderAuth(false);
                 }, 300);
             });
    }

    // ПОЛУЧИТЬ ИНФОРМАЦИЮ О ПОЛЬЗОВАТЕЛЕ
    // useEffect(() => {
    //     setPreloader(true);
    //     if (loggedIn) {
    //         Promise.all([
    //             MainApi.getUserInfo(),
    //         ])
    //             .then(([userInf]) => {
    //                 setCurrentUser(userInf);
    //             })
    //             .catch((err) => console.log(err))
    //             .finally(() => {
    //                 setPreloader(false);
    //             });
    //     }
    // }, [loggedIn, currentUser._id]);

    console.log(loggedIn)


    return (
        <ApolloProvider client={myClient}>
        <CurrentUserContext.Provider value={currentUser}>
        <BasicLayout>
        <Router>
        <Routes>
                    <Route exact path="/" element={registered ? <NewLogin onLogin={login} onRegister={registration}/> : <Catalog/> }/>
                    <Route exact path="/confirmed" element={<Confirmed/>}/>

                    <Route exact path="/catalog" element={loggedIn ? <Catalog/> : <NewLogin onLogin={login}/>}/>
                    <Route exact path="/products/:id" element={<ProductCard/>}/>

                    <Route exact path="/summary" element={<OrderSummary/>}/>
                     <Route exact path="tariff" element={<Tariff/>}/>


            <Route path='/signin' element={<NewLogin onLogin={login}/>}/>
            <Route path='/signup' element={<Register onRegister={registration}/>}/>
            <Route path='/getcourse' element={<GetCourse/>}/>
        </Routes>
        </Router>
        </BasicLayout>
        </CurrentUserContext.Provider>
        </ApolloProvider>
    )
}
