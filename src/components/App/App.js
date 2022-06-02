import React, {createContext, useEffect, useState} from "react";
import Home from "../Home/Home";
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Catalog from "../../views/catalog";
import BasicLayout from "../../styles/basic";
import Confirmed from "../../views/confirmed";
import ProductCard from "../../views/product";
import OrderSummary from "../../views/orderSummary";
import Login from "../Login/Login";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../../firebase";
import * as MainApi from "../../mainApi/mainApi";
import { CurrentUserContext } from "../../context/currentUserContext";
import NewLogin from "../NewLogin";



export function App() {
    const [loggedIn, setLoggedIn] = useState(
        Boolean(localStorage.getItem("loggedIn")) || false
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

    // const navigate = useNavigate();
    // const location = useLocation();

    // token check
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            MainApi.checkToken(token)
                .then((result) => {
                    if (result) {
                        setLoggedIn(true);
                        // navigate(location.pathname);
                    }
                })
                .catch((err) => {
                    localStorage.removeItem("token");
                    // navigate("/signin");
                    console.log(`${err}`);
                });
        }
    }, []);

    // РЕГИСТРАЦИЯ
    function login(email, password) {
        setPreloaderAuth(true);
        MainApi.authorize(email, password)
            .then((result) => {
                if (result.token) {
                    localStorage.setItem("token", result.token);
                    localStorage.setItem("loggedIn", true);
                    setLoggedIn(true);
                    // navigate("/movies");
                }
            })
            .catch((err) => {
                setErrorSignIn(true);
                console.log(err);
            })
            .finally(() => {
                setTimeout(() => {
                    setPreloaderAuth(false);
                }, 300);
            });
    }

    // ЛОГИН
    function register(name, email, password) {
        setPreloaderAuth(true);
        MainApi.register(name, email, password)
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
    useEffect(() => {
        setPreloader(true);
        if (loggedIn) {
            Promise.all([
                MainApi.getUserInfo(),
            ])
                .then(([userInf]) => {
                    setCurrentUser(userInf);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                    setPreloader(false);
                });
        }
    }, [loggedIn, currentUser._id]);







    return (
        <CurrentUserContext.Provider value={currentUser}>
        <BasicLayout>
        <Router>
        <Routes>
                    <Route exact path="/" element={!loggedIn ? <Home/> : <Catalog/>}/>
                    <Route exact path="/confirmed" element={<Confirmed/>}/>
                    <Route exact path="/product" element={<ProductCard/>}/>
                    <Route exact path="/summary" element={<OrderSummary/>}/>
                    <Route exact path="/catalog" element={<Catalog/>}/>

            <Route path='/signin' element={<NewLogin/>}/>
        </Routes>
        </Router>
        </BasicLayout>
        </CurrentUserContext.Provider>
    )
}
