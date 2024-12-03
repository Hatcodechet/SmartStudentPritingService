// import React, { useState } from "react";
import { IoDiamondOutline, IoAdd } from "react-icons/io5";
// import PrintPopup from "../PopUpManage/PrintPopup";
// import CreatePrintJob from "../PopUpManage/CreatePrintJob";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const handlePrinting = () => {
    navigate("/services/printing");
  };

  return (
    <>
      <header className="flex items-center justify-between px-5 py-4 w-full border-b border-slate-300">
        <div className="flex items-center w-2/3 space-x-10">
          <span className="text-black">Bảng điều khiển</span>
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="border border-gray-300 rounded-md p-1 w-1/2 text-sm bg-white"
          />
        </div>
        <div className="flex space-x-4">
          <button className="font-medium text-blue-500 bg-blue-100 hover:bg-blue-300 py-1 px-4 rounded-md flex flex-row items-center gap-x-2">
            <IoDiamondOutline />
            Thêm số dư
          </button>
          <button
            onClick={handlePrinting}
            className="font-medium bg-blue-500 hover:bg-blue-300 text-white py-1 px-4 rounded-md flex flex-row items-center gap-x-2"
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
