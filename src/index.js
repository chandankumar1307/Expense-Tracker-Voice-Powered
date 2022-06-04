import React from "react";
import ReacrDom from 'react-dom';
import './index.css'
import { Provider } from "./context/context";
import App from "./App";

ReacrDom.render(
    <Provider>

        <App />
    </Provider>,
    document.getElementById('root'))