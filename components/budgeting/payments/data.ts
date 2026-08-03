export interface PaymentItem {
  id: string;
  paymentDate: string;
  client: { name: string; email: string };
  teamMember: { name: string; email: string };
  salon: string;
  method: "Cash" | "Card Terminal" | "Gift Card" | "Online Payment";
  status: "Fully Paid" | "Half Paid" | "Not Paid";
  receiptIssue: "Completed" | "Half Printed" | "Not Issued";
}

export interface ImportedPaymentItem {
  id: string;
  receiptNumber: string;
  date: string;
  clientRef: string;
  total: number;
  vat: number;
  discount: number;
  paymentMethod: "Cash" | "Credit Card" | "Online Payment";
}

export const paymentsMetrics = {
  totalSales: 643,
  paidWithReceipt: 428,
  notPaidNoReceipt: 565,
  paymentsCount: 5
};

export const filterOptions = {
  methods: ["All", "Cash", "Card Terminal", "Gift Card", "Online Payment"],
  paymentStatus: ["All", "Fully Paid", "Half Paid", "Not Paid"],
  receiptStatus: ["All", "Completed", "Half Completed", "Not Issued"]
};

export const paginationOptions = ["5", "10", "20"];

export const mockPayments: PaymentItem[] = [
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    method: "Cash",
    status: "Fully Paid",
    receiptIssue: "Completed"
  },
  {
    id: "#001",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    method: "Card Terminal",
    status: "Fully Paid",
    receiptIssue: "Not Issued"
  },
  {
    id: "#002",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    method: "Gift Card",
    status: "Half Paid",
    receiptIssue: "Half Printed"
  },
  {
    id: "#003",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    method: "Online Payment",
    status: "Not Paid",
    receiptIssue: "Not Issued"
  },
  {
    id: "#004",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    method: "Online Payment",
    status: "Not Paid",
    receiptIssue: "Not Issued"
  },
  {
    id: "#005",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    method: "Cash",
    status: "Half Paid",
    receiptIssue: "Half Printed"
  },
  {
    id: "#006",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    method: "Gift Card",
    status: "Fully Paid",
    receiptIssue: "Completed"
  },
  {
    id: "#007",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    method: "Card Terminal",
    status: "Fully Paid",
    receiptIssue: "Completed"
  },
  {
    id: "#008",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    method: "Card Terminal",
    status: "Fully Paid",
    receiptIssue: "Completed"
  }
];

export const mockImportedPayments: ImportedPaymentItem[] = [
  { id: "#001", receiptNumber: "7891234567895", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Cash" },
  { id: "#002", receiptNumber: "7891234567896", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Credit Card" },
  { id: "#003", receiptNumber: "7891234567895", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Online Payment" },
  { id: "#004", receiptNumber: "7891234567895", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Cash" },
  { id: "#005", receiptNumber: "7891234567895", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Cash" },
  { id: "#006", receiptNumber: "7891234567896", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Credit Card" },
  { id: "#007", receiptNumber: "7891234567895", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Online Payment" },
  { id: "#008", receiptNumber: "7891234567895", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Online Payment" },
  { id: "#009", receiptNumber: "7891234567895", date: "02/01/2025", clientRef: "#001", total: 270, vat: 70, discount: 70, paymentMethod: "Cash" }
];
