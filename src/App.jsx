import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HeaderUser from './components/HeaderUser'
import { useContext } from 'react'
import { AuthContext } from './contexts/Auth/AuthContext'

function App() {
const auth = useContext(AuthContext)
  return (
    <div className="App">
      <Header/>
      {auth.user && <HeaderUser/>}
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
