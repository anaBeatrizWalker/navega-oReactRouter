import './Menu.css'
import React from "react";
import { Link } from 'react-router-dom'

const Menu = props => {
    <aside className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>{/*internamente gera uma tag a*/}
                </li>
                <li>
                    <Link to="/param/123">Param #01</Link>
                </li>
                <li>
                    <Link to="/param/dois">Param #02</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    </aside>
}

export default Menu