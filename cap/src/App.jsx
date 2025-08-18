import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ModelPage from './pages/ModelPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/viewer/:id" element={<ModelPage />} />
    </Routes>
  );
}
