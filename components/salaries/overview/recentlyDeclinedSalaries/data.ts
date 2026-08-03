export interface DeclinedSalary {
  name: string;
  salon: string;
  reason: string;
  time: string;
  avatar: string;
}

export const declinedSalariesData: DeclinedSalary[] = [
  {
    name: "Jane Doe",
    salon: "Glamour Beauty",
    reason: "Incorrect gross amount",
    time: "2 days ago",
    avatar: "/avatar/avatar.png",
  },
  {
    name: "John Smith",
    salon: "Style Studio",
    reason: "Missing TFR calculation",
    time: "5 days ago",
    avatar: "/avatar/avatar1.png",
  },
  {
    name: "Maria Garcia",
    salon: "Chic Hair",
    reason: "Monthly budget exceeded by 15%",
    time: "1 week ago",
    avatar: "/avatar/avatar2.png",
  },
];
