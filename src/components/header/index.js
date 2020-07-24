import React from 'react'
import './index.css'

import menu from '../../assets/menu.svg'
import carrinho from '../../assets/carrinho.svg'

export default () => {
    return (
    <>
        <header className="cabecalho">
            <div className="menu-toggle">
                <a href="#menu">
                    <img src={menu} alt="menu" />
                </a>
            </div>
            <div className="logo">
                <a href="#home">
                    <div>
                        <h1>GetCake</h1>
                        <p>Seu bolo a um clique de distância!</p>
                    </div>
                </a>
            </div>
            <div className="menu-cabecalho">
                <ul>
                    <li>
                        <a href="#quem-Somos">Quem Somos</a>
                    </li>
                    <li>
                        <a href="#lojas">Lojas</a>
                    </li>
                </ul>
            </div>
            <div className="carrinho">
                <a href="#carrinho">
                    <img src={carrinho} alt="carrinho" />
                </a>
            </div>
        </header>
    </>
    )
}