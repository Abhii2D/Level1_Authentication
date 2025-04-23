import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './Component/SignIn';
import Signup from './Component/signup';
import Application from './Component/Application';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/application" element={<Application />} />
      </Routes>
    </Router>
  );
}

export default App;
