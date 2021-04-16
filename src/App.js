import React from "react"
import useRoutes from "./routes";
import Header from "./components/Header/Header";
import "./sass/_index.scss"
const App = () => {
    const routes = useRoutes()

    return (
        <div className="custom-wrapper">
            <Header/>
            <div className="custom-container">
                {routes}
            </div>
        </div>
    )
}

export default App