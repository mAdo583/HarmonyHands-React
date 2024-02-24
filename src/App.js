import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Learning from './Pages/Learning';
import Tutoring from './Pages/Tutoring';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Translation from './Pages/Translation';
import Signup from './Pages/Signup';
import Login from './Pages/Login';


function App() {
 return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/Tutoring" element={<Tutoring />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Translation" element={<Translation />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
 );
}

export default App;