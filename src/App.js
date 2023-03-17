import React from 'react';
import { BrowserRouter as Router, Routes,  Route  } from "react-router-dom";
import Footer from './component/Footer';
import Hader from './component/Hader';
import Home from './component/Home';
import Upload from './component/Upload';
import Videos from './component/Videos';
import Login from './component/Login';
import Signup from './component/Signup';

function App() {
  return (
   <Router>
   <Hader/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/videos" element={<Videos/>}/>
      <Route path="/upload" element={<Upload/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
