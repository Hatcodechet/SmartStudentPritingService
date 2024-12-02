import React, { useState } from "react";
import PrintPopup from "./PrintPopup";
import CreatePrintJob from "./CreatePrintJob";

const ParentComponent: React.FC = () => {
    const [isPrintPopupOpen, setIsPrintPopupOpen] = useState(true);
    const [showPrinterSelection, setShowPrinterSelection] = useState(false);

    const handlePopupClose = () => {
        setIsPrintPopupOpen(false);
    };

    const handleContinueToPrinters = () => {
        setIsPrintPopupOpen(false); 
        setShowPrinterSelection(true); 
    };

    const handleBackToUpload = () => {
        setShowPrinterSelection(false); 
        setIsPrintPopupOpen(true); 
    };

    return (
        <div>
            {isPrintPopupOpen && (
                <PrintPopup
                    isOpen={isPrintPopupOpen}
                    onClose={handlePopupClose}
                    onContinue={handleContinueToPrinters}
                />
            )}
            {showPrinterSelection && <CreatePrintJob onBack={handleBackToUpload} />}
        </div>
    );
};

export default ParentComponent;
