import { useState } from "react";
import {
  initialExpensesData,
  ExpenseTransaction,
  NewExpenseInput,
} from "../data";

export function useExpenseManagement() {
  const [expenses, setExpenses] =
    useState<ExpenseTransaction[]>(initialExpensesData);
  const [viewType, setViewType] = useState<"list" | "grid">("list");

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSalon, setSelectedSalon] = useState("All Salons");
  const [selectedMacroCategory, setSelectedMacroCategory] =
    useState("All Categories");
  const [selectedCategory, setSelectedCategory] = useState("All Subcategories");
  const [selectedSupplier, setSelectedSupplier] = useState("All Suppliers");
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("All Methods");

  // Modals state
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isExceededOpen, setIsExceededOpen] = useState(false);
  const [isAttachOpen, setIsAttachOpen] = useState(false);
  const [activeTxId, setActiveTxId] = useState<string | null>(null);
  const [pendingExpense, setPendingExpense] = useState<NewExpenseInput | null>(
    null,
  );
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [activeViewTx, setActiveViewTx] = useState<ExpenseTransaction | null>(
    null,
  );
  const [viewingAttachmentTx, setViewingAttachmentTx] =
    useState<ExpenseTransaction | null>(null);

  // Filter Logic
  const filteredExpenses = expenses.filter((tx) => {
    // Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = tx.salon.name.toLowerCase().includes(q);
      const matchSupplier = tx.supplier.toLowerCase().includes(q);
      const matchNote = (tx.note || "").toLowerCase().includes(q);
      const matchCat = tx.category.toLowerCase().includes(q);
      if (!matchName && !matchSupplier && !matchNote && !matchCat) {
        return false;
      }
    }

    // Salon Dropdown
    if (selectedSalon !== "All Salons" && tx.salon.name !== selectedSalon) {
      return false;
    }

    // Macro Category
    if (
      selectedMacroCategory !== "All Categories" &&
      tx.macroCategory !== selectedMacroCategory
    ) {
      return false;
    }

    // Category
    if (
      selectedCategory !== "All Subcategories" &&
      tx.category !== selectedCategory
    ) {
      return false;
    }

    // Supplier
    if (
      selectedSupplier !== "All Suppliers" &&
      tx.supplier !== selectedSupplier
    ) {
      return false;
    }

    // Payment Method
    if (
      selectedPaymentMethod !== "All Methods" &&
      tx.paymentMethod !== selectedPaymentMethod
    ) {
      return false;
    }

    // Date (Simple startsWith check since dates are formatted "02/01/2025...")
    if (
      selectedDate &&
      !tx.date.startsWith(selectedDate.split("-").reverse().join("/"))
    ) {
      // Input date is YYYY-MM-DD, transaction date is DD/MM/YYYY
      const parts = selectedDate.split("-"); // [YYYY, MM, DD]
      if (parts.length === 3) {
        const formattedDateInput = `${parts[2]}/${parts[1]}/${parts[0]}`;
        if (!tx.date.startsWith(formattedDateInput)) {
          return false;
        }
      }
    }

    return true;
  });

  // Action Operations
  const handleView = (id: string) => {
    const tx = expenses.find((e) => e.id === id);
    if (tx) {
      setActiveViewTx(tx);
      setIsViewOpen(true);
    }
  };

  const handleEdit = (id: string) => {
    const tx = expenses.find((e) => e.id === id);
    if (tx) {
      const newCost = prompt(
        `Edit cost for ${tx.salon.name} - ${tx.macroCategory}:`,
        tx.cost.toString(),
      );
      if (newCost !== null) {
        const costNum = parseFloat(newCost);
        if (!isNaN(costNum)) {
          setExpenses((prev) =>
            prev.map((e) => (e.id === id ? { ...e, cost: costNum } : e)),
          );
        }
      }
    }
  };

  const handleAttachOpen = (id: string) => {
    setActiveTxId(id);
    setIsAttachOpen(true);
  };

  const handleAttachSave = (fileName: string) => {
    if (activeTxId) {
      setExpenses((prev) =>
        prev.map((e) =>
          e.id === activeTxId
            ? { ...e, hasAttachment: true, attachmentName: fileName }
            : e,
        ),
      );
    }
    setIsAttachOpen(false);
    setActiveTxId(null);
  };

  const handleViewAttachment = (id: string) => {
    const tx = expenses.find((e) => e.id === id);
    if (tx && tx.attachmentName) {
      setViewingAttachmentTx(tx);
    }
  };

  const handleDownloadAttachment = (id: string) => {
    const tx = expenses.find((e) => e.id === id);
    if (tx && tx.attachmentName) {
      alert(
        `[Attachment Download Started]\n\nDownloaded file: ${tx.attachmentName}`,
      );
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      setExpenses((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleAddSave = (expenseData: NewExpenseInput) => {
    if (expenseData.cost > 5000) {
      setPendingExpense(expenseData);
      setIsAddOpen(false);
      setIsExceededOpen(true);
    } else {
      saveNewExpense(expenseData);
      setIsAddOpen(false);
    }
  };

  const saveNewExpense = (data: NewExpenseInput) => {
    const newTx: ExpenseTransaction = {
      id: `exp-${Date.now()}`,
      date: data.date,
      salon: {
        name: data.payee || "Glamour Beauty",
        avatar: "/avatar/avatar.png",
      },
      macroCategory: data.macroCategory as ExpenseTransaction["macroCategory"],
      category: data.category,
      cost: data.cost,
      supplier: data.location || "Supplier Name",
      paymentMethod: data.paymentMethod as ExpenseTransaction["paymentMethod"],
      note: data.note || "Added via form",
      hasAttachment: data.hasAttachment,
      attachmentName: data.attachmentName,
    };
    setExpenses((prev) => [newTx, ...prev]);
  };

  const handleConfirmExceeded = () => {
    if (pendingExpense) {
      saveNewExpense(pendingExpense);
      setPendingExpense(null);
    }
    setIsExceededOpen(false);
  };

  return {
    viewType,
    setViewType,
    searchQuery,
    setSearchQuery,
    selectedDate,
    setSelectedDate,
    selectedSalon,
    setSelectedSalon,
    selectedMacroCategory,
    setSelectedMacroCategory,
    selectedCategory,
    setSelectedCategory,
    selectedSupplier,
    setSelectedSupplier,
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    isAddOpen,
    setIsAddOpen,
    isExceededOpen,
    setIsExceededOpen,
    isAttachOpen,
    setIsAttachOpen,
    activeTxId,
    setActiveTxId,
    pendingExpense,
    setPendingExpense,
    isViewOpen,
    setIsViewOpen,
    activeViewTx,
    setActiveViewTx,
    viewingAttachmentTx,
    setViewingAttachmentTx,
    filteredExpenses,
    handleView,
    handleEdit,
    handleAttachOpen,
    handleAttachSave,
    handleViewAttachment,
    handleDownloadAttachment,
    handleDelete,
    handleAddSave,
    handleConfirmExceeded,
  };
}
