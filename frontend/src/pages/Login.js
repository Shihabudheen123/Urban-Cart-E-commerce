import React, { useContext, useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import summaryApi from "../common";
import Context from "../context/index";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataResponse = await fetch(summaryApi.signIn.url, {
      method: summaryApi.signIn.method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
    }
    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  console.log("data login", data);
  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6F0FA] to-gray-100 py-12 px-4"
    >
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          {/* Logo/User Icon Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 mb-4 flex items-center justify-center">
              {/* Example SVG User Icon in sapphire blue, you can still use {loginIcons} if you prefer */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#1F74BA" strokeWidth="4"/>
                <circle cx="32" cy="27" r="10" stroke="#1F74BA" strokeWidth="3"/>
                <path d="M16 50c0-7.732 7.163-14 16-14s16 6.268 16 14" stroke="#1F74BA" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          </div>

          {/* Login Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#1F74BA] focus:ring-2 focus:ring-[#1F74BA]/20 outline-none transition duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#1F74BA] focus:ring-2 focus:ring-[#1F74BA]/20 outline-none transition duration-200 pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-500 hover:text-[#1F74BA]"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <Link
                to={"/forgot-password"}
                className="block text-right text-sm text-[#1F74BA] hover:text-[#185789] hover:underline mt-1"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#1F74BA] hover:bg-[#185789] text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to={"/sign-up"}
                className="font-medium text-[#1F74BA] hover:text-[#185789] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
