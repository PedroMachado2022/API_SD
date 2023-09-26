import React from 'react'


import './Aside.css';


const Aside = () => {
  return (
    <>
        <aside>
            <div id="logo">
              <a href="#">
                <img src='./static/logo.png'/>
              </a>
            </div>
            <div id="nav">
              <div className="navbar">
                <h2>Moedas</h2>
                  <ul>
                    <li>
                      <a href='#'>
                      <img src='./static/Doll.png'/>
                      Dolar</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src='./static/Real.png'/>
                      Real</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src='./static/euro.png'/>
                      Euro</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src='./static/Yen.png'/>
                      Yen</a>
                    </li>
                    
                  </ul>
              </div>
              <div className="navbar">
                <h2>Moedas</h2>
                <ul>
                    <li>
                      <a href='#'>
                      <img src='./static/Doll.png'/>
                      Dolar</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src='./static/Real.png'/>
                      Real</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src='./static/euro.png'/>
                      Euro</a>
                    </li>
                    <li>
                      <a href='#'>
                      <img src='./static/Yen.png'/>
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