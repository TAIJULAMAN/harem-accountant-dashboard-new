export interface KPICardData {
  title: string;
  value: string;
  trend: string;
  trendType: "up" | "down" | "neutral";
  subtitle: string;
  colorType: "purple" | "pink" | "teal" | "yellow";
}

export interface UpcomingPaymentData {
  id: string;
  initial: string;
  name: string;
  description: string;
  amount: string;
  date: string;
  avatarBg: string;
}

export interface TransactionData {
  id: string;
  date: string;
  salon: {
    name: string;
    logoUrl?: string;
    avatar: string;
  };
  macroCategory:
    | "Internet"
    | "HR"
    | "Consumables"
    | "Products"
    | "Taxes"
    | "Services"
    | "Utilities";
  category: string;
  cost: string;
  supplier: string;
  paymentMethod: "Cash" | "Credit Card" | "Online" | "Terminal";
}

export const kpiCardsData: KPICardData[] = [
  {
    title: "Total Monthly Expenses",
    value: "€ 23,850",
    trend: "+12.5%",
    trendType: "up",
    subtitle: "from last month",
    colorType: "purple",
  },
  {
    title: "Highest Expense of the Month",
    value: "€ 5,535.52",
    trend: "Products - HR - Glamour Beauty",
    trendType: "neutral",
    subtitle: "",
    colorType: "pink",
  },
  {
    title: "Total Number of Transactions",
    value: "23",
    trend: "+10.5%",
    trendType: "up",
    subtitle: "from last month",
    colorType: "teal",
  },
  {
    title: "Average Daily Spending",
    value: "€ 435",
    trend: "-10%",
    trendType: "down",
    subtitle: "from last month",
    colorType: "yellow",
  },
];

export const totalMonthlyExpensesData = {
  labels: [
    "Products",
    "Consumables",
    "Services",
    "HR",
    "Taxes",
    "Internet",
    "Utilities",
  ],
  values: [6500, 2500, 3000, 7200, 3100, 550, 1000],
  colors: [
    "#7048e8",
    "#0ca678",
    "#f08c00",
    "#5c60f5",
    "#e64980",
    "#2f9e44",
    "#334155",
  ],
};

export const upcomingPaymentsDataByMonth: Record<
  string,
  UpcomingPaymentData[]
> = {
  February: [
    {
      id: "feb-1",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 435",
      date: "08/02/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
    {
      id: "feb-2",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 435",
      date: "08/02/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
    {
      id: "feb-3",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 435",
      date: "08/02/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
  ],
  January: [
    {
      id: "jan-1",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 310",
      date: "12/01/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
    {
      id: "jan-2",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 150",
      date: "20/01/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
  ],
  March: [
    {
      id: "mar-1",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 520",
      date: "05/03/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
    {
      id: "mar-2",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 250",
      date: "11/03/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
    {
      id: "mar-3",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 410",
      date: "19/03/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
    {
      id: "mar-4",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 380",
      date: "25/03/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
  ],
  April: [
    {
      id: "apr-1",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 450",
      date: "08/04/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
  ],
  May: [
    {
      id: "may-1",
      initial: "W",
      name: "Wella",
      description: "Products • Glamour...",
      amount: "€ 600",
      date: "15/05/2025",
      avatarBg: "bg-amber-100 text-amber-600",
    },
  ],
  June: [],
};

// Fallback list
export const upcomingPaymentsData = upcomingPaymentsDataByMonth.February;

export const dailySpendingTrendsDataByFilter: Record<
  string,
  { labels: string[]; values: number[] }
> = {
  Daily: {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    values: [1200, 1300, 1400, 7000, 1100, 1300, 2000],
  },
  Weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [15000, 18000, 12000, 22000],
  },
  Monthly: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    values: [45000, 52000, 49000, 61000, 58000, 65000],
  },
};

export const dailySpendingTrendsData = dailySpendingTrendsDataByFilter.Daily;

export const salonExpensesDataByFilter: Record<
  string,
  { labels: string[]; values: number[] }
> = {
  Daily: {
    labels: ["Salon 1", "Salon 2", "Salon 3", "Salon 4", "Salon 5", "Salon 6"],
    values: [2500, 1800, 4200, 3500, 1500, 3800],
  },
  Weekly: {
    labels: ["Salon 1", "Salon 2", "Salon 3", "Salon 4", "Salon 5", "Salon 6"],
    values: [12000, 9000, 21000, 17500, 7500, 19000],
  },
  Monthly: {
    labels: ["Salon 1", "Salon 2", "Salon 3", "Salon 4", "Salon 5", "Salon 6"],
    values: [48000, 36000, 84000, 70000, 30000, 76000],
  },
};

export const salonExpensesData = salonExpensesDataByFilter.Daily;

export const paymentMethodsDataByFilter: Record<
  string,
  { labels: string[]; values: number[]; colors: string[]; centerText: string }
> = {
  Daily: {
    labels: ["Gift Card", "Cash", "Online Payment", "Card Terminal"],
    values: [50045, 100091, 225206, 125116], // Sum is 500,458
    colors: ["#7048e8", "#0ca678", "#5c60f5", "#f08c00"],
    centerText: "$500,458",
  },
  Weekly: {
    labels: ["Gift Card", "Cash", "Online Payment", "Card Terminal"],
    values: [250000, 450000, 950000, 550000],
    colors: ["#7048e8", "#0ca678", "#5c60f5", "#f08c00"],
    centerText: "$2,200,000",
  },
  Monthly: {
    labels: ["Gift Card", "Cash", "Online Payment", "Card Terminal"],
    values: [1200000, 2100000, 4500000, 2200000],
    colors: ["#7048e8", "#0ca678", "#5c60f5", "#f08c00"],
    centerText: "$10,000,000",
  },
};

export const paymentMethodsData = paymentMethodsDataByFilter.Daily;

export const expensesMacroCategoriesDataByFilter: Record<
  string,
  { labels: string[]; values: number[]; colors: string[] }
> = {
  Daily: {
    labels: [
      "Products",
      "Consumables",
      "Services",
      "HR",
      "Taxes",
      "Internet",
      "Utilities",
    ],
    values: [6500, 2500, 3000, 7200, 3100, 550, 1000],
    colors: [
      "#7048e8",
      "#0ca678",
      "#f08c00",
      "#5c60f5",
      "#e64980",
      "#2f9e44",
      "#334155",
    ],
  },
  Weekly: {
    labels: [
      "Products",
      "Consumables",
      "Services",
      "HR",
      "Taxes",
      "Internet",
      "Utilities",
    ],
    values: [32000, 12500, 15000, 36000, 15500, 2750, 5000],
    colors: [
      "#7048e8",
      "#0ca678",
      "#f08c00",
      "#5c60f5",
      "#e64980",
      "#2f9e44",
      "#334155",
    ],
  },
  Monthly: {
    labels: [
      "Products",
      "Consumables",
      "Services",
      "HR",
      "Taxes",
      "Internet",
      "Utilities",
    ],
    values: [130000, 50000, 60000, 144000, 62000, 11000, 20000],
    colors: [
      "#7048e8",
      "#0ca678",
      "#f08c00",
      "#5c60f5",
      "#e64980",
      "#2f9e44",
      "#334155",
    ],
  },
};

export const expensesMacroCategoriesData =
  expensesMacroCategoriesDataByFilter.Daily;

export const expensesCategoriesDataByFilter: Record<
  string,
  { labels: string[]; values: number[] }
> = {
  Products: {
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
      "Category 6",
    ],
    values: [4500, 3200, 5800, 3900, 1200, 1100],
  },
  Services: {
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
      "Category 6",
    ],
    values: [3000, 4200, 2800, 5100, 1900, 2500],
  },
  Salons: {
    labels: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
      "Category 6",
    ],
    values: [5500, 2100, 4800, 2900, 3200, 4100],
  },
};

export const expensesCategoriesData = expensesCategoriesDataByFilter.Products;

export const expensesSupplierDataByFilter: Record<
  string,
  { labels: string[]; values: number[] }
> = {
  Daily: {
    labels: [
      "Supplier 1",
      "Supplier 2",
      "Supplier 3",
      "Supplier 4",
      "Supplier 5",
      "Supplier 6",
      "Supplier 7",
    ],
    values: [1200, 1300, 1400, 900, 1150, 1200, 2000],
  },
  Weekly: {
    labels: [
      "Supplier 1",
      "Supplier 2",
      "Supplier 3",
      "Supplier 4",
      "Supplier 5",
      "Supplier 6",
      "Supplier 7",
    ],
    values: [6000, 6500, 7000, 4500, 5750, 6000, 10000],
  },
  Monthly: {
    labels: [
      "Supplier 1",
      "Supplier 2",
      "Supplier 3",
      "Supplier 4",
      "Supplier 5",
      "Supplier 6",
      "Supplier 7",
    ],
    values: [24000, 26000, 28000, 18000, 23000, 24000, 40000],
  },
};

export const expensesSupplierData = expensesSupplierDataByFilter.Daily;

export const latestTransactionsData: TransactionData[] = [
  {
    id: "tx-1",
    date: "02/01/2025 17:00",
    salon: { name: "Glamour Beauty", avatar: "/avatar/avatar.png" },
    macroCategory: "Internet",
    category: "Category 1",
    cost: "€ 5,535.52",
    supplier: "Supplier Name",
    paymentMethod: "Cash",
  },
  {
    id: "tx-2",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar1.png" },
    macroCategory: "HR",
    category: "Category 1",
    cost: "€ 5,535.52",
    supplier: "Supplier Name",
    paymentMethod: "Cash",
  },
  {
    id: "tx-3",
    date: "02/01/2025 17:00",
    salon: {
      name: "Glamour Beauty",
      avatar: "/avatar/avatar2.png",
    },
    macroCategory: "Consumables",
    category: "Category 1",
    cost: "€ 5,535.52",
    supplier: "Supplier Name",
    paymentMethod: "Cash",
  },
  {
    id: "tx-4",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar3.png" },
    macroCategory: "Products",
    category: "Category 1",
    cost: "€ 5,535.52",
    supplier: "Supplier Name",
    paymentMethod: "Terminal",
  },
  {
    id: "tx-5",
    date: "02/01/2025 17:00",
    salon: {
      name: "Glamour Beauty",
      avatar: "/avatar/avatar.png",
    },
    macroCategory: "Internet",
    category: "Category 1",
    cost: "€ 5,535.52",
    supplier: "Supplier Name",
    paymentMethod: "Terminal",
  },
  {
    id: "tx-6",
    date: "02/01/2025 17:00",
    salon: {
      name: "Glamour Beauty",
      avatar: "/avatar/avatar1.png",
    },
    macroCategory: "Utilities",
    category: "Category 2",
    cost: "€ 1,200.00",
    supplier: "Supplier Name",
    paymentMethod: "Online",
  },
  {
    id: "tx-7",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar2.png" },
    macroCategory: "Taxes",
    category: "Category 3",
    cost: "€ 3,100.00",
    supplier: "Supplier Name",
    paymentMethod: "Cash",
  },
  {
    id: "tx-8",
    date: "02/01/2025 17:00",
    salon: {
      name: "Glamour Beauty",
      avatar: "/avatar/avatar3.png",
    },
    macroCategory: "Services",
    category: "Category 1",
    cost: "€ 850.00",
    supplier: "Supplier Name",
    paymentMethod: "Online",
  },
  {
    id: "tx-9",
    date: "02/01/2025 17:00",
    salon: { name: "Style Studio", avatar: "/avatar/avatar.png" },
    macroCategory: "Consumables",
    category: "Category 4",
    cost: "€ 435.00",
    supplier: "Supplier Name",
    paymentMethod: "Terminal",
  },
  {
    id: "tx-10",
    date: "02/01/2025 17:00",
    salon: {
      name: "Glamour Beauty",
      avatar: "/avatar/avatar1.png",
    },
    macroCategory: "HR",
    category: "Category 5",
    cost: "€ 1,500.00",
    supplier: "Supplier Name",
    paymentMethod: "Cash",
  },
];
