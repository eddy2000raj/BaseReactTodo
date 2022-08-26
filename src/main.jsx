import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import store from "./redux/store";
import { App } from './App'

import './styles/global.css'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
        <App/>
    </Provider>
   </Router>,
)
