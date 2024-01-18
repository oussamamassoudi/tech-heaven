
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import { Routes, Route } from "react-router-dom"
import { userCurrent } from './redux/userslices'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Profil from './components/Profil'
import Shop from './components/Shop'
import { getproduct } from './redux/productslice'
import Pannier from './components/Pannier'
import { getcommande } from './redux/commandeSlice'
import Profil2 from './components/Profil2'
function App() {
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getproduct());
    dispatch(getcommande())
  , [ping]});

  return (
    <>
 
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/register" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/profil" element={ <Profil/> } />
        <Route path="/shop" element={ <Shop ping={ping} setping={setping}/> } />
        <Route path="/pannier" element={ <Pannier/> } />
        <Route path="/pro" element={ <Profil2 ping={ping} setping={setping}/> } />

      </Routes>
  
    </>
  )
}

export default App
