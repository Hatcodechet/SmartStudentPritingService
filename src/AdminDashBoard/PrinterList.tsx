import React, {useState} from "react";
import PrinterData from "../PrinterData";
import Printer from "../../public/printer.png"
const PrinterList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredPrinters = PrinterData.filter((printer) =>
      printer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      printer.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-black font-medium mb-4">Danh sách máy in</h1>
        <p className="mb-4 text-slate-500">Các máy in đã được thiết lập để sinh viên sử dụng</p>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên máy in, vị trí"
            className="flex-grow bg-white p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ml-2 p-2 bg-blue-500 text-white rounded">Search</button>
        </div>
        <ul className="space-y-4">
          {filteredPrinters.map((printer) => (
            <li key={printer.id} className="p-4 rounded flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={Printer}
                  alt={printer.name}
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h2 className="text-lg font-medium text-blue-500">{printer.name}</h2>
                  <p className="text-slate-600">{printer.location}</p>
                </div>
              </div>
              <div>
                <span className={`inline-block px-2 py-1 text-sm font-semibold rounded ${
                  printer.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {printer.isAvailable ? 'Khả dụng' : 'Không khả dụng'}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PrinterList;
