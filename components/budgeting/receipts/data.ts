export interface ReceiptItem {
  id: string;
  date: string;
  client: { name: string; email: string };
  salon: string;
  amount: number;
  method: string[];
  status: "Issued" | "Draft" | "Canceled";
}

export const receiptsKpis = {
  total: 947,
  media: 118.38,
  receiptsCount: 9,
  uniqueCustomers: 1,
};

export const filterDateOptions = ["All Time", "Today", "Last 7 Days", "Last 30 Days", "This Month"];
export const filterEmployeeOptions = ["All Employees", "Maria Rodriguez", "Sofia Bianchi", "Lucia Moretti"];
export const filterServiceOptions = ["All Services", "Hair Cut", "Style Hair Cut", "Coloring"];
export const filterMethodOptions = ["All Methods", "Cash", "Card Terminal", "Gif Card", "Online Payment"];

export const mockReceipts: ReceiptItem[] = [
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    amount: 2300,
    method: ["Cash"],
    status: "Issued",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    amount: 2300,
    method: ["Card Terminal"],
    status: "Issued",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    amount: 2300,
    method: ["Gif Card"],
    status: "Draft",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    amount: 2300,
    method: ["Online Payment"],
    status: "Canceled",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    amount: 2300,
    method: ["Online Payment"],
    status: "Canceled",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    amount: 2300,
    method: ["Cash"],
    status: "Draft",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    amount: 2300,
    method: ["Gif Card", "Cash"],
    status: "Issued",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    amount: 2300,
    method: ["Card Terminal"],
    status: "Issued",
  },
  {
    id: "#000",
    date: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    amount: 2300,
    method: ["Card Terminal"],
    status: "Issued",
  },
];
