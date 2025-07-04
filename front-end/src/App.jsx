import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'

// Routes
import Homepage from './pages/Homepage/Homepage'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
      </Routes>
    </>
  )
}

export default App
