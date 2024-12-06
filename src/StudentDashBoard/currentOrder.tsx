import React from 'react';
import { useNavigate } from 'react-router-dom';
const CurrentOrder: React.FC = () => {
  const navigate = useNavigate();
  const handlePrinting = () => {
    navigate("/services/printing");
  };
  return (
    <div className="p-4 rounded-lg border  border-slate-200">
      <h3 className="text-lg font-semibold text-gray-600">Lệnh in hiện tại</h3>
      <p className="text-gray-500 mt-2">Không có gì đang được in</p>
      <button 
        className="text-blue-500 mt-2 inline-block"
        onClick={handlePrinting}>
          Tạo lệnh in</button>
    </div>
  );
};

export default CurrentOrder;
