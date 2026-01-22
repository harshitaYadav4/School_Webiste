import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Academics from '../pages/Academics'
import Admission from '../pages/Admission'
import Faculty from '../pages/Faculty'
import Gallery from '../pages/Gallery'
import Contact from '../pages/Contact'

export default function AppRoutes(){
	return (
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/about" element={<About/>} />
			<Route path="/academics" element={<Academics/>} />
			<Route path="/admission" element={<Admission/>} />
			<Route path="/faculty" element={<Faculty/>} />
			<Route path="/gallery" element={<Gallery/>} />
			<Route path="/contact" element={<Contact/>} />
		</Routes>
	)
}
