import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Registration = () => {
  const {  createUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const location = useLocation()
   const navigate = useNavigate();
   const from = location.state?.from?.pathname || "/";


   const onSubmit = ({ email, password }) => {
     createUser(email, password)
       .then((result) => {
         const user = result.user;
         console.log(user);
         Swal.fire({
           icon: "success",
           title: "Registration Successful",
           text: "You have been registered successfully!",
         });
         navigate(from, { replace: true });
       })
       .catch((error) => {
         console.error(error);
         Swal.fire({
           icon: "error",
           title: "Registration Failed",
           text: "There was an error with your registration.",
         });
       });
   };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
          <Link to="/login">
            <span className="block mt-2 text-center text-red-600">
              Already have an account? Please Login
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Registration;
