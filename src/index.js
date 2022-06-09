import React from "react";
import ReacrDom from 'react-dom';
import './index.css'
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'

ReacrDom.render(
    <BrowserRouter>
        <SpeechProvider appId="d7597685-66ea-4c23-9392-c81edd506f88" language="en-US">
            <Provider>
                <App />
            </Provider>
        </SpeechProvider>
    </BrowserRouter>,
    document.getElementById('root'))