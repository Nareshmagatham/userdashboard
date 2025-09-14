import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { fetchUserById } from "../api/userService";

function UserDetailsPage() {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localUser = users.find((u) => String(u.id) === String(id));
    if (localUser) {
      
      setUser(localUser);
    } else {
      
      const loadUser = async () => {
        try {
          const data = await fetchUserById(id);
          setUser(data);
        } catch (error) {
          console.error("Error loading user:", error);
        }
      };
      loadUser();
    }
  }, [id, users]);

  if (!user) return <p className="text-gold">Loading user details...</p>;

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg text-gold max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <p className="mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
      <p className="mb-2"><span className="font-semibold">Phone:</span> {user.phone}</p>
      {user.website && (
        <p className="mb-2"><span className="font-semibold">Website:</span> {user.website}</p>
      )}
      {user.company && (
        <p className="mb-2"><span className="font-semibold">Company:</span> {user.company.name}</p>
      )}
    </div>
  );
}

export default UserDetailsPage;
