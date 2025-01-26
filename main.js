import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js'; 
import { Routes, ReactRouter, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </ReactRouter>
  </StrictMode>
);
