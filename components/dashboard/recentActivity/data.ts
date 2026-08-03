export interface Activity {
  id: string;
  title: string;
  salon: string;
  reason: string;
  priority: "High" | "Medium" | "Low";
  date: string;
  avatarImg: string;
}

export const activitiesData: Activity[] = [
  {
    id: "1",
    title: "Salary declined for Jane Doe",
    salon: "Glamour Beauty",
    reason: "Reason: Incorrect gross amount calculation",
    priority: "High",
    date: "Oct 28, 10:01 AM",
    avatarImg: "/RecentActivity/RecentActivity1.png",
  },
  {
    id: "2",
    title: "Tax document approved",
    salon: "Style Studio",
    reason: "VAT Q3 2025 has been approved by owner",
    priority: "Low",
    date: "Oct 28, 10:01 AM",
    avatarImg: "/RecentActivity/RecentActivity2.png",
  },
  {
    id: "3",
    title: "Budget exceeded",
    salon: "Glamour Beauty",
    reason: "Monthly budget exceeded by 15%",
    priority: "Medium",
    date: "Oct 28, 10:01 AM",
    avatarImg: "/RecentActivity/RecentActivity1.png",
  },
];
