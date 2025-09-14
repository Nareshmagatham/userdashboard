import React from "react";
import { Link } from "react-router-dom";

function UserCard({ user, deleteUser }) {
  return (
    <div className="bg-gold text-black w-72 p-6 rounded-2xl shadow-lg transition hover:scale-105">
      <h3 className="text-xl font-bold mb-2 text-black">{user.name}</h3>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm mb-4">{user.phone}</p>
      
      <div className="flex justify-between">
        <Link
          to={`/user/${user.id}`}
          className="px-4 py-2 bg-black text-gold rounded-lg font-medium hover:bg-gray-800"
        >
          View Details
        </Link>
        <button
          onClick={() => deleteUser(user.id)}
          className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
