import React from 'react'

import './Header.css'

const Container = () => {
  return (
    <>

      <header>
        <div className="user_menu">
        </div>

        <div id="search">
          <form>
            <div id="lupa"></div>

            <input type="text" id="form_box" placeholder='Search...'></input>
            <input type="submit" id="form_button" value='Search'></input>

          </form>
        </div>

      </header>

    </>
  )
}

export default Container