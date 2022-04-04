
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MyChart from './components/MyChart/MyChart';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={<MyChart />}></Route>
        <Route path='/reviews' element={<Review />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
