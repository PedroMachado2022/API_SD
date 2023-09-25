import React from 'react'

import './Aside.css';


const Aside = () => {
  return (
    <>
        <aside>
            <div id="logo">
              <a href="#">
                <img src="\logo.png" alt="logo" />
              </a>
            </div>
            <div id="nav">
              <div className="navbar">
                <h2>Moedas</h2>
                  <ul>
                    <li>
                      <a href='#'>
                      <img src="\Doll.png"/>
                      Dolar</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\Real.png"/>
                      Real</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\euro.png"/>
                      Euro</a>
                    </li>
                    <li>
                      <a href='#'>
                      <div className='logo-img yen'></div> 
                      Yen</a>
                    </li>
                    
                  </ul>
              </div>
              <div className="navbar">
                <h2>Moedas</h2>
                  <ul>
                    <li>
                      <a href='#'>
                      <img src="\Doll.png"/>
                      Dolar</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\Real.png"/>
                      Real</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\euro.png"/>
                      Euro</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src="\Yen.png"/>
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