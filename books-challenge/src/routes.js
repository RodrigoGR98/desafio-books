import React from 'react';
import { Routes as Pages, Route } from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';

export default function Routes() {
  return (
    <Pages>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Pages >
  );
}
