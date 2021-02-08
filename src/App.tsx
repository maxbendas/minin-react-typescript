import React from 'react';
import Navbar from "./components/Navbar";
import TodosPage from "./pages/TodosPage";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={TodosPage} path="/" exact/>
                    <Route component={AboutPage} path="/about"/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
