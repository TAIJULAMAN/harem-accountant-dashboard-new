export interface SalariesMetrics {
  awaitingApproval: number;
  recentlyDeclined: number;
  processedThisMonth: number;
  processedCount: number;
  avgTime: string;
}

export const baseSalariesMetrics: SalariesMetrics = {
  awaitingApproval: 12,
  recentlyDeclined: 3,
  processedThisMonth: 127450,
  processedCount: 43,
  avgTime: "2.3",
};

export const getScaledSalariesMetrics = (
  selectedSalon: string,
): SalariesMetrics => {
  let factor = 1.0;
  switch (selectedSalon) {
    case "Glamour Beauty":
      factor = 0.4;
      break;
    case "Style Studio":
      factor = 0.3;
      break;
    case "Chic Hair & Beauty":
      factor = 0.2;
      break;
    case "All Salons":
    default:
      factor = 1.0;
      break;
  }

  return {
    awaitingApproval:
      Math.round(baseSalariesMetrics.awaitingApproval * factor) || 2,
    recentlyDeclined:
      Math.round(baseSalariesMetrics.recentlyDeclined * factor) || 1,
    processedThisMonth: Math.round(
      baseSalariesMetrics.processedThisMonth * factor,
    ),
    processedCount:
      Math.round(baseSalariesMetrics.processedCount * factor) || 8,
    avgTime: factor === 1.0 ? "2.3" : (2.3 + (factor - 0.5)).toFixed(1),
  };
};

export interface SalariesKPICardConfig {
  title: string;
  subtext: string;
  change?: string;
  iconSrc: string;
  iconAlt: string;
  bgClass: string;
  iconBg: string;
  gradientColor: string;
  metricKey: keyof SalariesMetrics;
}

export const salariesKPICardsConfig: SalariesKPICardConfig[] = [
  {
    title: "Awaiting Approval",
    subtext: "Avg. 3.5 days waiting",
    change: "+2 from last week",
    iconSrc: "/icons/AwaitingApproval.svg",
    iconAlt: "Awaiting Approval",
    bgClass: "border-[#F8C209]/20",
    iconBg: "bg-[#F8C209]/15",
    gradientColor: "#F8C209",
    metricKey: "awaitingApproval",
  },
  {
    title: "Recently Declined",
    subtext: "Last 30 days",
    change: "-1 from last month",
    iconSrc: "/icons/RecentlyDeclined.svg",
    iconAlt: "Recently Declined",
    bgClass: "border-[#FF6692]/20",
    iconBg: "bg-[#FF6692]/15",
    gradientColor: "#FF6692",
    metricKey: "recentlyDeclined",
  },
  {
    title: "Processed This Month",
    subtext: "salaries",
    change: "+€12,300 from last month",
    iconSrc: "/icons/ProcessedThisMonth.svg",
    iconAlt: "Processed This Month",
    bgClass: "border-[#16CDC7]/20",
    iconBg: "bg-[#16CDC7]/15",
    gradientColor: "#16CDC7",
    metricKey: "processedThisMonth",
  },
  {
    title: "Avg Processing Time",
    subtext: "-0.5 days from last month",
    change: "Down from 2.8 days",
    iconSrc: "/icons/AvgProcessingTime.svg",
    iconAlt: "Avg Processing Time",
    bgClass: "border-[#635BFF]/20",
    iconBg: "bg-[#635BFF]/15",
    gradientColor: "#635BFF",
    metricKey: "avgTime",
  },
];
