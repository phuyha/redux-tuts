import React, { useState } from "react";

export default function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSummit(e) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <form onSubmit={handleSummit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your password"
      />
      <button>Login</button>
    </form>
  );
}
