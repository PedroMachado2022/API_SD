import React from 'react'

import './Aside.css';


const Aside = () => {
  return (
    <>
        <aside>
            <div id="logo">
              <a href="#">
                <img src="\src\imgs\logo.png" alt="logo" />
              </a>
            </div>
            <div id="nav">
              <div className="navbar">
                <h2>Moedas</h2>
                  <ul>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Doll.png"/>
                      Dolar</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Real.png"/>
                      Real</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Euro.png"/>
                      Euro</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Yen.png"/>
                      Yen</a>
                    </li>
                    
                  </ul>
              </div>
              <div className="navbar">
                <h2>Moedas</h2>
                  <ul>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Doll.png"/>
                      Dolar</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Real.png"/>
                      Real</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Euro.png"/>
                      Euro</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\src\imgs\Yen.png"/>
                      Yen</a>
                    </li>
                    
                  </ul>
              </div>
            </div>
        </aside>
    </>
  )
}

export default Aside