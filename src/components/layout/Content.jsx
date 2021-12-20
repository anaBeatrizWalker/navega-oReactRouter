import './Content.css'
import React from "react";
import { Switch, Route } from 'react-router-dom'
import About from './../../views/examples/About'
import Home from './../../views/examples/Home'
import Param from './../../views/examples/Param'
import NotFound from './../../views/examples/NotFound'

const Content = props => {

    //Criando as rotas
    <main className="content">
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/param/:id">{/*dois-pontos identifica como uma variavel id*/}
                <Param/>
            </Route>
            <Route exact path="/">{/*procura exatamente pela rota que contém uma barra*/}
                <Home/>
            </Route>
            <Route path="*">{/*pega todas as rotas diferentes das definidas acima*/}
                <NotFound/>
            </Route>
        </Switch>
    </main>
}

export default Content