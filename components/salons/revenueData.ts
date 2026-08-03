export interface RevenueCardData {
  title: string;
  amount: number;
  description: string;
  type: "success" | "primary" | "danger" | "warning";
}

export const revenueCardsData: RevenueCardData[] = [
  {
    title: "This Month",
    amount: 0,
    description: "Accrued relegations",
    type: "success",
  },
  {
    title: "Next 30 Days",
    amount: 1500,
    description: "Waiting for renewals",
    type: "primary",
  },
  {
    title: "Total Lifetime",
    amount: 1500,
    description: "All relegations",
    type: "danger",
  },
  {
    title: "Withdrawable Balance",
    amount: 1500,
    description: "Available for payout",
    type: "warning",
  },
];

export interface BreakdownData {
  id: number;
  salonName: string;
  email: string;
  avatarImage: string;
  plan: string;
  planDetails: string;
  share: string;
  lastPayment: string;
  lastPaymentDate: string;
  nextRenewal: string;
  nextRenewalDate: string;
  lifetime: string;
}

export const breakdownData: BreakdownData[] = [
  {
    id: 1,
    salonName: "Beauty Wellness Center",
    email: "roberto@beautywellness.com",
    avatarImage: "/RecentActivity/RecentActivity1.png",
    plan: "Premium",
    planDetails: "Annual • €2,000.00 /year",
    share: "€ 600",
    lastPayment: "€ 600",
    lastPaymentDate: "Dec 01, 2024",
    nextRenewal: "€ 600",
    nextRenewalDate: "Dec 01, 2024",
    lifetime: "€ 600",
  },
  {
    id: 2,
    salonName: "Bella Vista Salon",
    email: "maria@bellavista.com",
    avatarImage: "/RecentActivity/RecentActivity2.png",
    plan: "Premium",
    planDetails: "Annual • €2,000.00 /year",
    share: "€ 600",
    lastPayment: "€ 600",
    lastPaymentDate: "Dec 01, 2024",
    nextRenewal: "€ 600",
    nextRenewalDate: "Dec 01, 2024",
    lifetime: "€ 600",
  },
];

export interface TransactionData {
  id: number;
  date: string;
  salonName: string;
  email: string;
  avatarImage: string;
  grossAmount: string;
  share: string;
  lifetime: string;
  status: "Expected" | "Paid";
  note: string;
}

export const transactionsData: TransactionData[] = [
  {
    id: 1,
    date: "Feb 19, 2025",
    salonName: "Beauty Wellness Center",
    email: "roberto@beautywellness.com",
    avatarImage: "/RecentActivity/RecentActivity1.png",
    grossAmount: "€ 3,000",
    share: "€ 600",
    lifetime: "€ 600",
    status: "Expected",
    note: "Next renewal",
  },
  {
    id: 2,
    date: "Feb 19, 2025",
    salonName: "Bella Vista Salon",
    email: "maria@bellavista.com",
    avatarImage: "/RecentActivity/RecentActivity2.png",
    grossAmount: "€ 3,000",
    share: "€ 600",
    lifetime: "€ 600",
    status: "Paid",
    note: "INV-2024-02-003",
  },
];
