import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/login";
import TopBar from "./pages/global/TopBar";

function App() {
  return (
    <Router>
      <TopBar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen text-2xl font-bold">
              404 Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
