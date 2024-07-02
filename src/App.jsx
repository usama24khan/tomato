import { useState } from 'react'
import  './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import ExploreMenu from './Components/ExploreMenu/ExploreMenu'
import DisplayList from './Components/DisplayList/DisplayList'
import Footer from './Components/Footer/Footer'
import ShowLogin from './Components/ShowLogin/ShowLogin'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Cards from './Components/Cards/Cards'


function App() {
  const [category,setCategory]=useState("All")
const [showLogin,setShowLogin]=useState(false)
const router = createBrowserRouter([
  {
    path:'/',
    element:
    <>
     <Navbar showLogin={showLogin} menu={true} setShowLogin={setShowLogin}/>
    <Header/>
    <ExploreMenu  category={category} setCategory={setCategory}/>
    <DisplayList category={category} />
    </>
  }
  ,
  {
    path:'cards',
    element:
   
    <> <Navbar menu={true} showLogin={showLogin} setShowLogin={setShowLogin}/>  <Cards/> </>
  }
])
  return (
    <>
    {showLogin?<ShowLogin  setShowLogin={setShowLogin}/>:<>
   
    <RouterProvider router={router}/>
     <Footer/>
    </>}
    
    
    </>
  )
}

export default App
