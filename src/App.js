import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";
import Home from "./views/home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Module from "./views/Module";
import CoursesManagement from "./views/CoursesManagement";
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
        <Route
          path="/management"
          element={
            <AdminRoute>
              <CoursesManagement />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
