import { Route, Routes, Link } from 'react-router-dom'

import './App.css'
import Homepg from './Components/Homepg'
import Makelist from './Components/Makelist'
import Updatee from "./Components/Updatee"
import Signup from './Components/Signup'
import Landingpg from './Components/Landingpg'
import Login from './Components/Login'

function App() {

  return (


    <Routes>


      <Route path='/' element={<Landingpg />} />
      <Route path='/Homepg' element={<Homepg />} />
      <Route path='/makelist' element={<Makelist />} />
      <Route path='/update' element={<Updatee />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/Login' element={<Login/>} />




    </Routes>


  )
}

export default App