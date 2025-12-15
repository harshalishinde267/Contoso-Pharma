import './style.css';
import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Career from './routes/Career';
import Dashboard from './routes/Dashboard';
import Product from './routes/Product';
import News from './routes/News';
import Research from './routes/Research';
import MedicineMain from './routes/MedicineMain'
import Distribution from './routes/Distribution';
import ClinicalTrial from './routes/ClinicalTrial';
import AdminClinicalTrial from './routes/AdminClinicalTrial';
import ClinicalLogin from './routes/ClinicalLogin';
import { ProvideAuth } from './components/AuthContext';
import ForgetPassword from './components/ForgetPassword';

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/career' element={<Career />}></Route>
          <Route path='/login' element={<ClinicalLogin />}></Route>
          <Route path='/research' element={<Research />}></Route>
          <Route path='/drug' element={<MedicineMain />}></Route>
          <Route path='/distribution' element={<Distribution />}></Route>
          <Route path='/clinical' element={<ClinicalTrial />}></Route>
          <Route path='/adminTrial' element={<AdminClinicalTrial />}></Route>
          <Route path='*' element={<div>Page not found</div>}></Route>
          <Route element={<div className="App"><ForgetPassword /></div>}></Route>
        </Routes>
      </div >
    </ProvideAuth>
  );
}

export default App;
