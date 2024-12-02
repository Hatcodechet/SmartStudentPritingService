import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

interface PrintOPopupProps {
    isOpen: boolean;
    onClose: () => void;
    onContinue: () => void; 
}

const PrintOPopup: React.FC<PrintOPopupProps> = ({ isOpen, onClose, onContinue }) => {
    if (!isOpen) return null;

    const [activeTab, setActiveTab] = useState<string>("upload");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg w-1/2 p-5">
                <span className="text-lg text-black font-bold mb-4">Tạo lệnh in</span>
                <br />
                <span className="text-black mb-4">
                    Tải file lên để thực hiện in tại một trong các máy in có sẵn
                </span>
                <div className="flex border-b mb-4">
                    <button
                        className={`flex-1 p-2 text-center ${
                            activeTab === "upload"
                                ? "border-b-2 border-blue-800 text-black font-medium"
                                : "text-gray-500"
                        }`}
                        onClick={() => handleTabChange("upload")}
                    >
                        Tải lên một tập tin
                    </button>
                    <button
                        className={`flex-1 p-2 text-center ${
                            activeTab === "recent"
                                ? "border-b-2 border-blue-800 text-black font-medium"
                                : "text-gray-500"
                        }`}
                        onClick={() => handleTabChange("recent")}
                    >
                        Các tập tin gần đây
                    </button>
                    <button
                        className={`flex-1 p-2 text-center ${
                            activeTab === "drive"
                                ? "border-b-2 border-blue-800 text-black font-medium"
                                : "text-gray-500"
                        }`}
                        onClick={() => handleTabChange("drive")}
                    >
                        Google Drive
                    </button>
                </div>

                <div className="mb-4">
                    {activeTab === "upload" && (
                        <div>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer border-dashed border-2 border-gray-500 rounded-lg p-6 text-center flex flex-col items-center gap-y-5"
                            >
                                <IoCloudUploadOutline className="text-4xl text-gray-400 mb-2" />
                                <p className="text-gray-500">
                                    Bạn có thể kéo và thả tập tin vào đây để thêm chúng
                                </p>
                            </label>

                            {selectedFile && (
                                <p className="mt-5 text-sm text-gray-500">
                                    Tệp đã chọn: <strong>{selectedFile.name}</strong>
                                </p>
                            )}
                        </div>
                    )}
                    {activeTab === "recent" && (
                        <p className="text-gray-500">Hiển thị các tập tin gần đây...</p>
                    )}
                    {activeTab === "drive" && (
                        <p className="text-gray-500">Kết nối với Google Drive...</p>
                    )}
                </div>

                <div className="flex justify-end space-x-4 pt-8">
                    <button
                        className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Hủy
                    </button>
                    <button
                        className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => {
                            if (selectedFile) {
                                onContinue();
                            } else {
                                alert("Vui lòng chọn một tệp để tiếp tục.");
                            }
                        }}
                    >
                        Tiếp tục
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrintOPopup;
