import { Outlet } from 'react-router-dom';

import Navbar from './assets/components/Navbar/Navbar';



import './App.css'


function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>  
    </>
  )
}

export default App
