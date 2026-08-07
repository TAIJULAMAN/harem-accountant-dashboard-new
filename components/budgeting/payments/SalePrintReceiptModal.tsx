import React from "react";

interface SalePrintReceiptModalProps {
  printModalState: "closed" | "not_received" | "received";
  setPrintModalState: (state: "closed" | "not_received" | "received") => void;
  setIsOnlineReceiptPrinted: (value: boolean) => void;
}

export default function SalePrintReceiptModal({
  printModalState,
  setPrintModalState,
  setIsOnlineReceiptPrinted,
}: SalePrintReceiptModalProps) {
  if (printModalState === "closed") return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={() => setPrintModalState("closed")}
      ></div>
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-[450px] p-6 animate-in fade-in zoom-in-95 duration-200">
        <h3 className="text-lg font-bold text-slate-800 mb-4">
          Print Receipt
        </h3>

        <p className="text-sm font-semibold text-slate-600 mb-8 leading-relaxed">
          {printModalState === "not_received"
            ? "The online payment has not been received yet, do you want to print it anyway?"
            : "The online payment has been correctly received, do you want to proceed printing and sending the copy to the client?"}
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={() => setPrintModalState("closed")}
            className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setIsOnlineReceiptPrinted(true);
              setPrintModalState("closed");
            }}
            className="px-5 py-2.5 rounded-lg bg-[#e0e1fe] text-[#5c60f5] text-xs font-bold hover:bg-[#5c60f5] hover:text-white transition-colors"
          >
            {printModalState === "not_received"
              ? "Print now"
              : "Print and Send Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
