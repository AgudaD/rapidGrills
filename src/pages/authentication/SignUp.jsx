import { useState } from "react";
import logo from "../../assets/logo.svg";

const SignUp = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="px-6 py-4">
      <div className="flex items-center justify-center">
        <img src={logo} alt="" />
        <h1 className="text-3xl font-bold tracking-wide text-[#e91e63]">
          Rapid Grills
        </h1>
      </div>
      <h3 className="text-xl font-semibold">Register</h3>

      <form>
        <div className="flex items-center justify-between gap-5">
          <div className="mt-5 w-1/2">
            <label>First Name</label>
            <input
              type="first name"
              placeholder="Your First Name"
              className="w-full rounded-md border px-3 py-1.5 text-black outline-none"
            />
          </div>
          <div className="mt-5 w-1/2">
            <label>Last Name</label>
            <input
              type="last name"
              placeholder="Your Last Name"
              className="w-full rounded-md border px-3 py-1.5 text-black outline-none"
            />
          </div>
        </div>
        <div className="mt-5">
          <label>Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-md border px-3 py-1.5 text-black outline-none"
          />
        </div>
        <div className="mt-5">
          <label>Password</label>
          <input
            type="password"
            placeholder="Your Password"
            className="w-full rounded-md border px-3 py-1.5 text-black outline-none"
          />
        </div>
        <div className="mt-5">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-md border px-3 py-1.5 text-black outline-none"
          />
        </div>

        <div className="mt-5">
          <div className="h-6 w-12 rounded-full bg-[#D60665]">
            <div className="h-6 w-6 rounded-full bg-white" style={{
              float: toggle && 'right'
            }} onClick={() => setToggle(!toggle)}></div>
          </div>
          I accept the <span className="text-[#D60665]">Terms of Service</span>{" "}
          as well as <span className="text-[#D60665]">Privacy Policy.</span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
