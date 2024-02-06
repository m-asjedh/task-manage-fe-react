import React from "react";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const UserRegister = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-[100px] w-full bg-blue-100 ">
        <div className="p-5 font-signature text-3xl underline underline-offset-4">
          TaskFlowHub
        </div>
        <div className="flex p-5 gap-10">
          <Link
            className="bg-blue-500 px-4 py-1 text-lg font-bold rounded-lg hover:underline underline-offset-4 flex items-center"
            to={"/login"}
          >
            <span>Login</span>
          </Link>
          <Link
            className="bg-blue-500 px-4 py-1 text-lg font-bold rounded-lg hover:underline underline-offset-4 flex items-center"
            to={"/register"}
          >
            <span>Register</span>
          </Link>
          <Link
            className="bg-blue-500 px-4 py-1 text-lg font-bold rounded-lg flex flex-col items-center justify-center "
            to={"/admin_login"}
          >
            <span>Admin Login</span>
            <RiAdminFill size={20} />
          </Link>
        </div>
      </div>
      <div className="h-[800px] flex items-center justify-center">
        <div className="p-20 bg-gray-300 rounded-lg shadow-md border-4 border-black">
          <h1 className="flex justify-center items-center text-xl font-signature ">
            Create your Account
          </h1>
          <form className="mt-5 flex flex-col">
            <label className="font-semibold" htmlFor="name">
              Name:
            </label>
            <input
              className="rounded-lg py-2 px-3 mb-6 border-2 border-black "
              type="text"
            ></input>
            <label className="font-semibold" htmlFor="username">
              Email:
            </label>
            <input
              className="rounded-lg py-2 px-3 mb-6 border-2 border-black "
              type="email"
            ></input>
            <label className="font-semibold" htmlFor="password">
              Password:
            </label>
            <input
              className="rounded-lg py-2 px-3 mb-6 border-2 border-black"
              type="password"
            ></input>
            <button className="m-8 bg-blue-400 rounded-xl py-2 hover:bg-blue-600 text-white border-2 border-black ">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
