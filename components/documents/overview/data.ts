import { Users, FileText, FileSignature, Receipt } from "lucide-react";

export const statCards = [
  {
    title: "Employee Notices",
    value: "24",
    icon: Users,
    bgColor: "bg-gradient-to-b from-[#F8C209]/[0.13] to-[#F8C209]/[0.03]",
    iconBgColor: "bg-[#F8C209]",
    iconColor: "text-white",
  },
  {
    title: "Contracts",
    value: "18",
    icon: FileText,
    bgColor: "bg-gradient-to-b from-[#22c55e]/[0.13] to-[#22c55e]/[0.03]",
    iconBgColor: "bg-[#22c55e]",
    iconColor: "text-white",
  },
  {
    title: "Owner Documents",
    value: "12",
    icon: FileSignature,
    bgColor: "bg-gradient-to-b from-[#635BFF]/[0.12] to-[#635BFF]/[0.03]",
    iconBgColor: "bg-[#635BFF]",
    iconColor: "text-white",
  },
  {
    title: "Receipts",
    value: "156",
    icon: Receipt,
    bgColor: "bg-gradient-to-b from-[#16CDC7]/[0.13] to-[#16CDC7]/[0.03]",
    iconBgColor: "bg-[#16CDC7]",
    iconColor: "text-white",
  },
];

export const getDocTypeData = (filter: string) => {
  const dataMap: Record<string, number[]> = {
    Daily: [25, 25, 25, 25],
    Weekly: [40, 20, 15, 25],
    Monthly: [30, 35, 10, 25],
  };
  const centerTextMap: Record<string, string> = {
    Daily: "10",
    Weekly: "45",
    Monthly: "128",
  };

  return {
    labels: ["Notices", "Contracts", "Receipts", "Others"],
    datasets: [
      {
        data: dataMap[filter] || dataMap["Daily"],
        backgroundColor: ["#facc15", "#22c55e", "#06b6d4", "#8b5cf6"],
        borderWidth: 0,
        hoverOffset: 4,
        cutout: "86%",
        centerText: centerTextMap[filter] || "10",
      },
    ],
  };
};

export const getNoticesData = (filter: string) => {
  const dataMap: Record<string, number[]> = {
    Daily: [50, 50],
    Weekly: [70, 30],
    Monthly: [45, 55],
  };
  const centerTextMap: Record<string, string> = {
    Daily: "2",
    Weekly: "14",
    Monthly: "64",
  };

  return {
    labels: ["Unread", "Read"],
    datasets: [
      {
        data: dataMap[filter] || dataMap["Daily"],
        backgroundColor: ["#facc15", "#22c55e"],
        borderWidth: 0,
        hoverOffset: 4,
        cutout: "86%",
        centerText: centerTextMap[filter] || "2",
      },
    ],
  };
};

export const getContractsData = (filter: string) => {
  const dataMap: Record<string, number[][]> = {
    Daily: [[20, 5, 2], [35, 35, 35]],
    Weekly: [[45, 15, 8], [70, 70, 70]],
    Monthly: [[120, 30, 15], [180, 180, 180]],
  };

  const selectedData = dataMap[filter] || dataMap["Daily"];
  const maxVal = filter === "Daily" ? 35 : filter === "Weekly" ? 70 : 180;

  return {
    labels: [["Active", "Contracts"], ["Expiring", "Soon"], "Expired"],
    datasets: [
      {
        label: "Data",
        data: selectedData[0],
        backgroundColor: ["#22c55e", "#facc15", "#f43f5e"],
        borderRadius: 12,
        maxBarThickness: 65,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
        borderSkipped: false as const,
        zIndex: 2,
      },
      {
        label: "Background",
        data: selectedData[1],
        backgroundColor: "#f8fafc",
        borderRadius: 12,
        maxBarThickness: 65,
        barPercentage: 0.6,
        categoryPercentage: 0.8,
        borderSkipped: false as const,
        grouped: false,
        zIndex: 1,
        tooltip: {
          callbacks: {
            label: () => "",
          },
        },
      },
    ],
  };
};
