import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "../context/AuthContext";
const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  }
  return (
    <div
      className="d-flex flex-column align-seft-start h-full align-items-start"
      // style={{ alignSelf: "start", height: "100%" }}
    >
      <div
        className="d-flex flex-column flex-shrink-0 h-full w-[10rem]  md:w-[14rem] "
        style={{ backgroundColor: "#1E90FF" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content lg:text-white text-black mt-3 z-[1] p-2 shadow bg-[#F2F0F0] rounded-box w-52"
            >
              <li className="m-3">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="m-3">
                <summary>Dịch vụ</summary>
                <ul className="p-2 z-50 text-black">
                  <li>
                    <Link to="/services/printing">In tài liêụ</Link>
                  </li>
                  {(user?.role === "admin" || !user) && (
                    <li>
                      <Link to="/services/management">Quản lý máy in</Link>
                    </li>
                  )}
                </ul>
              </li>
              <li className="m-3">
                <Link to="/about">Giới thiệu</Link>
              </li>
            </ul>
          </div>
          {/* <Link
            to="/"
            className="btn btn-ghost text-xl"
            style={{ paddingLeft: "0" }}
          >
            <img
              src="https://quanlycongnghiep.com/wp-content/uploads/2019/06/logo-hcmut.png"
              alt="logo"
              className="h-10 w-10"
            ></img>
          </Link> */}
        </div>

        <div className="navbar-center hidden lg:flex text-white text-lg">
          <ul className=" px-1 menu menu-vertical">
            <li className="m-3">
              <Link to="/">Trang chủ</Link> 
            </li>
            <li tabIndex={0} className="m-3">
              <details>
                <summary>Dịch vụ</summary>
                <ul className="p-1 bg-[#154569] z-50 w-36">
                  {user ? (
                    <li>
                      <Link to="/services/printing">In tài liệu</Link>
                    </li>
                  ) : (
                    <li>
                      <Link to="/login">In tài liệu</Link>
                    </li>
                  )}
                  {user?.role === "admin" || !user ? (
                    <li>
                      <Link to="/services/management">Quản lý máy in</Link>
                    </li>
                  ) : !user ? (
                    <li>
                      <Link to="/login">Quản lý máy in</Link>
                    </li>
                  ) : null}
                </ul>
              </details>
            </li>
            <li className="m-3">
              <Link to="/about">Giới thiệu</Link>
            </li>
            {user && (
              <li className="m-3">
                  <button onClick={handleLogout}>
                    Đăng xuất
                  </button>
              </li>
            )}
          </ul>
        </div>
        {/* <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Avatar"
                    src="https://i1.sndcdn.com/artworks-G0XZmnzGNxLfoZx2-s2zyrw-t500x500.jpg"
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
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
