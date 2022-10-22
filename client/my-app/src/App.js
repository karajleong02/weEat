import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import CreateAccount from './pages/CreateAccount';

class App extends React.Component {

  render() {
    return (
      <div id="app">
        <Navbar></Navbar>
        <CreateAccount></CreateAccount>
      </div>
      
    );
  }
}

export default App;
