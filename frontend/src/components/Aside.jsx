import React, {useContext, useState} from 'react'

import './Aside.css';
import {DadosContext} from './DadosContext'

import { Link } from 'react-router-dom';

const Aside = () => {
  
  const {setDados} = useContext(DadosContext)
  // voltar dado para moedas
  

  const handleClick = (e) => {
    const ti = e.target.textContent;
    setDados(ti)
}
  
  
  return (
    <>
        <aside>
          
            <div id="logo">
              <a href="/">
                <img src='./static/logo.png'/>
              </a>
            </div>

            <div id="nav">
              <div className="navbar">
                <h2>Moedas</h2>
                  <ul>
                    <li>
                      <div><img src='./static/Doll.png'/></div>
                      <a href='#' onClick={handleClick}>Dólar</a>
                    </li>
                    <li>
                      <div><img src='./static/Real.png'/></div>
                      <a href='#' onClick={handleClick}>Real</a>
                    </li>
                    <li>
                      <div><img src='./static/euro.png'/></div>
                      <a href='#' onClick={handleClick}>Euro</a>
                    </li>
                    <li>
                      <div><img src='./static/Yen.png'/></div>
                      <a href='#' onClick={handleClick}>Iene</a>
                    </li>
                    
                  </ul>
              </div>


                <div className="navbar">
                  <h2>More</h2>
                  <a className=''></a>
                  <ul>
                    <li>
                      <div id=''></div>
                      <a id='more'><Link to="/more">Saiba Mais</Link></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="footer-lado">
                <img src="./static/footer.png"  />
              </div>
        </aside>
        
    </>
  )
}

export default Aside