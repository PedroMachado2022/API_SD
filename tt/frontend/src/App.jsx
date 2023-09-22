import './App.css'

import Container from '../components/Container'

import Aside from '../components/Aside'

import Main from '../components/Main'

function App() {

  return (
      <div class='container'> 
       
       <div id="menu-ladinho">
          <Aside/>
        </div>
        <div id="menu">
          <Container/>
          <Main/>
        </div>
        
        
      </div>
  )
}

export default App
