// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import Home from './components/Home';
import Header from './components/Header/Header';
import SSCreation from './components/SSCreation';
import SSExecution from './components/SSExecution';
import TechList from './components/TechList';
import ProfileList from './components/ProfileList';
import TechProfile from './components/TechProfile';

import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <LoginPage onLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/Header" element={isLoggedIn ? <Header /> : <Navigate to="/" />} />
        <Route path="/CreateSearchStrategy" element={isLoggedIn ? <SSCreation /> : <Navigate to="/" />} />
        <Route path="/SSExecution" element={isLoggedIn ? <SSExecution /> : <Navigate to="/" />} />
        <Route path="/TechList" element={isLoggedIn ? <TechList /> : <Navigate to="/" />} />
        <Route path="/ProfileList" element={isLoggedIn ? <ProfileList /> : <Navigate to="/" />} />
        <Route path="/TechProfile" element={isLoggedIn ? <TechProfile /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
