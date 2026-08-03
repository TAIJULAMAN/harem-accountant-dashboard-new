export interface CashierClosureRow {
  id: string;
  date: string;
  taxClosure: number;
  platformReceipts: number;
  difference: number;
  status: "Regular" | "Irregular";
}

export interface ReceiptRow {
  id: string;
  dateTime: string;
  client: { name: string; email: string };
  teamMember: { name: string; email: string };
  service: string;
  amount: number;
  paymentMethod?: string; // Keep for KPI filter mapping compatibility
}

export interface PaymentRow {
  id: string;
  paymentDate: string;
  client: { name: string; email: string };
  teamMember: { name: string; email: string };
  salon: string;
  methods: string[];
  status: "Fully Paid" | "Half Paid" | "Not Paid";
  amount: number;
}

// Select lists
export const dateOptions = ["All", "Today", "Last 7 Days", "Last 30 Days", "This Month", "Custom"];
export const employeeOptions = ["All", "Maria Rodriguez", "Sofia Bianchi", "Lucia Moretti", "Elena P.", "Clara S."];
export const servicesOptions = ["All", "Hair Cut", "Style Hair Cut", "Coloring", "Facial"];
export const paymentMethodOptions = ["All", "Cash", "Card Terminal", "Gif Card", "Online Payment"];

// KPI Widgets
export const initialKpis = {
  totalRevenue: 28450,
  averageReceipt: 42.50,
  uniqueCustomers: 342,
  servicesCount: 245,
  servicesRevenue: 10412.50,
  productsCount: 97,
  productsRevenue: 4122.50,
};

// Line Chart: Last 7 Days Trends / Last 12 Months
export const trendsData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  values: [1500, 1800, 2000, 2100, 2400, 2900, 3500, 3100, 3000, 2800, 2600, 2400],
};

// Bar Chart: Employee Performance
export const employeePerformanceData = {
  labels: ["Maria R.", "Sofia B.", "Lucia M.", "Elena P.", "Clara S."],
  values: [230, 160, 280, 180, 50],
};

// Doughnut Chart: Most Requested Services
export const requestedServicesData = {
  labels: ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5", "Service-6", "Service 7"],
  values: [35, 25, 20, 15, 12, 10, 8],
  colors: ["#3b82f6", "#06b6d4", "#eab308", "#10b981", "#ec4899", "#22c55e", "#1e293b"],
};

// Doughnut Chart: Revenue Distribution
export const revenueDistributionData = {
  labels: ["Services (€ 0)", "Products (€ 0)"],
  values: [75, 25],
  colors: ["#3b82f6", "#10b981"],
};

// Table Data: Cashier Closures
export const initialCashierClosures: CashierClosureRow[] = [
  { id: "1", date: "04 Oct 2025", taxClosure: 278, platformReceipts: 278, difference: 0, status: "Regular" },
  { id: "2", date: "04 Oct 2025", taxClosure: 278, platformReceipts: 278, difference: 0, status: "Regular" },
  { id: "3", date: "04 Oct 2025", taxClosure: 278, platformReceipts: 278, difference: 0, status: "Regular" },
  { id: "4", date: "04 Oct 2025", taxClosure: 278, platformReceipts: 278, difference: 0, status: "Regular" },
  { id: "5", date: "04 Oct 2025", taxClosure: 278, platformReceipts: 278, difference: 25, status: "Irregular" },
];

// Table Data: Latest Receipts (Maria Rodriguez rows from screenshot)
export const initialLatestReceipts: ReceiptRow[] = [
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Cash"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Card Terminal"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Card Terminal"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Online Payment"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Online Payment"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Style Hair Cut",
    amount: 278,
    paymentMethod: "Cash"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Gif Card"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Card Terminal"
  },
  {
    id: "#000",
    dateTime: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    service: "Hair Cut",
    amount: 278,
    paymentMethod: "Card Terminal"
  }
];

// Table Data: Payments (Matching the second screenshot columns and pills)
export const initialPayments: PaymentRow[] = [
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    methods: ["Cash"],
    status: "Fully Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    methods: ["Card Terminal"],
    status: "Fully Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    methods: ["Gif Card"],
    status: "Half Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    methods: ["Online Payment"],
    status: "Not Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    methods: ["Online Payment"],
    status: "Not Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    methods: ["Cash"],
    status: "Half Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    methods: ["Gif Card", "Cash"],
    status: "Fully Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Style Studio",
    methods: ["Card Terminal"],
    status: "Fully Paid",
    amount: 278
  },
  {
    id: "#000",
    paymentDate: "5 Aug 2025, 12:30",
    client: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    teamMember: { name: "Maria Rodriguez", email: "maria@beautywellness.com" },
    salon: "Glamour Beauty",
    methods: ["Card Terminal"],
    status: "Fully Paid",
    amount: 278
  }
];
