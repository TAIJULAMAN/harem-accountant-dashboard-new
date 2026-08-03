export interface PayoutData {
  id: number;
  requestDate: string;
  amount: string;
  invoiceNo: string;
  status: "Paid" | "Pending";
  paymentDate: string;
  note: string;
}

export const payoutsData: PayoutData[] = [
  {
    id: 1,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Paid",
    paymentDate: "01 set 2024, 11:30",
    note: "-",
  },
  {
    id: 2,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Paid",
    paymentDate: "01 set 2024, 11:30",
    note: "-",
  },
  {
    id: 3,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Paid",
    paymentDate: "01 set 2024, 11:30",
    note: "-",
  },
  {
    id: 4,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Pending",
    paymentDate: "-",
    note: "-",
  },
  {
    id: 5,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Pending",
    paymentDate: "-",
    note: "-",
  },
  {
    id: 6,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Pending",
    paymentDate: "-",
    note: "-",
  },
  {
    id: 7,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Pending",
    paymentDate: "-",
    note: "-",
  },
  {
    id: 8,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Pending",
    paymentDate: "-",
    note: "-",
  },
  {
    id: 9,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Pending",
    paymentDate: "-",
    note: "-",
  },
  {
    id: 10,
    requestDate: "25 ago 2024, 07:00",
    amount: "€ 850",
    invoiceNo: "PAYOUT-2024-08-001",
    status: "Pending",
    paymentDate: "-",
    note: "-",
  },
];
