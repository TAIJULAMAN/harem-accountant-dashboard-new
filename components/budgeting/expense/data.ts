export interface NewExpenseInput {
  cost: number;
  paymentMethod: string;
  date: string;
  macroCategory: string;
  category: string;
  warranty: string;
  location: string;
  payee: string;
  note: string;
  hasAttachment: boolean;
  attachmentName?: string;
}

export interface ExpenseTransaction {
  id: string;
  date: string;
  salon: {
    name: string;
    avatar: string;
  };
  macroCategory: "Internet" | "HR" | "Consumables" | "Products" | "Taxes" | "Services" | "Utilities";
  category: string;
  cost: number; // Storing as number for filter operations/math
  supplier: string;
  paymentMethod: "Cash" | "Credit Card" | "Online Payment" | "Terminal";
  note?: string;
  hasAttachment?: boolean;
  attachmentName?: string;
}

export const salonOptions = ["All", "Glamour Beauty", "Style Studio", "Chic Hair & Beauty"];
export const macroCategoryOptions = [
  "All",
  "Internet",
  "HR",
  "Consumables",
  "Products",
  "Taxes",
  "Services",
  "Utilities",
];
export const categoryOptions = ["All", "Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];
export const supplierOptions = ["All", "Supplier Name", "Supplier A", "Supplier B", "Supplier C"];
export const paymentMethodOptions = ["All", "Cash", "Credit Card", "Online Payment", "Terminal"];

export const initialExpensesData: ExpenseTransaction[] = [
  {
    id: "exp-1",
    date: "02/01/2025 17:00",
    salon: { name: "Glamour Beauty", avatar: "/avatar/avatar.png" },
    macroCategory: "Internet",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Cash",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "receipt_internet.pdf",
  },
  {
    id: "exp-2",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar1.png" },
    macroCategory: "Products",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Credit Card",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "invoice_products.pdf",
  },
  {
    id: "exp-3",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar2.png" },
    macroCategory: "Taxes",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Credit Card",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "tax_receipt.pdf",
  },
  {
    id: "exp-4",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar3.png" },
    macroCategory: "Services",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Online Payment",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "service_invoice.pdf",
  },
  {
    id: "exp-5",
    date: "02/01/2025 17:00",
    salon: { name: "Glamour Beauty", avatar: "/avatar/avatar.png" },
    macroCategory: "Utilities",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Online Payment",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "utility_bill.pdf",
  },
  {
    id: "exp-6",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar1.png" },
    macroCategory: "HR",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Cash",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "hr_salary_rec.pdf",
  },
  {
    id: "exp-7",
    date: "02/01/2025 17:00",
    salon: { name: "Glamour Beauty", avatar: "/avatar/avatar2.png" },
    macroCategory: "Consumables",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Cash",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "consumables_rec.pdf",
  },
  {
    id: "exp-8",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar3.png" },
    macroCategory: "Products",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Credit Card",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "wella_products.pdf",
  },
  {
    id: "exp-9",
    date: "02/01/2025 17:00",
    salon: { name: "Glamour Beauty", avatar: "/avatar/avatar.png" },
    macroCategory: "Internet",
    category: "Category 1",
    cost: 5535.52,
    supplier: "Supplier Name",
    paymentMethod: "Credit Card",
    note: "Lorem Ipsum",
    hasAttachment: true,
    attachmentName: "internet_invoice_feb.pdf",
  },
];
