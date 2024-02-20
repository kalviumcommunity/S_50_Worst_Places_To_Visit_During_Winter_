import { Route, Routes, Link } from 'react-router-dom'
import Home from "./Components/Landingpg"
import './App.css'
import Homepg from './Components/Homepg'

function App() {

  return (
    <>

<Routes>
  <Route path='/' element={<Homepg/>}/>
</Routes>

    </>
  )
}

export default App