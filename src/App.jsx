import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'; // Import your LandingPage component
import Settings from './pages/Settings';
import LevelSelection from './pages/LevelSelection';
import Level1 from "./pages/Level1";
import Level2 from "./pages/Level2";
import Level3 from "./pages/Level3";
import Level4 from "./pages/Level4";
function App() {
  return (
    <Router> {/* Wrap everything with Router */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/set-sail" element={<LevelSelection />} />
        <Route path="/level1" element={<Level1/>} />
        <Route path="/level2" element={<Level2/>} />
        <Route path="/level3" element={<Level3/>} />
        <Route path="/level4" element={<Level4/>} />
      </Routes>
    </Router>
  );
}

export default App;
