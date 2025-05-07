import React, { useState } from "react";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import loginIcons from "../assest/signin.gif";
import imageTobase64 from "../helpers/imageTobase64";
import summaryApi from "../common/index";
import { toast } from "react-toastify";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilepic: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);
    setData((preve) => {
      return {
        ...preve,
        profilepic: imagePic,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if confirm password is equal call the api
    if (data.password === data.confirmPassword) {
      const dataResponse = await fetch(summaryApi.signUP.url, {
        method:summaryApi.signUP.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const dataApi = await dataResponse.json();
     if(dataApi.success){
      toast.success(dataApi.message)
      navigate("/login");
     }
     if(dataApi.error){
      toast.error(dataApi.message)
     }
    } else {
      console.log("please check your password and confirm password");
    }
  };
  return (
    <section id="signup" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          {/* Logo/Profile Picture Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-28 h-28 relative mb-4">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={data.profilepic || loginIcons} 
                  alt="profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <form className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <label className="block">
                  <div className="text-xs font-medium text-white bg-red-600 hover:bg-red-700 px-4 py-1.5 cursor-pointer rounded-full shadow-md transition-all duration-200">
                    Upload Photo
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleUploadPic}
                      accept="image/*"
                    />
                  </div>
                </label>
              </form>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          </div>
  
          {/* Signup Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition duration-200"
                />
              </div>
            </div>
  
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
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition duration-200"
                />
              </div>
            </div>
  
            {/* Password Field */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={data.password}
                  name="password"
                  onChange={handleOnChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition duration-200 pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-500 hover:text-red-600"
                  onClick={() => setShowPassword((preve) => !preve)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
  
            {/* Confirm Password Field */}
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative flex items-center">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  value={data.confirmPassword}
                  name="confirmPassword"
                  onChange={handleOnChange}
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition duration-200 pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 text-gray-500 hover:text-red-600"
                  onClick={() => setShowConfirmPassword((preve) => !preve)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
  
            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </form>
  
          {/* Login Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link
                to={"/login"}
                className="font-medium text-red-600 hover:text-red-700 hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
