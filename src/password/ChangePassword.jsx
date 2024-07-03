import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";

export default function ChangePassword() {
  const [currPassword, setCurrShowPassword] = useState(false);
  const [newPasswordVisible, setNewShowPassword] = useState(false);
  const [confirmPasswordVisible, setConfirmShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex justify-center bg-gray-100 w-full h-full">
        <div className="font-[poppins] mt-16 2xl:mt-32 shadow-lg rounded-lg bg-white w-1/2 h-[400px] 2xl:h-[550px] p-5">
          <form onSubmit={handleSubmit(onSubmit)} className="m-2">
            <h4 className="text-lg font-bold text-indigo-700 2xl:text-2xl">
              Change Password
            </h4>
            <hr className="mt-2 2xl:mt-5" />
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm font-medium 2xl:text-lg">
                Current Password
              </label>
              <div className="flex flex-col relative">
                <input
                  type={currPassword ? "text" : "password"}
                  className={`input rounded-lg text-xs border px-1 py-2 2xl:px-3 2xl:py-4 2xl:text-xl focus:outline-none focus:ring-1 ${
                    errors.currentPassword
                      ? "border-red-500 focus:border-red-400 focus:ring-red-400"
                      : "border-gray-300 focus:border-blue-500 focus:ring-teal-500"
                  }`}
                  placeholder="Current Password"
                  {...register("currentPassword", {
                    required: "Current password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setCurrShowPassword(!currPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm 2xl:text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {currPassword ? (
                    <AiOutlineEye
                      size={15}
                      className="text-gray-500 2xl:h-6 2xl:w-6"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size={15}
                      className="text-gray-500 2xl:h-6 2xl:w-6"
                    />
                  )}
                </button>
              </div>
              {errors.currentPassword && (
                <span className="text-red-400 text-xs">
                  {errors.currentPassword.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm font-medium 2xl:text-lg">
                New Password
              </label>
              <div className="flex flex-col relative">
                <input
                  type={newPasswordVisible ? "text" : "password"}
                  className={`input rounded-lg text-xs border px-1 py-2 2xl:px-3 2xl:py-4 2xl:text-xl focus:outline-none focus:ring-1 ${
                    errors.newPassword
                      ? "border-red-500 focus:border-red-400 focus:ring-red-400"
                      : "border-gray-300 focus:border-blue-500 focus:ring-teal-500"
                  }`}
                  placeholder="New Password"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setNewShowPassword(!newPasswordVisible)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm 2xl:text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {newPasswordVisible ? (
                    <AiOutlineEye
                      size={15}
                      className="text-gray-500 2xl:h-6 2xl:w-6"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size={15}
                      className="text-gray-500 2xl:h-6 2xl:w-6"
                    />
                  )}
                </button>
              </div>
              {errors.newPassword && (
                <span className="text-red-400 text-xs">
                  {errors.newPassword.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm font-medium 2xl:text-lg">
                Confirm Password
              </label>
              <div className="flex flex-col relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  className={`input rounded-lg text-xs border px-1 py-2 2xl:px-3 2xl:py-4 2xl:text-xl focus:outline-none focus:ring-1 ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-400 focus:ring-red-400"
                      : "border-gray-300 focus:border-blue-500 focus:ring-teal-500"
                  }`}
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                />
                <button
                  type="button"
                  onClick={() =>
                    setConfirmShowPassword(!confirmPasswordVisible)
                  }
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm 2xl:text-xl text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {confirmPasswordVisible ? (
                    <AiOutlineEye
                      size={15}
                      className="text-gray-500 2xl:h-6 2xl:w-6"
                    />
                  ) : (
                    <AiFillEyeInvisible
                      size={15}
                      className="text-gray-500 2xl:h-6 2xl:w-6"
                    />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <span className="text-red-400 text-xs">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 2xl:mt-10 text-xs px-4 py-2 2xl:py-3 2xl:px-6 2xl:text-lg bg-indigo-500 text-white rounded-lg hover:bg-indigo-900"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
