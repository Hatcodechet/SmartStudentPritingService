// LoginSignup.js
import React, { useState } from "react";
import "./LoginSignup.css";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-signup">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form>
        {!isLogin && <input type="text" placeholder="Name" />}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Sign up"
          : "Already have an account? Login"}
      </p>
    </div>
  );
}

export default LoginSignup;
