
//react-router-dom
import {Route, Routes} from 'react-router-dom'
import { Fragment } from 'react'

//Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact'

//Components
import NavBar from './components/NavBar.jsx'

//Styles

import './App.css'

function App() {

  return (
   <Fragment>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <Home/> }/>
      <Route path='/about' element={ <About/> }/>
      <Route path='/contact' element={ <Contact/> } />
    </Routes>
   </Fragment>
  )
}

export default App




//https://patrappa.wtf/
