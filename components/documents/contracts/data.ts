export interface Contract {
  id: string;
  employee: {
    name: string;
    avatar: string;
  };
  salon: {
    name: string;
    logo: string;
  };
  type: "Full Time" | "Part Time" | "Vat collaboration" | "Stage";
  startDate: string;
  endDate: string;
  status: "Active" | "Inactive" | "Pending";
}

export const mockContracts: Contract[] = [
  {
    id: "1",
    employee: { name: "Maria Rodriguez", avatar: "/avatar/avatar.png" },
    salon: {
      name: "Chic Hair & Beauty",
      logo: "/RecentActivity/RecentActivity1.png",
    },
    type: "Full Time",
    startDate: "Jan 14, 2024",
    endDate: "Dec 30, 2025",
    status: "Active",
  },
  {
    id: "2",
    employee: {
      name: "Maria Rodriguez",
      avatar: "/avatar/avatar1.png",
    },
    salon: {
      name: "Style Studio",
      logo: "/RecentActivity/RecentActivity2.png",
    },
    type: "Part Time",
    startDate: "Jan 14, 2024",
    endDate: "Dec 30, 2025",
    status: "Inactive",
  },
  {
    id: "3",
    employee: {
      name: "Maria Rodriguez",
      avatar: "/avatar/avatar2.png",
    },
    salon: {
      name: "Style Studio",
      logo: "/RecentActivity/RecentActivity1.png",
    },
    type: "Part Time",
    startDate: "Jan 14, 2024",
    endDate: "Dec 30, 2025",
    status: "Pending",
  },
  {
    id: "4",
    employee: {
      name: "Maria Rodriguez",
      avatar: "/avatar/avatar3.png",
    },
    salon: {
      name: "Chic Hair & Beauty",
      logo: "/RecentActivity/RecentActivity1.png",
    },
    type: "Vat collaboration",
    startDate: "Jan 14, 2024",
    endDate: "Dec 30, 2025",
    status: "Active",
  },
  {
    id: "5",
    employee: {
      name: "Maria Rodriguez",
      avatar: "/avatar/avatar.png",
    },
    salon: {
      name: "Chic Hair & Beauty",
      logo: "/RecentActivity/RecentActivity1.png",
    },
    type: "Stage",
    startDate: "Jan 14, 2024",
    endDate: "Dec 30, 2025",
    status: "Active",
  },
  {
    id: "6",
    employee: {
      name: "Maria Rodriguez",
      avatar: "/avatar/avatar1.png",
    },
    salon: {
      name: "Chic Hair & Beauty",
      logo: "/RecentActivity/RecentActivity1.png",
    },
    type: "Full Time",
    startDate: "Feb 01, 2024",
    endDate: "Jan 31, 2026",
    status: "Active",
  },
];

export const metricData = {
  activeContracts: 18,
  expiringSoon: 3,
  expired: 2,
};
