import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import getCitiesFromApi from './redux/cities-actions';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  const dispatch = useDispatch();
  const effectRan = useRef(false);
  const state = useSelector((state) => state.cities.cities);

  useEffect(() => {
    if (effectRan.current || process.env.NODE_ENV !== 'development') {
      dispatch(getCitiesFromApi());
    }
    effectRan.current = true;
  }, [dispatch]);
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home cities={state} />} />
        <Route path="/:name" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
