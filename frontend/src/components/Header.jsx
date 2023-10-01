import React from 'react'

import './Header.css'

const Container = () => {
  return (
    <>

      <header>

        <div className="user_menu"></div>
        <div className="apis">
          <div className="api_txt">
            <td> API'S </td>
          </div>


          <div className="api_imgs">

            <a href="https://brapi.dev" target="_blank">
              <img id="aa" src="./static/brapi.png" alt="Brapi API" />
            </a>

            <a href="https://docs.awesomeapi.com.br" target="_blank">
              <img id="bb" src="./static/awesomeAPI.png" alt="awesomeAPI" />
            </a>

          </div>

        </div>



      </header>

    </>
  )
}

export default Container