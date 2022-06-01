import React, {Component, createContext, useState} from "react";
import ReactDOM from 'react-dom';
import {App} from "./components/App/App";







export const Context = createContext(null)




ReactDOM.render(
        <App/>,
    document.getElementById('root')
);
