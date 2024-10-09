import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import NotFoundPage from './pages/404'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<RootLayout />}>
            <Route path='/' element={<Home />} />
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </HashRouter>
  )
}

