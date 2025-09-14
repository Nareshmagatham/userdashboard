import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserForm = () => {
  const { addUser } = useContext(UserContext);
  const [form, setForm] = useState({ name: "", email: "", company: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      alert("All fields are required!");
      return;
    }
    addUser({ name: form.name, email: form.email, company: { name: form.company } });
    setForm({ name: "", email: "", company: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 border border-gray-700 shadow-lg rounded-xl p-5 mb-6">
      <h2 className="text-lg font-semibold text-yellow-400 mb-4">➕ Add New User</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="bg-black text-gray-200 border border-gray-600 rounded-lg p-2 focus:border-yellow-500 focus:ring-yellow-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="bg-black text-gray-200 border border-gray-600 rounded-lg p-2 focus:border-yellow-500 focus:ring-yellow-500"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="sm:col-span-2 bg-black text-gray-200 border border-gray-600 rounded-lg p-2 focus:border-yellow-500 focus:ring-yellow-500"
        />
        <input
          type="text"
          name="Website"
          placeholder="abc.com"
          value={form.company}
          onChange={handleChange}
          className="sm:col-span-2 bg-black text-gray-200 border border-gray-600 rounded-lg p-2 focus:border-yellow-500 focus:ring-yellow-500"
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
