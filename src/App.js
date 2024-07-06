import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav_bar } from './Components/Nav_bar.jsx';
import { Multiple } from './Components/Multiple.jsx';
import { Props } from './Components/Props.jsx';
import { Home } from './Components/Home.jsx';
import { Fotter } from './Components/Fotter.jsx';
import { Base } from './Components/Base.jsx';

function App() {
  const [value, setValue] = useState(0);

  const incriment = () => {
    setValue(value + 1);
  };

  const decriment = () => {
    setValue(value - 1);
  };

  return (
    <>
    <Router>
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />} />
        <Route path="/props" element={<Props value={value} incriment={incriment} decriment={decriment}/>} />
        <Route path="/multiple" element={<Multiple />} />
      </Routes>
      <Fotter />
    </Router>
    </>
  );
}

export default App;
