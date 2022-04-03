
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MyChart from './components/MyChart/MyChart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<MyChart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
