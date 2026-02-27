import { useState } from "react";
import Home from "./home";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation 1: Empty fields
    if (username === "" || password === "") {
      setError("All fields are required");
      return;
    }

    // Validation 2: Check admin credentials
    if (username === "admin" && password === "admin") {
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Only admin string are accept");
    }
  };

  // If logged in → Show Home Page
  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <br />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;