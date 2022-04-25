import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar.js'; 
import Home from './components/pages/HomePage/Home';
import Potions from './components/pages/Potions/Potions';
import History from './components/pages/History/history'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/WebDev-Test-1/'exact component={Home}/>
        <Route path='/WebDev-Test-1/potions' component={Potions}/>
        <Route path='/WebDev-Test-1/history' component={History}/>  
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
