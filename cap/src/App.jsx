import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MapView from './features/map/MapView.jsx';
import ModelPage from './pages/ModelPage.jsx';
import './features/map/map.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MapView />} />
      <Route path="/viewer/:id" element={<ModelPage />} />
    </Routes>
  );
}
