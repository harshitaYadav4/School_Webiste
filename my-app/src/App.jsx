import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/global.css'

export default function App(){
  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  )
}
