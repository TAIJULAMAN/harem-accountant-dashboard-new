import { useState } from "react";
import { mockReceipts, ReceiptItem } from "../data";

export function useReceiptsManagement() {
  const [activeView, setActiveView] = useState<"list" | "detail">("list");
  const [selectedReceipt, setSelectedReceipt] = useState<ReceiptItem | null>(
    null,
  );
  const [selectedDate, setSelectedDate] = useState("All Time");
  const [selectedEmployee, setSelectedEmployee] = useState("All Employees");
  const [selectedService, setSelectedService] = useState("All Services");
  const [selectedMethod, setSelectedMethod] = useState("All Methods");
  const [searchQuery, setSearchQuery] = useState("");

  const handleViewReceipt = (receipt: ReceiptItem) => {
    setSelectedReceipt(receipt);
    setActiveView("detail");
  };

  const handleBackToList = () => {
    setActiveView("list");
    setSelectedReceipt(null);
  };

  const filteredReceipts = mockReceipts.filter((r) => {
    if (
      searchQuery &&
      !r.client.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !r.salon.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (selectedMethod !== "All Methods") {
      if (!r.method.includes(selectedMethod)) return false;
    }
    return true;
  });

  return {
    activeView,
    selectedReceipt,
    selectedDate,
    setSelectedDate,
    selectedEmployee,
    setSelectedEmployee,
    selectedService,
    setSelectedService,
    selectedMethod,
    setSelectedMethod,
    searchQuery,
    setSearchQuery,
    handleViewReceipt,
    handleBackToList,
    filteredReceipts,
  };
}
