import './App.css'

import Header from './components/Header'

import Aside from './components/Aside'

import Main from './components/Main'

function App() {

  return (
      <div class='container'> 
       
       <div id="menu-ladinho">
          <Aside/>
        </div>
        <div id="menu">
          <Header />
          <Main/>
        </div>
        
        
      </div>
  )
}

export default App
