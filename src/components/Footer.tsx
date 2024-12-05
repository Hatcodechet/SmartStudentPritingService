import React from "react";
import Logo from "../../public/favicon.ico";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-500 text-white p-5 w-full">
      <div className=" flex justify-between items-center">
        <div className="flex flex-row justify-around space-x-20">
          <div className="flex flex-col items-center space-y-5">
            <p className="text-sm font-semibold">
              HCMUT Student Smart Printing Service
            </p>
            <img src={Logo} alt="Bach Khoa Logo" className="h-12 mb-2" />
          </div>
          <div className="flex flex-col ">
            <p className="font-bold mb-2  ">Website</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#">SSPS</a>
              </li>
              <li>
                <a href="#">HCMUT</a>
              </li>
              <li>
                <a href="#">MyBK</a>
              </li>
              <li>
                <a href="#">BKPay</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="font-bold mb-2">Liên hệ</p>
          <p className="text-sm">268 Lý Thường Kiệt, P.14, Q.10, TP.HCM</p>
          <p className="text-sm">
            Phone: (028) 38 651 670 - (028) 38 647 256 (Ext: 5258, 5234)
          </p>
          <p className="text-sm">ssps@hcmut.edu.vn</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
