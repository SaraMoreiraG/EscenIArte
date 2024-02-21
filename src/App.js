import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Module from "./views/Module";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/module/:moduleId"
          element={
            <PrivateRoute>
              <Module />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
