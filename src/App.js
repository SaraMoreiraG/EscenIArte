import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Module from './views/Module';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/module/:moduleId" element={<Module />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
  );
}

export default App;
