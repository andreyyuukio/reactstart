import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from 'history'


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
//import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory()

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
