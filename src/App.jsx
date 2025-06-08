// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav style={{ background: '#666', textAlign: 'center' }}>
        <Link to="/" style={{ margin: '0 1rem' }}>ホーム</Link>
        <Link to="/about" style={{ margin: '0 1rem' }}>このアプリについて</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
