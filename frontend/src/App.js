import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login';
import Audit from './pages/Audit';
import Results from './pages/Results';
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setCurrentPage('dashboard');
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setCurrentPage('login');
  };

  const handleStartAudit = () => {
    setCurrentPage('audit');
  };

  const handleAuditComplete = (results) => {
    setCurrentPage('results');
  };

  return (
    <div className="app">
      {currentPage === 'login' && <Login onLogin={handleLogin} />}
      {currentPage === 'dashboard' && user && (
        <Dashboard user={user} onStartAudit={handleStartAudit} onLogout={handleLogout} />
      )}
      {currentPage === 'audit' && user && (
        <Audit user={user} onComplete={handleAuditComplete} onBack={() => setCurrentPage('dashboard')} />
      )}
      {currentPage === 'results' && user && (
        <Results user={user} onBack={() => setCurrentPage('dashboard')} />
      )}
    </div>
  );
}

export default App;
