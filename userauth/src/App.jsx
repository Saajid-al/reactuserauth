import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // Login Page import for route

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
