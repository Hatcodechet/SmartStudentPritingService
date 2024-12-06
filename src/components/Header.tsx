// import React, { useState } from "react";
import { IoDiamondOutline, IoAdd } from "react-icons/io5";
// import PrintPopup from "../PopUpManage/PrintPopup";
// import CreatePrintJob from "../PopUpManage/CreatePrintJob";
import { useNavigate } from "react-router-dom";
import Logo from '../../public/favicon.ico';
import { useAuth } from "../context/AuthContext";
import React from "react";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const handlePrinting = () => {
    navigate("/services/printing");
  };
  const handleManagement = () => {
    navigate("/services/management");
  };
  const { user } = useAuth();
  return (
    <>
      <header className="min-h-[5rem] flex items-center justify-between w-full border-b border-slate-300">
        <div className="p-2 flex flex-row justify-between border border-r-slate-300 w-[14rem] h-full">
            <img src={Logo} alt="Bach Khoa Logo" className="w-1/6"/>
              <div className="flex flex-col items-center text-center justify-center">
                  <p className="text-[0.6rem]">Ho Chi Minh University of Technology</p>
                  <p className="text-[0.8rem] font-bold text-blue-400">Student Smart Printing Service</p>
              </div>
        </div>
        <div className="flex items-center w-3/5 space-x-5 text-left">
          <span className="text-black">Bảng điều khiển</span>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="border border-gray-300 rounded-md p-1 w-1/2 text-sm bg-white"
          />
        </div>
        <div className="flex space-x-4 pr-5">
          {user && user.role === 'student' ? (
              null
            ) : (
              <button 
                onClick = {handleManagement}
                className="font-medium text-blue-500 bg-blue-100 hover:bg-blue-300 rounded-md py-2 px-1 items-center flex gap-x-3">
                <IoDiamondOutline />
                Quản lý lệnh in
              </button>
            )}
          <button
            onClick={handlePrinting}
            className="font-medium bg-blue-500 hover:bg-blue-300 text-white rounded-md py-2 px-1 flex items-center gap-x-3"
          >
            <IoAdd />
            Tạo lệnh in
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
