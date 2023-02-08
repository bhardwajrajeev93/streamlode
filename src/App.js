import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Membershippage from './pages/Membershippage';
import Searchhostpage from './pages/Searchhostpage';
import Loginpage from './pages/Loginpage';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route path="/Aboutpage" element={<Aboutpage/>} />
            <Route path="/Membershippage" element={<Membershippage/>} />
            <Route path="/Searchhostpage" element={<Searchhostpage/>} />
            <Route path="/Loginpage" element={<Loginpage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
