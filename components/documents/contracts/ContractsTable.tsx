"use client";

import React, { useState, useEffect, useRef } from "react";
import { MoreVertical, Edit2, Download, MinusCircle } from "lucide-react";
import Pagination from "@/components/customComponent/Pagination";
import { mockContracts, Contract } from "./data";
import TerminateContractModal from "./TerminateContractModal";
import ModifyContractModal from "./ModifyContractModal";
import SuccessModal from "@/components/modal/SuccessModal";
import Image from "next/image";

export default function ContractsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [contracts, setContracts] = useState<Contract[]>(mockContracts);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [terminatingContract, setTerminatingContract] =
    useState<Contract | null>(null);
  const [modifyingContract, setModifyingContract] = useState<Contract | null>(
    null,
  );
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [successModalTitle, setSuccessModalTitle] = useState("Success!");
  const [successModalMessage, setSuccessModalMessage] = useState("");
  const dropdownRef = useRef<HTMLTableCellElement | null>(null);

  const totalPages = Math.ceil(contracts.length / itemsPerPage);
  const paginatedData = contracts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleDownload = (contract: Contract) => {
    const content = `CONTRACT AGREEMENT
==================
Contract ID: ${contract.id}
Employee: ${contract.employee.name}
Salon: ${contract.salon.name}
Type: ${contract.type}
Start Date: ${contract.startDate}
End Date: ${contract.endDate}
Status: ${contract.status}
------------------
Generated on: ${new Date().toLocaleDateString()}
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `contract_${contract.employee.name.toLowerCase().replace(/\s+/g, "_")}_${contract.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setSuccessModalTitle("Download Started!");
    setSuccessModalMessage(
      `The contract file for ${contract.employee.name} has been downloaded.`,
    );
    setIsSuccessModalOpen(true);
    setActiveDropdown(null);
  };

  const getTypeBadgeStyles = (type: string) => {
    switch (type) {
      case "Full Time":
        return "border border-[#22c55e] text-[#22c55e]";
      case "Part Time":
        return "border border-[#8b5cf6] text-[#8b5cf6]";
      case "Vat collaboration":
        return "border border-[#facc15] text-[#facc15]";
      case "Stage":
        return "border border-[#f43f5e] text-[#f43f5e]";
      default:
        return "border border-slate-200 text-slate-500";
    }
  };

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-[#22c55e] text-white";
      case "Inactive":
        return "bg-[#f43f5e] text-white";
      case "Pending":
        return "bg-[#facc15] text-white";
      default:
        return "bg-slate-200 text-slate-700";
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-100 overflow-hidden">
        <div className="overflow-x-auto min-h-[380px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-slate-100">
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Employee
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Salon
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Type
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Start Date
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  End Date
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-5 text-xs font-bold text-slate-700 whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedData.map((contract) => (
                <tr
                  key={contract.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        width={24}
                        height={24}
                        src={contract.employee.avatar}
                        alt="avatar"
                        className="w-10 h-10 rounded-xl object-cover bg-slate-100 shadow-sm"
                      />
                      <div className="text-sm font-bold text-slate-700">
                        {contract.employee.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        width={24}
                        height={24}
                        src={contract.salon.logo}
                        alt="salon"
                        className="w-8 h-8 rounded-lg object-cover shadow-sm"
                      />
                      <div className="text-sm font-medium text-slate-500">
                        {contract.salon.name}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-bold ${getTypeBadgeStyles(contract.type)}`}
                    >
                      {contract.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">
                    {contract.startDate}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-600">
                    {contract.endDate}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-bold ${getStatusBadgeStyles(contract.status)}`}
                    >
                      {contract.status}
                    </div>
                  </td>
                  <td
                    className="px-6 py-4 relative"
                    onClick={(e) => e.stopPropagation()}
                    ref={activeDropdown === contract.id ? dropdownRef : null}
                  >
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === contract.id ? null : contract.id,
                        )
                      }
                      className="p-1 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors cursor-pointer"
                    >
                      <MoreVertical size={20} />
                    </button>

                    {activeDropdown === contract.id && (
                      <div className="absolute right-6 top-10 w-36 bg-white border border-slate-100 rounded-xl shadow-xl z-20 py-2 animate-in fade-in zoom-in-95 duration-100">
                        <button
                          onClick={() => {
                            setActiveDropdown(null);
                            setModifyingContract(contract);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
                        >
                          <Edit2 size={12} className="text-[#8b5cf6]" /> Modify
                        </button>
                        <button
                          onClick={() => handleDownload(contract)}
                          className="w-full text-left px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
                        >
                          <Download size={12} className="text-[#20c997]" />{" "}
                          Download
                        </button>
                        <button
                          onClick={() => {
                            setActiveDropdown(null);
                            setTerminatingContract(contract);
                          }}
                          className="w-full text-left px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors cursor-pointer"
                        >
                          <MinusCircle size={12} className="text-[#f43f5e]" />{" "}
                          Terminate
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={contracts.length}
          onPageChange={setCurrentPage}
        />
      </div>

      <TerminateContractModal
        isOpen={!!terminatingContract}
        onClose={() => setTerminatingContract(null)}
        onConfirm={() => {
          if (terminatingContract) {
            setContracts((prev) =>
              prev.map((c) =>
                c.id === terminatingContract.id
                  ? { ...c, status: "Inactive" }
                  : c,
              ),
            );
          }
          setSuccessModalTitle("Success!");
          setSuccessModalMessage("Contract terminated successfully.");
          setIsSuccessModalOpen(true);
        }}
      />

      <ModifyContractModal
        key={modifyingContract?.id || "none"}
        isOpen={!!modifyingContract}
        contract={modifyingContract}
        onClose={() => setModifyingContract(null)}
        onConfirm={(updatedContract) => {
          setContracts((prev) =>
            prev.map((c) =>
              c.id === updatedContract.id ? updatedContract : c,
            ),
          );
          setSuccessModalTitle("Updated!");
          setSuccessModalMessage("Contract modified successfully.");
          setIsSuccessModalOpen(true);
        }}
      />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title={successModalTitle}
        message={successModalMessage}
      />
    </>
  );
}
