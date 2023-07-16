import { ArrowLeft, ArrowRight, Eye } from "phosphor-react";
import React from "react";

const Login = () => {
  return (
    <div className="px-6 py-4">
      <ArrowLeft size={32} color="#D60665" />

      <div className="mt-20">
        <p>Welcome Back</p>
        <div className="mt-16 text-gray-500">
          <div className="mt-5">
            <label>Email</label>
            <input type="email" className="w-full border-b outline-none" />
          </div>
          <div className="relative mt-5">
            <label>Password</label>
            <input type="password" className="w-full border-b outline-none" />
            <Eye size={20} color="gray" className="absolute bottom-1 right-0" />
          </div>
          <p className="mt-1 text-end text-sm">Forgot Password?</p>
        </div>

        <div>
            <h2>Sign In</h2>
            <section>
                <ArrowRight size={32} color="#D60665" />
            </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
