import Navbar from './Components/Navbar/Navbar'
import './App.css';
import {BrowserRouter, Routes, Route}  from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Contact" element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
