import React, { useState } from "react";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form is valid, submitting...");

      // Handle form submission

      navigate("/layout");
    }
  };

  return (
    <div className="flex items-center justify-end min-h-screen bg-gray-100 w-1/2">
      <div className="form-container w-[400px] 2xl:w-[700px] p-12 mb-5 xl:mr-24 xl:mt-5 2xl:mr-0">
        <p className="title text-center text-3xl 2xl:text-5xl font-bold mb-8 2xl:mb-14 text-gray-800 2xl:mt-5 3xl:mt-[-20px]">
          Welcome back
        </p>
        <form
          className="form w-full flex flex-col gap-6 mb-6 2xl:mb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <input
              type="email"
              className={`input rounded-lg border px-4 py-3 2xl:px-8 2xl:py-6 2xl:text-2xl focus:outline-none focus:ring-1 ${
                errors.email
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-teal-500"
              }`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col relative">
            <input
              type={showPassword ? "text" : "password"}
              className={`input rounded-lg border px-4 py-3 2xl:px-8 2xl:py-6 2xl:text-2xl focus:outline-none focus:ring-1 ${
                errors.password
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-teal-500"
              }`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm 2xl:text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {showPassword ? (
                <AiOutlineEye
                  size={15}
                  className="text-gray-500 2xl:h-8 2xl:w-8"
                />
              ) : (
                <AiFillEyeInvisible
                  size={15}
                  className="text-gray-500 2xl:h-8 2xl:w-8"
                />
              )}
            </button>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password}
              </span>
            )}
          </div>
          <p className="page-link text-right text-gray-700">
            <span className="page-link-label cursor-pointer text-xs 2xl:text-xl font-bold hover:text-blue-500">
              Forgot Password?
            </span>
          </p>

          <button
            type="submit"
            className="form-btn bg-[#5128A7] text-white font-semibold rounded-lg px-6 py-3 2xl:px-8 2xl:py-5 2xl:text-2xl shadow-md"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
