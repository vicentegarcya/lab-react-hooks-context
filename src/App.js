import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import { useTheme } from './contexts/ThemeContext/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App bg-${theme} text-${theme === 'dark' ? 'light' : 'dark'}`}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
