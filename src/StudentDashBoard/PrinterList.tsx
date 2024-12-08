import React from 'react';
import PrinterData from '../PrinterData';
const PrinterList: React.FC = () => {

  return (
    <div className="p-4 rounded-lg border  border-slate-200">
      <h3 className="text-lg font-semibold text-gray-600">Danh sách máy in</h3>
      <ul className="mt-4 space-y-4">
        {PrinterData.map((printer) => (
          <li key={printer.id} className="flex flex-col">
              <div className='w-full flex flex-row justify-between '>
                <p className="text-gray-800 font-medium">{printer.name}</p>
                <a href="#" className="text-blue-500 text-sm">Chi tiết</a>
              </div>
            <div>
              <p className="text-gray-500 text-sm">{printer.location}</p>
              <p className="text-gray-500 text-sm">{printer.brand}</p>
              <p className={`text-sm ${printer.isAvailable ? 'text-gray-500' : 'text-red-500'}`}>
                {printer.isAvailable ? 'Khả dụng' : 'Không khả dụng'}
              </p>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrinterList;
