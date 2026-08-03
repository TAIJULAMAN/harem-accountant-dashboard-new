export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  salon: string;
  type: "error" | "warning" | "success" | "info";
  isRead: boolean;
}

export const mockNotifications: NotificationItem[] = [
  {
    id: "1",
    title: "Salary declined for Jane Doe",
    description: "Incorrect gross amount calculation. Awaiting correction and resubmission.",
    time: "Oct 28, 10:01 AM",
    salon: "Glamour Beauty",
    type: "error",
    isRead: false,
  },
  {
    id: "2",
    title: "Budget warning: Glamour Beauty",
    description: "Monthly operating budget exceeded by 15% for salaries and supplies.",
    time: "Oct 28, 10:01 AM",
    salon: "Glamour Beauty",
    type: "warning",
    isRead: false,
  },
  {
    id: "3",
    title: "Tax document approved",
    description: "VAT Q3 2025 has been approved by the salon owner.",
    time: "Oct 28, 10:01 AM",
    salon: "Style Studio",
    type: "success",
    isRead: true,
  },
  {
    id: "4",
    title: "Compliance audit pending",
    description: "Awaiting local tax authority sign-off on annual compliance documents.",
    time: "Oct 26, 09:30 AM",
    salon: "Style Studio",
    type: "info",
    isRead: true,
  },
  {
    id: "5",
    title: "Upcoming deadline: Tax filing",
    description: "Q4 tax declaration submission deadline in next 14 days.",
    time: "Oct 24, 02:15 PM",
    salon: "Chic Hair & Beauty",
    type: "warning",
    isRead: false,
  },
];
