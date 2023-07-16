import { ArrowLeft } from "phosphor-react";
import React from "react";

const Login = () => {
  return (
    <div className="px-6 py-4">
      <ArrowLeft size={32} color="#D60665" />

      <p>Welcome Back</p>

      <div className="space-y-5">
        <div>
          <label>Email:</label>
          <input type="email" className="w-full border-b" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" className="w-full border-b" />
        </div>
      </div>
    </div>
  );
};

export default Login;
