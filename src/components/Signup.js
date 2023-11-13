import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import {toast} from "react-hot-toast"
import { Link, useNavigate, useLocation } from "react-router-dom";
import userSignup from "../auth/userSignup";

const Signup = ({ toggleForm }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { error, signup } = userSignup();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const from = location.state?.from?.pathname || "/dashboard";
  const [errorMessage, setErrorMessage] = useState(null);

  // Handle form input changes
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();
    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      // toast.error("Passwords do not match");
      return;
    }

    // Create an object with account data
    const accountData = {
      ...formData,
    };

    // Call the 'signup' function from the 'userSignup' hook
    await signup(formData.email, formData.password, formData.name);

    try {
      if (!error) {
        // If no error, navigate to the specified path
        navigate(from, { replace: true });
        // Clear form data
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        return;
      } else {
        // If there's an error, set the error message
        setErrorMessage(error);
      }
    } catch (err) {
      // Set error message in case of an exception
      setErrorMessage(err);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-11/12 md:max-w-[700px] px-8 py-12 rounded-3xl bg-white border-2 mx-auto border-gray-100">
        <h1 className="text-4xl font-semibold">Sign Up</h1>
        <p className="font-xs text-lg text-gray-500 mt-3">
          Please enter your details.
        </p>
        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full justify-center mx-auto gap-y-4 mt-[1rem] "
        >
          {/* Name Input */}
          <label className="w-full ">
            <p className="text-[0.875rem] flex text-center text-richblack-5 mb-1 leading-[1.375rem]">
              Enter Name <sup className="text-base text-red-600">*</sup>
            </p>
            <input
              required
              type="name"
              value={formData.name}
              onChange={changeHandler}
              placeholder="Enter name"
              name="name"
              className="rounded-[0.5rem] border-2 shadow-sm text-richblack-5 w-full p-[12px] focus:outline-none focus:shadow-outline"
            />
          </label>

          {/* Email Input */}
          <label className="w-full ">
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

          {/* Password and Confirm Password Inputs */}
          <div className="flex justify-evenly gap-x-4">
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
            </label>

            {/* Confirm Password Input */}
            <label className="w-full relative">
              <p className="text-[0.875rem] flex gap-x-1 text-richblack-5 mb-1 leading-[1.375rem]">
                Confirm Password<sup className="text-base text-red-600">*</sup>
              </p>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="confirmPassword"
                className="bg-richblack-800 border-2 rounded-[0.5rem] text-richblack-5 shadow-sm w-full p-[12px]"
              />

              {/* Confirm Password Visibility Toggle */}
              <span
                className="absolute right-3 top-[38px] cursor-pointer"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? (
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
          </div>

          {/* Display Error Message */}
          {errorMessage && <p> {errorMessage} </p>}

          {/* Submit Button */}
          <button className="bg-violet-500 text-white rounded-[8px] font-medium w-[50%] mx-auto px-[12px] py-[8px] mt-6">
            Sign Up
          </button>

          {/* Login Link */}
          <div className="mt-8 flex justify-center items-center">
            <p className="font-medium text-base">Already have an account?</p>{" "}
            <button
              onClick={toggleForm}
              className="ml-2 font-medium text-base text-violet-500"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
