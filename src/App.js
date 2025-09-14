import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen flex items-center justify-center bg-black text-gold font-sans">
          <div className="w-full max-w-6xl p-6">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/user/:id" element={<UserDetailsPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
