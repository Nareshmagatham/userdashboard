import React, { createContext, useState, useEffect } from "react";
import { fetchUsers } from "../api/userService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (err) {
        console.error("Error fetching users", err);
      } finally {
        setLoading(false);
      }
    };
    loadUsers();
  }, []);

 
  const addUser = (newUser) => {
    setUsers((prev) => [
      ...prev,
      { ...newUser, id: Date.now() } 
    ]);
  };


  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
