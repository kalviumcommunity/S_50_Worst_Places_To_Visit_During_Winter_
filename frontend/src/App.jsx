import { Route, Routes, Link } from 'react-router-dom'

import './App.css'
import Homepg from './Components/Homepg'
import Makelist from './Components/Makelist'
import Updatee from "./Components/Updatee"
import Signup from './Components/Signup'
// import Home from "./Components/Landingpg"

function App() {

  return (


    <Routes>
      <Route path='/' element={<Homepg />} />
      <Route path='/makelist' element={<Makelist />} />
      <Route path='/update' element={<Updatee />} />
      <Route path='/signup' element={<Signup />} />


    </Routes>


  )
}

export default App