import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Project from './pages/Project'

function App() {
  return (
    <BrowserRouter>
    <nav>
      <Header />
    </nav>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/project' element={<Project />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App