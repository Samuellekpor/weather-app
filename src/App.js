import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import getCitiesFromApi from './redux/cities-actions';
import NavBar from './components/NavBar';
import Home from './components/Home';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state.cities.cities);

  useEffect(()=> {
    dispatch(getCitiesFromApi())
  },[])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home cities = {state}/>} />
      </Routes>
    </Router>
  );
}

export default App;
