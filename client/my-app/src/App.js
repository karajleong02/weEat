import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Suggestions from './pages/Suggestions';
import CreateAccount from './pages/CreateAccount';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes> 
    </div>
     
  );
}

export default App;
