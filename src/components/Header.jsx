import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="bg-gray-900 text-yellow-400 p-4 flex justify-between items-center shadow-lg border-b border-yellow-500">
      <h1 className="text-2xl font-extrabold tracking-wide">User Dashboard</h1>
      <nav>
        <Link 
          to="/" 
          className="mr-4 px-3 py-1 rounded-lg border border-yellow-500 hover:bg-yellow-500 hover:text-black transition"
        >
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;

