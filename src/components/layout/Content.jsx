import './Content.css'
import React from "react";
import { Switch, Route } from 'react-router-dom'
import About from './../../views/examples/About'
import Home from './../../views/examples/Home'

const Content = props => {
    
    //Criando as rotas
    <main className="content">
        <Switch>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/">
                <Home></Home>
            </Route>
        </Switch>
    </main>
}

export default Content