import React from "react";
import CustomCloseButton from "../customComponent/CustomCloseButton";

interface BillingDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BillingDetailsModal({ isOpen, onClose }: BillingDetailsModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="fixed left-1/2 top-1/2 z-[60] w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-xl flex flex-col max-h-[90vh]">
        <div className="flex items-start justify-between px-8 pt-8 pb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-1">
              Billing Details
            </h2>
            <p className="text-sm text-slate-600">
              Guide to creating an invoice for a limited liability company (LLC) according to Italian law
            </p>
          </div>
          <CustomCloseButton onClick={onClose} />
        </div>

        <div className="px-8 pb-8 overflow-y-auto space-y-6">
          {/* Recipient Data */}
          <div className="border border-slate-200 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Recipient Data (Customer)</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-4">
              <div>
                <p className="text-xs text-slate-400 mb-1">Company Name</p>
                <p className="text-sm font-medium text-slate-800">Accountant Platform S.r.l.</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">VAT number</p>
                <p className="text-sm font-medium text-slate-800">IT12345678901</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-slate-400 mb-1">Registered Office Address</p>
                <p className="text-sm font-medium text-slate-800">Via Giuseppe Verdi 123, 20121 Milan (MI), Italy</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-slate-400 mb-1">SDI Recipient Code</p>
                <p className="text-sm font-medium text-slate-800">ABCDE12</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-slate-400 mb-1">PEC</p>
                <p className="text-sm font-medium text-slate-800">fatture@pec.accountantplatform.it</p>
              </div>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="bg-[#F8F9FF] border border-[#E0E7FF] rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Invoice Details</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-xs text-slate-400 mb-1">Reason / Description</p>
                <p className="text-sm font-medium text-slate-800 leading-tight">Referral Services - Commissions on Salon Memberships</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">Issue Date</p>
                <p className="text-sm font-medium text-slate-800">07/11/2025</p>
              </div>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Taxable Amount (Net)</span>
                <span className="font-semibold text-slate-800">€ 1,000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">IVA 22%</span>
                <span className="font-medium text-slate-800">€ 220</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-[#E0E7FF]">
              <span className="text-sm font-semibold text-slate-800">Invoice Total</span>
              <span className="text-lg font-bold text-[#635BFF]">€ 1,000</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Payment Methods</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Method</span>
                <span className="font-medium text-slate-800">Bank transfer</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Terms</span>
                <span className="font-medium text-slate-800">15 days from the invoice date</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Expected Deadline</span>
                <span className="font-medium text-slate-800">22/11/2025</span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-[#FFFDF0] border border-[#FEF08A] rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Important Notes</h3>
            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
              <li>The invoice must be electronic and sent via the Interchange System (SDI)</li>
              <li>Always indicate the Recipient Code or the recipient's PEC</li>
              <li>VAT applies at 22% (except for special regimes such as flat-rate tax)</li>
              <li>The invoice must be addressed to your registered VAT number</li>
              <li>Payment will be made within 15 working days of approval</li>
            </ul>
          </div>

          {/* Useful Resources */}
          <div className="bg-[#F8F9FA] border border-slate-100 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-slate-800 mb-3">Useful Resources</h3>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-[#635BFF] hover:underline">
                Revenue Agency: Electronic Invoicing
              </a>
              <a href="#" className="text-sm text-[#635BFF] hover:underline">
                FatturaPA: Guide to the Exchange System
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
