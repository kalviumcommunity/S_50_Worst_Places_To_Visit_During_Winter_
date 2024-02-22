import { Route, Routes, Link } from 'react-router-dom'
import Home from "./Components/Landingpg"
import './App.css'
import Homepg from './Components/Homepg'
import Makelist from './Components/Makelist'

function App() {

  return (
    <>

<Routes>
  <Route path='/' element={<Homepg/>}/>
  <Route path='/Makelist' element={<Makelist/>}/>

</Routes>

    </>
  )
}

export default App