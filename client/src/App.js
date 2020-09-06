import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import current from './components/weather/current';
import SignIn from './components/User/SignIn';
import Registration from './components/User/Registration';

function App() {
  return (
    <Router>
      <Route path="/" exact component= {current} />
      <Route path="/SignIn" component = {SignIn} />
      <Route path="/Registration" component = {Registration} />
    </Router>
  );
}

export default App;
