import React from 'react';
import { Routes as Pages, Route } from "react-router-dom";

import Login from './pages/Login';

export default function Routes() {
  return (
    <Pages>
      <Route path="/" element={<Login />} />
    </Pages >
  );
}
