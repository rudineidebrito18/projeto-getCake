import React from 'react'
import './App.css'

import menu from './assets/menu.svg'
import carrinho from './assets/carrinho.svg'

function App() {
  return (
    <>
      <header id="cabecalho">
        <nav id="menu">
          <img src={menu} alt="menu" />
        </nav>
        <div id="logo">
          <h1>GetCake</h1>
          <p>Seu bolo a um clique de distância!</p>
        </div>
        <div id="atendimento">
          <ul>
            <li>Quem Somos</li>
            <li>Lojas</li>
          </ul>
        </div>
        <div id="carrinho">
          <img src={carrinho} alt="carrinho"/>
        </div>
      </header>
    </>
  )
}

export default App
