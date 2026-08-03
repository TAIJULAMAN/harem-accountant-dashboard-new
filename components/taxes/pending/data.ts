export type TaxStatus = "Pending" | "Declined";

export interface PendingTax {
  id: string;
  taxType: string;
  salon: string;
  logo?: string;
  period: string;
  amount: string;
  dueDate: string;
  status: TaxStatus;
}

export const pendingTaxesData: PendingTax[] = [
  {
    id: "1",
    taxType: "VAT",
    salon: "Glamour Beauty",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "December 2024",
    amount: "€ 4,200.00",
    dueDate: "Dec 01, 2024",
    status: "Declined",
  },
  {
    id: "2",
    taxType: "Income Tax",
    salon: "Chic Hair & Beauty",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "December 2024",
    amount: "€ 4,200.00",
    dueDate: "Dec 01, 2024",
    status: "Pending",
  },
  {
    id: "3",
    taxType: "Corporate Tax",
    salon: "Urban Elegance",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "November 2024",
    amount: "€ 8,500.00",
    dueDate: "Nov 05, 2024",
    status: "Declined",
  },
  {
    id: "4",
    taxType: "VAT",
    salon: "Luxe Lounge",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "November 2024",
    amount: "€ 3,100.00",
    dueDate: "Nov 10, 2024",
    status: "Pending",
  },
  {
    id: "5",
    taxType: "Sales Tax",
    salon: "Radiant Salon",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "October 2024",
    amount: "€ 1,250.00",
    dueDate: "Oct 12, 2024",
    status: "Pending",
  },
  {
    id: "6",
    taxType: "Income Tax",
    salon: "Style Studio",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "October 2024",
    amount: "€ 5,400.00",
    dueDate: "Oct 15, 2024",
    status: "Pending",
  },
  {
    id: "7",
    taxType: "VAT",
    salon: "Glamour Beauty",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "September 2024",
    amount: "€ 4,100.00",
    dueDate: "Sep 01, 2024",
    status: "Declined",
  },
  {
    id: "8",
    taxType: "Corporate Tax",
    salon: "Chic Hair & Beauty",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "September 2024",
    amount: "€ 7,200.00",
    dueDate: "Sep 05, 2024",
    status: "Declined",
  },
  {
    id: "9",
    taxType: "Sales Tax",
    salon: "Urban Elegance",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "August 2024",
    amount: "€ 1,450.00",
    dueDate: "Aug 12, 2024",
    status: "Pending",
  },
  {
    id: "10",
    taxType: "Income Tax",
    salon: "Luxe Lounge",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "August 2024",
    amount: "€ 4,800.00",
    dueDate: "Aug 20, 2024",
    status: "Declined",
  },
];
