import './Content.css'
import React from "react";
import { Switch, Route } from 'react-router-dom'
import About from './../../views/examples/About'
import Home from './../../views/examples/Home'
import Param from './../../views/examples/Param'

const Content = props => {

    //Criando as rotas
    <main className="content">
        <Switch>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/param/:id">{/*dois-pontos identifica como uma variavel id*/}
                <Param></Param>
            </Route>
            <Route exact path="/">{/*procura exatamente pela rota que contém uma barra*/}
                <Home></Home>
            </Route>
        </Switch>
    </main>
}

export default Content