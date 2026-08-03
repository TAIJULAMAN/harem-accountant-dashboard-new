"use client";

import React, { useState } from "react";
import CustomAddButton from "../customComponent/CustomAddButton";
import SalonsFilters from "./SalonsFilters";
import SalonsTable from "./SalonsTable";
import Pagination from "../customComponent/Pagination";
import { salonsData, SalonInfo } from "./data";
import InviteSalonSuccessModal from "../modal/SuccessModal";
import InviteSalonModal from "../modal/InviteSalonModal/InviteSalonModal";
import ViewSalonModal from "../modal/ViewSalonModal/ViewSalonModal";

export default function MySalonsTab() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [sourceFilter, setSourceFilter] = useState("All");
  const [paymentFilter, setPaymentFilter] = useState("All Payments");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedSalon, setSelectedSalon] = useState<SalonInfo | null>(null);

  const itemsPerPage = 5;
  const totalItems = salonsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSalons = salonsData.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 animate-in fade-in duration-300">
        <div className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-xl font-semibold text-slate-800">My Salons</h2>
            <CustomAddButton
              label="Invite New Salon"
              onClick={() => setIsInviteModalOpen(true)}
            />
          </div>

          <SalonsFilters
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            sourceFilter={sourceFilter}
            setSourceFilter={setSourceFilter}
            paymentFilter={paymentFilter}
            setPaymentFilter={setPaymentFilter}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <SalonsTable
            salons={paginatedSalons}
            onView={(salon) => {
              setSelectedSalon(salon);
              setIsViewModalOpen(true);
            }}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            itemsName="items"
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      <InviteSalonModal
        isOpen={isInviteModalOpen}
        onClose={() => setIsInviteModalOpen(false)}
        onSuccess={() => {
          setIsInviteModalOpen(false);
          setIsSuccessModalOpen(true);
        }}
      />

      <InviteSalonSuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message="The invitation was sent successfully."
      />

      <ViewSalonModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        salon={selectedSalon}
      />
    </>
  );
}
