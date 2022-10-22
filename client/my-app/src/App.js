import './App.css';
<<<<<<< HEAD
import { useState, useEffect } from "react";
import Axios from "axios";
=======
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Suggestions from './pages/Suggestions';
import CreateAccount from './pages/CreateAccount';
>>>>>>> main


function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userList, setUserList] = useState([]);
  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      setUserList(response.data)
    })
  }, [])

  const submitUser = () => {
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

  return (
<<<<<<< HEAD
    <div className="App">
      <h1>CRUD APPLICATION</h1>

      <div className="form">
        <label>Username</label>
        <input type="text" name="username" onChange={(e) => {
          setUsername(e.target.value)
        }}/>
        <label>Password</label>
        <input type="text" name="password" onChange={(e) => {
          setPassword(e.target.value)
        }}/>

        <button onClick={submitUser}>Register</button>

        {userList.map((val) => {
          return (
            <div className="card">
              <h1>{val.username}</h1>
              <p>{val.password}</p>

              <button onClick={() => deleteUser(val.username)}>Delete</button>
              <input type="text" id="updatePass" onChange={(e) => {
                setNewPassword(e.target.value)
              }}/>
              <button onClick={() => updatePassword(val.username)}>Update</button>
            </div>
          );
        })}
      </div>
=======
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/createAccount" element={<CreateAccount />} />
      </Routes> 
>>>>>>> main
    </div>
     
  );
}

export default App;
