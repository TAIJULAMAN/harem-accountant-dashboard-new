export type TaxHistoryStatus = "Approved" | "Declined" | "Cancelled";

export interface TaxHistoryRecord {
  id: string;
  taxType: string;
  salon: string;
  logo?: string;
  period: string;
  amount: string;
  paidDate: string;
  status: TaxHistoryStatus;
}

export const taxHistoryData: TaxHistoryRecord[] = [
  {
    id: "1",
    taxType: "VAT",
    salon: "Glamour Beauty",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "December 2024",
    amount: "€ 4,200.00",
    paidDate: "Dec 01, 2024",
    status: "Approved",
  },
  {
    id: "2",
    taxType: "Income Tax",
    salon: "Chic Hair & Beauty",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "December 2024",
    amount: "€ 4,200.00",
    paidDate: "Dec 01, 2024",
    status: "Approved",
  },
  {
    id: "3",
    taxType: "Corporate Tax",
    salon: "Urban Elegance",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "November 2024",
    amount: "€ 8,500.00",
    paidDate: "Nov 05, 2024",
    status: "Declined",
  },
  {
    id: "4",
    taxType: "VAT",
    salon: "Luxe Lounge",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "November 2024",
    amount: "€ 3,100.00",
    paidDate: "Nov 10, 2024",
    status: "Approved",
  },
  {
    id: "5",
    taxType: "Sales Tax",
    salon: "Radiant Salon",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "October 2024",
    amount: "€ 1,250.00",
    paidDate: "Oct 12, 2024",
    status: "Cancelled",
  },
  {
    id: "6",
    taxType: "Income Tax",
    salon: "Style Studio",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "October 2024",
    amount: "€ 5,400.00",
    paidDate: "Oct 15, 2024",
    status: "Approved",
  },
  {
    id: "7",
    taxType: "VAT",
    salon: "Glamour Beauty",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "September 2024",
    amount: "€ 4,100.00",
    paidDate: "Sep 01, 2024",
    status: "Approved",
  },
  {
    id: "8",
    taxType: "Corporate Tax",
    salon: "Chic Hair & Beauty",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "September 2024",
    amount: "€ 7,200.00",
    paidDate: "Sep 05, 2024",
    status: "Declined",
  },
  {
    id: "9",
    taxType: "Sales Tax",
    salon: "Urban Elegance",
    logo: "/RecentActivity/RecentActivity1.png",
    period: "August 2024",
    amount: "€ 1,450.00",
    paidDate: "Aug 12, 2024",
    status: "Approved",
  },
  {
    id: "10",
    taxType: "Income Tax",
    salon: "Luxe Lounge",
    logo: "/RecentActivity/RecentActivity2.png",
    period: "August 2024",
    amount: "€ 4,800.00",
    paidDate: "Aug 20, 2024",
    status: "Approved",
  },
];
