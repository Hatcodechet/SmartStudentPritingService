import React from 'react';

const PrinterList: React.FC = () => {
  const printers = [
    { name: 'Máy in A', location: 'Tầng 3 - Tòa A4', type: 'In màu, 2 mặt' },
    { name: 'Máy in B', location: 'Tầng 2 - Tòa A5', type: 'In màu, 2 mặt' },
    { name: 'Máy in C', location: 'Tầng 2 - Tòa A5', type: 'In trắng đen, 1 mặt' },
    { name: 'Máy in D', location: 'Tầng 4 - Tòa B4', type: 'In trắng đen, 1 mặt' },
  ];

  return (
    <div className="p-4 rounded-lg border  border-slate-200">
      <h3 className="text-lg font-semibold text-gray-600">Danh sách máy in</h3>
      <ul className="mt-4 space-y-4">
        {printers.map((printer, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <p className="text-gray-800 font-medium">{printer.name}</p>
              <p className="text-gray-500 text-sm">{printer.location}</p>
              <p className="text-gray-500 text-sm">{printer.type}</p>
            </div>
            <a href="#" className="text-blue-500 text-sm">Chi tiết</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrinterList;
