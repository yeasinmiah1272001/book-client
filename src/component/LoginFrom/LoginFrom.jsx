import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const LoginFrom = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const location = useLocation()
   const from = location.state?.from?.pathname || "/";

  const {login} = useContext(AuthContext)


 const onSubmit = ({ email, password }) => {
   login(email, password)
     .then((result) => {
       const user = result.user;
       console.log(user);
       Swal.fire({
         icon: "success",
         title: "Login Succesfull",
         text: "You have been registered successfully!",
       });
        navigate(from, { replace: true });
     })
     .catch((error) => {
       console.error(error);
       Swal.fire({
         icon: "error",
         title: "Login Failed",
         text: "There was an error with your registration.",
       });
     });
 };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="name"
              {...register("name")}
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
              {...register("email")}
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
              {...register("password")}
              className="w-full px-3 py-2 mt-1 text-gray-700 bg-gray-100 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Login
          </button>
          <Link to="/registration">
            <span className="text-red-600">Do not have an account ? pleace Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginFrom;
