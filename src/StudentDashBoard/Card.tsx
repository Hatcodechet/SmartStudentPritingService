import React from 'react';
import {BsPrinter} from 'react-icons/bs';
import { IoDiamondOutline, IoDocumentTextOutline } from "react-icons/io5";


const Cards: React.FC = () => {
    const cardData = [
        {value: '8,386', title: 'Số dư còn lại', icon : <IoDiamondOutline/>},
        {value: '5', title: 'Lệnh in', icon : <BsPrinter/>},
        {value: '12', title: 'Số trang', icon : <IoDocumentTextOutline/>},
    ]
    return (
        <div className="grid grid-cols-3 gap-4">
            {cardData.map((card, index) => (
                <div
                    key={index}
                    className="flex flex-col bg-white rounded-lg p-4 border border-slate-200">
                    <div className=" flex flex-row justify-between">
                        <p className="text-sm font-bold text-gray-800">{card.title}</p>
                        <div className="text-black text-2xl">{card.icon}</div>
                    </div>
                    <p className="text-lg font-bold text-gray-800">{card.value}</p>
                </div>
            ))}
        </div>
    );
};

export default Cards;
