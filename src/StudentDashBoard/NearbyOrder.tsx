import React from 'react';

const NearbyOrder: React.FC = () => {
  const orders = [
    { name: 'Document_A.docx', pages: 12, time: '15:00 PM 21/10/2024' },
    { name: 'Document_B.docx', pages: 12, time: '15:00 PM 21/10/2024' },
    { name: 'Document_C.docx', pages: 12, time: '15:00 PM 21/10/2024' },
    { name: 'Document_D.docx', pages: 12, time: '15:00 PM 21/10/2024' },
  ];

  return (
    <div className="p-4 rounded-lg border border-slate-200">
      <h3 className="text-lg font-semibold text-gray-600">Lệnh in gần đây</h3>
      <ul className="mt-4 space-y-4">
        {orders.map((order, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 text-blue-600 rounded p-2">
                <i className="fas fa-file-word text-lg"></i>
              </div>
              <div>
                <p className="text-gray-800 font-medium">{order.name}</p>
                <p className="text-gray-500 text-sm">{order.pages} trang</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm">{order.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NearbyOrder;
