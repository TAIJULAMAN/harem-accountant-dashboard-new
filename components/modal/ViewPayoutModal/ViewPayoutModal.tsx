import React from "react";
import CustomCloseButton from "../../customComponent/CustomCloseButton";
import CustomAlert from "../../customComponent/CustomAlert";
import {
  CircleDollarSign,
  FileText,
  Eye,
  Download,
  TrendingUp,
} from "lucide-react";
import { PayoutData } from "../../salons/payoutsData";

interface ViewPayoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  payoutData: PayoutData | null;
}

export default function ViewPayoutModal({
  isOpen,
  onClose,
  payoutData,
}: ViewPayoutModalProps) {
  if (!isOpen || !payoutData) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
          <h2 className="text-lg font-bold text-slate-800">View Request</h2>
          <CustomCloseButton
            onClick={onClose}
            className="text-slate-400 hover:bg-slate-50 hover:text-slate-600 rounded-xl p-1 transition-colors"
          />
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto">
          {/* Top Status Card */}
          <div className="bg-[#F0FDFB] border border-[#16CDC7]/20 rounded-2xl p-6 flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#16CDC7] text-white shadow-sm shrink-0">
                <CircleDollarSign size={24} />
              </div>
              <div>
                <p className="text-xs font-medium text-slate-500 mb-0.5">
                  Status
                </p>
                <p className="text-2xl font-bold text-slate-800">
                  {payoutData.status}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium text-slate-500 mb-0.5">
                Amount
              </p>
              <p className="text-2xl font-bold text-slate-800">
                {payoutData.amount}
              </p>
            </div>
          </div>

          {/* Referral Alert */}
          <div className="mb-6">
            <CustomAlert icon={TrendingUp}>
              Salon Referred by You — You are earning 30% on this salon!
            </CustomAlert>
          </div>

          {/* Information Request */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-800 mb-4">
              Information Request
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white border border-slate-100 rounded-xl p-6">
              <div>
                <p className="text-xs font-medium text-slate-400 mb-1">
                  Requested Date
                </p>
                <p className="text-sm font-medium text-slate-700">
                  {payoutData.requestDate}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 mb-1">
                  Invoice Number
                </p>
                <p className="text-sm font-medium text-slate-700">
                  {payoutData.invoiceNo}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 mb-1">
                  Payment Date
                </p>
                <p className="text-sm font-medium text-[#22C55E]">
                  {payoutData.paymentDate !== "-"
                    ? payoutData.paymentDate
                    : "Pending"}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Data */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-slate-800 mb-4">
              Payment Data
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white border border-slate-100 rounded-xl p-6">
              <div>
                <p className="text-xs font-medium text-slate-400 mb-1">IBAN</p>
                <p className="text-sm font-medium text-slate-700">
                  IT60X0542811101000000123456
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-400 mb-1">Owner</p>
                <p className="text-sm font-medium text-slate-700">
                  Mario Accountant S.r.l.
                </p>
              </div>
            </div>
          </div>

          {/* Invoice */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 mb-4">Invoice</h3>
            <div className="flex items-center justify-between bg-white border border-slate-100 rounded-xl p-4">
              <div className="flex items-center gap-4">
                <div className="text-[#635BFF]">
                  <FileText size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#635BFF]">
                    originalname.pdf
                  </p>
                  <p className="text-xs text-slate-400">4.2 MB</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-lg bg-[#F4F4FD] text-[#635BFF] hover:bg-[#635BFF] hover:text-white flex items-center justify-center transition-colors">
                  <Eye size={16} />
                </button>
                <button className="w-8 h-8 rounded-lg bg-[#F4F4FD] text-[#635BFF] hover:bg-[#635BFF] hover:text-white flex items-center justify-center transition-colors">
                  <Download size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
