import { Clock, Calendar, DollarSign, CheckCircle } from "lucide-react";

export const taxesKPICardsConfig = [
  {
    title: "Awaiting Approval",
    metricKey: "awaitingApproval",
    icon: Clock,
    iconBg: "bg-yellow-500",
    gradientColor: "#EAB308",
    subtext: "Avg. 2.1 days waiting",
  },
  {
    title: "Due Soon",
    metricKey: "dueSoon",
    icon: Calendar,
    iconBg: "bg-pink-500",
    gradientColor: "#EC4899",
    subtext: "Next 14 days",
  },
  {
    title: "Total Paid This Year",
    metricKey: "totalPaid",
    icon: DollarSign,
    iconBg: "bg-teal-400",
    gradientColor: "#2DD4BF",
    subtext: "15 payments",
  },
  {
    title: "Avg Approval Time",
    metricKey: "avgApprovalTime",
    icon: CheckCircle,
    iconBg: "bg-indigo-500",
    gradientColor: "#6366F1",
    subtext: "-0.3 days from last quarter",
  },
];

export const getTaxesMetrics = () => {
  return {
    awaitingApproval: 5,
    dueSoon: 3,
    totalPaid: 48200,
    avgApprovalTime: 1.8,
  };
};
