import logo from './logo.svg';
import './App.css';
import { Nav_bar } from './Components/Nav_bar';
import { Fotter } from './Components/Fotter';
import { Home } from './Components/Home';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Updates } from './Components/Updates';
import { More } from './Components/More';

function App() {
  return (
    <>
      <Router>
      <Nav_bar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Updates" element={<Updates />} />
          <Route path="/More" element={<More />} />
        </Routes>
      <Fotter />
      </Router>
    </>
  );
}

export default App;
