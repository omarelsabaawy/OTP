import React from 'react'
import Home from './Home'
import EmailComp from './EmailComp';
import PhoneComp from './PhoneComp'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/emailVerification" element={<EmailComp />} />
        <Route path='/phoneVerification' element={<PhoneComp />} />
      </Routes>
    </Router>

  )
}

export default App