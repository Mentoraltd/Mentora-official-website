import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PricingComparison from './components/PricingComparison';
  

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pricing-comparison" />} />
        <Route path="/pricing-comparison" element={<PricingComparison />} />
      </Routes>
    </Router>
  );
}

export default App;
