import React from 'react'

import './Header.css'

const Container = () => {
  return (
    <>

      <header>

        <div className="user_menu"></div>
        <div className="apis">
       
          <a href="https://brapi.dev" target="_blank">
            <img src="./static/brapi.png" alt="Brapi API" />
          </a>

          <a href="https://docs.awesomeapi.com.br" target="_blank">
            <img src="./static/awesomeAPI.png" alt="awesomeAPI" />
          </a>

        </div>
 <div className="api_imgs">

        
          <td> API'S </td>
        </div>



      </header>

    </>
  )
}

export default Container