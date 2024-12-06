import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "../../public/favicon.ico";
import React from "react";
const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-[4rem] items-center flex flex-row justify-between w-full bg-white border border-b-slate-200">
      <Link
        to="/"
        className="flex flex-row h-full justify-around items-center w-[14rem] border border-e-slate-200"
      >
        <img src={Logo} alt="Bach Khoa Logo" />
        <p className="text-[0.8rem]  font-medium text-center">
          Ho Chi Minh University of Technology
        </p>
      </Link>
      <p className="text-[2rem]  font-Dancing-Script font-bold text-blue-400">
        Student Smart Printing Service
      </p>
      <div className="pr-5">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52"
            >
              <li>
                <a href="/" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn bg-[#1E90FF] text-white">
            Đăng nhập
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
