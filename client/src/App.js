import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from './LoginPage';
import EmployeeList from "./Components/EmployeeList";
import EditEmployee from "./Components/EditEmployee";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">IMS</header>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/employees" element={<EmployeeList />} />
           <Route path="/edit/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
