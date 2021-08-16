import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const Login = () => {
    if (email !== "" && password !== "") {
      history.push("/");
    }
    return null;
  };
  return (
    <div className="login-form" style={{ maxWidth: "500px" }}>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={Login}
      >
        <label for="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="example@domain.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="at least 4 char"
          minLength={4}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
