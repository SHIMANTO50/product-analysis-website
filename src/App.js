
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MyLineChart from './components/MyLineChart/MyLineChart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<MyLineChart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
