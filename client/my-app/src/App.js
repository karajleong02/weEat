import './App.css';
<<<<<<< HEAD
import React from 'react';
=======
import React, { useState, useEffect } from "react";
import Axios from "axios";
>>>>>>> nateBranch
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Suggestions from './pages/Suggestions';
import CreateAccount from './pages/CreateAccount';


function App() {
<<<<<<< HEAD

=======
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setUserList(response.data)
    })
  }, [])

  const registerUser = () => {
    Axios.post('http://localhost:3001/api/insert', {
      username: username, 
      password: password,
    });

    setUserList([
      ...userList, 
      {username: username, password: password}
    ]);
  };

  const deleteUser = (username) => {
    Axios.delete(`http://localhost:3001/api/delete/${username}`)
  };

  const updatePassword = (username) => {
    Axios.put('http://localhost:3001/api/update', {
      username: username,
      password: newPassword,
    });
    // setNewPassword("")
  }

  const getCuisine = (userList) => {

  }

>>>>>>> nateBranch
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
