import { ArrowLeft, ArrowRight, Eye } from "phosphor-react";
import React from "react";

const Login = () => {
  return (
    <div className="px-6 py-4">
      <ArrowLeft size={32} color="#D60665" />

      <div className="mt-20">
        <p className="text-xl font-semibold text-pink-600">Welcome Back</p>
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

        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-pink-600">Sign In</h2>
          <div className="flex h-12 w-12 items-center border border-pink-300 shadow-md drop-shadow-lg justify-center rounded-full bg-gradient-to-tr from-rose-400 via-pink-500 to-rose-200">
            <ArrowRight size={32} color="white" />
          </div>
        </div>

        <p className="text-center text-gray-500 mt-3">Or continue with</p>

        <div className="flex justify-center items-center gap-4 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" className="bg-white shadow-md drop-shadow-md rounded-full p-2 w-16 h-16 object-contain" />
            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" className="bg-white shadow-md drop-shadow-md rounded-full p-2 w-16 h-16 object-contain" />
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" alt="" className="bg-white shadow-md drop-shadow-md rounded-full p-2 w-16 h-16 object-contain" />
        </div>

        <p className="text-gray-500 mt-10">Don't have an account? <span className="text-[#D60665] underline">Register</span></p>
      </div>
    </div>
  );
};

export default Login;
