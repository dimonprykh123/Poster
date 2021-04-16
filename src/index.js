import React from "react"
import {render} from "react-dom"
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./store";

const app = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)
render(app, document.getElementById("root"))
