import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import NotFoundPage from './pages/404'
import Resources from './pages/Resources'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<Home />} />
        <Route path='/downloads' element={<Resources />} />
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

