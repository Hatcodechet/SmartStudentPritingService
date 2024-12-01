import React from 'react';
import Logo from '../../public/favicon-32x32.png';
import { CiHome } from "react-icons/ci";
import { useAuth } from '../context/AuthContext';

const SideBar: React.FC = () => {
    const {logout} = useAuth();
    return (
        <div className="w-1/4 flex flex-col min-h-0">

            <div className="max-h-[30%] w-full flex flex-row justify-between border border-r-slate-300 p-3">
                <img src={Logo} alt="Bach Khoa Logo" />
                <div className="flex flex-col items-center justify-center">
                    <p className="text-[0.7rem]">Ho Chi Minh University of Technology</p>
                    <p className="text-[0.9rem] font-bold text-blue-400">Student Smart Printing Service</p>
                </div>
            </div>


            <nav className="flex-grow w-full bg-blue-500 text-white flex flex-col p-5 space-y-6">
                <a href="#" className="flex items-center space-x-3"> 
                    <CiHome />
                    <span>Bảng điều khiển</span>
                </a>
                <a href="#" className="flex items-center space-x-3">
                    <CiHome />
                    <span>Lịch sử lệnh in</span>
                </a>
                <a href="#" className="flex items-center space-x-3">
                    <CiHome />
                    <span>Danh sách máy in</span>
                </a>
                <a 
                href="/" 
                onClick={logout}
                className="flex items-center space-x-3">
                    <CiHome />
                    <span>Đăng xuất</span>
                </a>
            </nav>
        </div>
    );
};

export default SideBar;