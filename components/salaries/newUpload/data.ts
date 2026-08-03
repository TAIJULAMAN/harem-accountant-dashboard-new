export interface SalonItem {
  name: string;
  image: string;
}

export interface ExtractedSalary {
  id: string;
  employeeName: string;
  period: string;
  causale: string;
  netSalary: number;
  deemed: number;
  grossSalary: number;
  trfThisYear: number;
  trfPrevYears: number;
  cf: string;
  confidence: number; // e.g. 71 for 71%
  mapped: boolean;
  vendor: string;
  status: "Review" | "Approved";
  tfrMonthly?: string;
  totalTfrAmount?: string;
  avatar?: string;
}

export const salonList: SalonItem[] = [
  {
    name: "Glamour Beauty",
    image: "/RecentActivity/RecentActivity1.png",
  },
  {
    name: "Style Studio",
    image: "/RecentActivity/RecentActivity2.png",
  },
  {
    name: "Chic Hair & Beauty",
    image: "/RecentActivity/RecentActivity1.png",
  },
];

export const mockSalaries: ExtractedSalary[] = [
  {
    id: "1",
    employeeName: "Angelica",
    period: "07/2025",
    causale: "Stipendio Luglio 2025",
    netSalary: 780.00,
    deemed: 141.33,
    grossSalary: 921.38,
    trfThisYear: 921.38,
    trfPrevYears: 14116,
    cf: "SLNLC87W6W88WJ",
    confidence: 71,
    mapped: false,
    vendor: "OSRA/Wolters Kluwer",
    status: "Review",
    avatar: "/avatar/avatar.png",
  },
  {
    id: "2",
    employeeName: "Angelica",
    period: "07/2025",
    causale: "Stipendio Luglio 2025",
    netSalary: 780.00,
    deemed: 141.33,
    grossSalary: 921.38,
    trfThisYear: 921.38,
    trfPrevYears: 14116,
    cf: "SLNLC87W6W88WJ",
    confidence: 71,
    mapped: false,
    vendor: "OSRA/Wolters Kluwer",
    status: "Review",
    avatar: "/avatar/avatar1.png",
  },
  {
    id: "3",
    employeeName: "Angelica",
    period: "07/2025",
    causale: "Stipendio Luglio 2025",
    netSalary: 780.00,
    deemed: 141.33,
    grossSalary: 921.38,
    trfThisYear: 921.38,
    trfPrevYears: 14116,
    cf: "SLNLC87W6W88WJ",
    confidence: 71,
    mapped: false,
    vendor: "OSRA/Wolters Kluwer",
    status: "Review",
    avatar: "/avatar/avatar2.png",
  },
  {
    id: "4",
    employeeName: "Angelica",
    period: "07/2025",
    causale: "Stipendio Luglio 2025",
    netSalary: 780.00,
    deemed: 141.33,
    grossSalary: 921.38,
    trfThisYear: 921.38,
    trfPrevYears: 14116,
    cf: "SLNLC87W6W88WJ",
    confidence: 71,
    mapped: false,
    vendor: "OSRA/Wolters Kluwer",
    status: "Review",
    avatar: "/avatar/avatar3.png",
  },
  {
    id: "5",
    employeeName: "Angelica",
    period: "07/2025",
    causale: "Stipendio Luglio 2025",
    netSalary: 780.00,
    deemed: 141.33,
    grossSalary: 921.38,
    trfThisYear: 921.38,
    trfPrevYears: 14116,
    cf: "SLNLC87W6W88WJ",
    confidence: 71,
    mapped: false,
    vendor: "OSRA/Wolters Kluwer",
    status: "Review",
    avatar: "/avatar/avatar.png",
  },
  {
    id: "6",
    employeeName: "Angelica",
    period: "07/2025",
    causale: "Stipendio Luglio 2025",
    netSalary: 780.00,
    deemed: 141.33,
    grossSalary: 921.38,
    trfThisYear: 921.38,
    trfPrevYears: 14116,
    cf: "SLNLC87W6W88WJ",
    confidence: 71,
    mapped: false,
    vendor: "OSRA/Wolters Kluwer",
    status: "Review",
    avatar: "/avatar/avatar1.png",
  },
];
