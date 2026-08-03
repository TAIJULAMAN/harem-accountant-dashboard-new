"use client";

import React, { useState } from "react";
import InvitationsSentTable from "./InvitationsSentTable";
import { mockInvitations } from "./data";
import CustomSelect from "../customComponent/CustomSelect";
import CustomSearch from "../customComponent/CustomSearch";
import Pagination from "../customComponent/Pagination";

type StatusType = "All" | "Pending" | "Accepted" | "Rejected" | "Expired";

export default function InvitationsSentTab() {
  const [activeStatus, setActiveStatus] = useState<StatusType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const statuses: StatusType[] = [
    "All",
    "Pending",
    "Accepted",
    "Rejected",
    "Expired",
  ];

  const handleStatusChange = (val: StatusType) => {
    setActiveStatus(val);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const filteredInvitations = mockInvitations.filter((inv) => {
    const matchesStatus =
      activeStatus === "All" || inv.status === activeStatus;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      inv.salonName.toLowerCase().includes(searchLower) ||
      inv.email.toLowerCase().includes(searchLower);
    return matchesStatus && matchesSearch;
  });

  const itemsPerPage = 5;
  const totalItems = filteredInvitations.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedInvitations = filteredInvitations.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 animate-in fade-in duration-300">
      <h2 className="text-lg font-bold text-slate-800 mb-6">
        Invitations Sent
      </h2>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="w-full sm:w-48">
          <CustomSelect
            label="STATUS"
            value={activeStatus}
            options={statuses as string[]}
            onChange={(val) => handleStatusChange(val as StatusType)}
          />
        </div>

        <div className="w-full sm:w-72 mt-4 sm:mt-0 self-end">
          <CustomSearch
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
          />
        </div>
      </div>

      <InvitationsSentTable invitations={paginatedInvitations} />
      
      {totalPages > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          itemsName="invitations"
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
