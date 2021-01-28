import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <input
          value={email}
          type="text"
          placeholder="email"
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          value={password}
          type="text"
          placeholder="password"
          type="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default SignIn;
