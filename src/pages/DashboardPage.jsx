import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

function DashboardPage() {
  const { users, addUser, deleteUser } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("search"); 
  const [search, setSearch] = useState("");
  const [newUser, setNewUser] = useState({ name: "", email: "", phone: "" });

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser.name && newUser.email && newUser.phone) {
      addUser(newUser);
      setNewUser({ name: "", email: "", phone: "" });
      setActiveTab("search"); 
    }
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center text-center">
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("search")}
          className={`px-6 py-2 rounded-2xl font-semibold transition ${
            activeTab === "search"
              ? "bg-gold text-black"
              : "bg-gray-800 text-gold hover:bg-gold hover:text-black"
          }`}
        >
          Search Users
        </button>
        <button
          onClick={() => setActiveTab("add")}
          className={`px-6 py-2 rounded-2xl font-semibold transition ${
            activeTab === "add"
              ? "bg-gold text-black"
              : "bg-gray-800 text-gold hover:bg-gold hover:text-black"
          }`}
        >
          Add User
        </button>
      </div>

   
      {activeTab === "search" && (
        <div className="w-full">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-1/2 mb-6 p-3 rounded-lg border border-gold bg-black text-gold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} deleteUser={deleteUser} />
            ))}
          </div>
        </div>
      )}

 
      {activeTab === "add" && (
        <form
          onSubmit={handleAddUser}
          className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-gold mb-4">Add New User</h2>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="w-full mb-3 p-3 rounded-lg border border-gold bg-black text-gold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-full mb-3 p-3 rounded-lg border border-gold bg-black text-gold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="text"
            placeholder="Phone"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            className="w-full mb-3 p-3 rounded-lg border border-gold bg-black text-gold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          
          <button
            type="submit"
            className="w-full mt-2 px-6 py-3 rounded-2xl bg-gold text-black font-semibold hover:bg-yellow-400 transition"
          >
            Add User
          </button>
        </form>
      )}
    </div>
  );
}

export default DashboardPage;
