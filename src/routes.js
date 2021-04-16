import React from "react"
import {Switch, Route, Redirect} from "react-router-dom"
import Main from "./pages/Main";
import Post from "./pages/Post";
import Create from "./pages/Create";
import Update from "./pages/Update";

const useRoutes = () => {
    return (
        <Switch>
            <Route path="/main">
                <Main/>
            </Route>
            <Route path="/post/:id">
                <Post/>
            </Route>
            <Route path="/create">
                <Create/>
            </Route>
            <Route path="/update/:id">
                <Update/>
            </Route>
            <Redirect to={{pathname: "/main"}}/>
        </Switch>
    )
}

export default useRoutes