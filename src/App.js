import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Car from './pages/Car'
import Home from './pages/Home'

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/car' element={<Car />} />
			</Routes>
		</BrowserRouter>
	)
}