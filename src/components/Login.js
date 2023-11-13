import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import userLogin from "../auth/userLogin";
import { useLocation } from "react-router-dom";

const Login = ({ toggleForm }) => {
  // Use the 'useNavigate' hook for programmatic navigation
  const navigate = useNavigate();
  // Use the 'useLocation' hook to get the current location
  const location = useLocation();
  // Destructure properties from the 'userLogin' hook
  const { error, login } = userLogin();
  // State to manage error message
  const [errorMessage, setErrorMessage] = useState(null);

  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Extract the 'from' path from the location or default to "/dashboard"
  const from = location.state?.from?.pathname || "/dashboard";

  // Handle form input changes
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();
    // Call the 'login' function from the 'userLogin' hook
    await login(formData.email, formData.password);

    // Check for login error
    if (!error) {
      // If no error, navigate to the specified path
      navigate(from, { replace: true });
      // Clear form data
      setFormData({
        email: "",
        password: "",
      });
      return;
    } else {
      // If there's an error, set the error message
      setErrorMessage(error);
    }
  };

  return (
    <div className="w-full">
      <div className="w-11/12 max-w-[680px] px-10 py-16 rounded-3xl bg-white border-2 mx-auto border-gray-100">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          Welcome back! Please enter your details.
        </p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full justify-center mx-auto gap-y-4 mt-[3rem]"
        >
          {/* Email Input */}
          <label className="w-full">
            <p className="text-[0.875rem] flex text-center text-richblack-5 mb-1 leading-[1.375rem]">
              Email Address<sup className="text-base text-red-600">*</sup>
            </p>
            <input
              required
              type="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter email address"
              name="email"
              className="rounded-[0.5rem] border-2 shadow-sm text-richblack-5 w-full p-[12px] focus:outline-none focus:shadow-outline"
            />
          </label>

          {/* Password Input */}
          <label className="w-full relative">
            <p className="text-[0.875rem] flex gap-x-1 text-richblack-5 mb-1 leading-[1.375rem]">
              Password<sup className="text-base text-red-600">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
              className="bg-richblack-800 border-2 rounded-[0.5rem] text-richblack-5 shadow-sm w-full p-[12px]"
            />

            {/* Password Visibility Toggle */}
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>

            {/* Forgot Password Link */}
            <Link to="#">
              <p className="text-xs mt-1 text-violet-500 max-w-max ml-auto">
                Forgot Password
              </p>
            </Link>
          </label>

          {/* Display Error Message */}
          {error && <p>{errorMessage}</p>}

          {/* Submit Button */}
          <button className="bg-violet-500 text-white rounded-[8px] font-medium w-[50%] mx-auto px-[12px] py-[8px] mt-6">
            Sign In
          </button>

          {/* Signup Link */}
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Don't have an account?</p>{" "}
            <button
              onClick={toggleForm}
              className="ml-2 font-medium text-base text-violet-500"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
