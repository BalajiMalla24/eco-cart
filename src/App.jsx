import { useState } from 'react'
import Cartdetails from './components/Cartdetails'
import Header from './components/Header';
import Home from './components/Home';
import {Routes , Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   
     
      <Routes>
        <Route path='/' element={  <Home/>}/>
        <Route path='/cart' element={<Cartdetails/>}/>

      </Routes>
    </>
  )
}

export default App
