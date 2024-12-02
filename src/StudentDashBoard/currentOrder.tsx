import React from 'react';

const CurrentOrder: React.FC = () => {
  return (
    <div className="p-4 rounded-lg border  border-slate-200">
      <h3 className="text-lg font-semibold text-gray-600">Lệnh in hiện tại</h3>
      <p className="text-gray-500 mt-2">Không có gì đang được in</p>
      <a href="#" className="text-blue-500 mt-2 inline-block">Tạo lệnh in</a>
    </div>
  );
};

export default CurrentOrder;
