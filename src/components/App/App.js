import React, {createContext} from "react";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Catalog from "../../views/catalog";
import BasicLayout from "../../styles/basic";
import Confirmed from "../../views/confirmed";
import ProductCard from "../../views/product";
import OrderSummary from "../../views/orderSummary";



export function App() {



    const loggedIn = true;

    return (
        <BasicLayout>
        <Router>
        <Routes>
                    <Route exact path="/" element={loggedIn ? <Home/> : <Catalog/>}/>
                    <Route exact path="/confirmed" element={<Confirmed/>}/>
                    <Route exact path="/product" element={<ProductCard/>}/>
                    <Route exact path="/summary" element={<OrderSummary/>}/>
        </Routes>
        </Router>
        </BasicLayout>
    )
}
