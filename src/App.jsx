import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/pages/Products';
import Sinup from './components/pages/SignUp';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Old Vesrion  */}
          {/* <Route path='/' exact component={Home} />          */}

          {/* New Version  */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sing-up" element={<Sinup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;