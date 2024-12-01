import React, { useState } from "react";
import PrinterData from "../PrinterData"

interface Printer {
    id: number;
    name: string;
    isAvailable: boolean;
    brand: string;
    location: string;
}

interface CreatePrintJobProps {
    onBack: () => void; 
}

const CreatePrintJob: React.FC<CreatePrintJobProps> = ({ onBack }) => {
    const [selectedPrinter, setSelectedPrinter] = useState<Printer | null>(null);

    const handlePrinterSelect = (printer: Printer) => {
        setSelectedPrinter(printer);
    };

    const handleContinue = () => {
        if (selectedPrinter) {
            alert(`Printer selected: ${selectedPrinter.name}`);
        } else {
            alert("Please select a printer.");
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 flex-col ">
            <div className="bg-white rounded-lg w-1/2 p-5">
            <h2 className="text-lg font-bold mb-4">Tạo lệnh in</h2>
            <p className="text-gray-600 mb-6">Chọn máy in để thực hiện in</p>

            <div className="grid grid-cols-3 gap-4">
                {PrinterData.map((printer) => (
                    <div
                        key={printer.id}
                        className={`border rounded-lg p-4 cursor-pointer ${
                            selectedPrinter?.id === printer.id ? "border-blue-500" : "border-gray-300"
                        }`}
                        onClick={() => handlePrinterSelect(printer)}
                    >
                        <img
                            src="/printer.png" 
                            alt={printer.name}
                            className="w-16 h-16 mx-auto mb-2"
                        />
                        <h3 className="text-center text-black font-bold">{printer.name}</h3>
                        <p className="text-center text-gray-500 text-sm">
                            {printer.isAvailable ? "Sẵn sàng" : "Không khả dụng"}
                        </p>
                        <p className="text-center text-gray-400 text-xs">{printer.location}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-end space-x-4 mt-6 w-full max-w-lg">
                <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    onClick={onBack}
                >
                    Trở lại
                </button>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={handleContinue}
                >
                    Tiếp tục
                </button>
            </div>
            </div>
        </div>
    );
};

export default CreatePrintJob;
