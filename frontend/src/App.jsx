import './App.css'

import Header from './components/Header'

import Aside from './components/Aside'

import Main from './components/Main'

function App() {

  return (
    <div className='container'>

      <div id="menu-ladinho">
        <Aside />
      </div>
      <div id="menu">
        <Header />
        <Main />
        <footer>
          <div className='git-social'>
            <a href='https://github.com/lopesgustavo01' target='_blank'>
              <img src="./static/git.png" alt="logo git" />
              <p>Luiz Felipe</p>
            </a>
          </div>
          <div className='git-social'>
            <a href='https://github.com/PedroMachado2022' target='_blank'>
              <img src="./static/git.png" alt="logo git" />
              <p>Pedro Machado Araújo</p>
            </a>
          </div>
        </footer>
      </div>



    </div>
  )
}

export default App
