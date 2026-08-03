import { useState } from "react";
import { CashierClosureRow } from "../data";

export function useIncomeManagement() {
  const [selectedDate, setSelectedDate] = useState("All");
  const [selectedEmployee, setSelectedEmployee] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("All");

  const [activeModal, setActiveModal] = useState<
    "revenue" | "average" | "closure" | null
  >(null);
  const [selectedClosure, setSelectedClosure] =
    useState<CashierClosureRow | null>(null);

  const handleOpenRevenueModal = () => setActiveModal("revenue");
  const handleOpenAverageModal = () => setActiveModal("average");
  const handleOpenClosureModal = (row: CashierClosureRow) => {
    setSelectedClosure(row);
    setActiveModal("closure");
  };
  const handleCloseModal = () => {
    setActiveModal(null);
    if (activeModal === "closure") {
      setSelectedClosure(null);
    }
  };

  return {
    selectedDate,
    setSelectedDate,
    selectedEmployee,
    setSelectedEmployee,
    selectedService,
    setSelectedService,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    activeModal,
    setActiveModal,
    selectedClosure,
    setSelectedClosure,
    handleOpenRevenueModal,
    handleOpenAverageModal,
    handleOpenClosureModal,
    handleCloseModal,
  };
}
