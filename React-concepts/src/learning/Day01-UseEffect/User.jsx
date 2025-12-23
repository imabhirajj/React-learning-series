import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API call (once)
  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);

        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // FILTER EFFECT (depends on query)
  useEffect(() => {
    const result = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(result);
  }, [query, users]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      <h1>User List</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
