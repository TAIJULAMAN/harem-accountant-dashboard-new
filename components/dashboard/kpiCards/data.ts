export interface CardData {
  title: string;
  value: string;
  subtext: string;
  change: string | null;
  iconType: "salaries" | "taxes" | "deadlines" | "warnings";
  bgClass: string;
  iconBgClass: string;
}

export const kpiDataBySalon: Record<string, CardData[]> = {
  "Glamour Beauty": [
    {
      title: "Salaries Pending Approval",
      value: "5",
      subtext: "2 overdue",
      change: "+8.5% from last month",
      iconType: "salaries",
      bgClass: "bg-gradient-to-b from-[#fffbeb] to-white border-[#fef3c7]/20",
      iconBgClass: "bg-[#fab005]",
    },
    {
      title: "Taxes Pending Approval",
      value: "2",
      subtext: "1 overdue",
      change: "-5% from last month",
      iconType: "taxes",
      bgClass: "bg-gradient-to-b from-[#e6fcf5] to-white border-[#c3fae8]/20",
      iconBgClass: "bg-[#0ca678]",
    },
    {
      title: "Upcoming Deadlines",
      value: "3",
      subtext: "Next 14 days",
      change: null,
      iconType: "deadlines",
      bgClass: "bg-gradient-to-b from-[#f3f0ff] to-white border-[#e5dbff]/20",
      iconBgClass: "bg-[#5c7cfa]",
    },
    {
      title: "Budget Warnings",
      value: "1",
      subtext: "Salon over budget",
      change: "+15% from last month",
      iconType: "warnings",
      bgClass: "bg-gradient-to-b from-[#fff0f6] to-white border-[#ffdeeb]/20",
      iconBgClass: "bg-[#f06595]",
    },
  ],
  "Style Studio": [
    {
      title: "Salaries Pending Approval",
      value: "5",
      subtext: "1 overdue",
      change: "+12.0% from last month",
      iconType: "salaries",
      bgClass: "bg-gradient-to-b from-[#fffbeb] to-white border-[#fef3c7]/20",
      iconBgClass: "bg-[#fab005]",
    },
    {
      title: "Taxes Pending Approval",
      value: "2",
      subtext: "0 overdue",
      change: "-15% from last month",
      iconType: "taxes",
      bgClass: "bg-gradient-to-b from-[#e6fcf5] to-white border-[#c3fae8]/20",
      iconBgClass: "bg-[#0ca678]",
    },
    {
      title: "Upcoming Deadlines",
      value: "3",
      subtext: "Next 14 days",
      change: null,
      iconType: "deadlines",
      bgClass: "bg-gradient-to-b from-[#f3f0ff] to-white border-[#e5dbff]/20",
      iconBgClass: "bg-[#5c7cfa]",
    },
    {
      title: "Budget Warnings",
      value: "1",
      subtext: "Salon on track",
      change: "-5% from last month",
      iconType: "warnings",
      bgClass: "bg-gradient-to-b from-[#fff0f6] to-white border-[#ffdeeb]/20",
      iconBgClass: "bg-[#f06595]",
    },
  ],
  "Chic Hair & Beauty": [
    {
      title: "Salaries Pending Approval",
      value: "5",
      subtext: "0 overdue",
      change: "+2.5% from last month",
      iconType: "salaries",
      bgClass: "bg-gradient-to-b from-[#fffbeb] to-white border-[#fef3c7]/20",
      iconBgClass: "bg-[#fab005]",
    },
    {
      title: "Taxes Pending Approval",
      value: "2",
      subtext: "0 overdue",
      change: "-2% from last month",
      iconType: "taxes",
      bgClass: "bg-gradient-to-b from-[#e6fcf5] to-white border-[#c3fae8]/20",
      iconBgClass: "bg-[#0ca678]",
    },
    {
      title: "Upcoming Deadlines",
      value: "2",
      subtext: "Next 14 days",
      change: null,
      iconType: "deadlines",
      bgClass: "bg-gradient-to-b from-[#f3f0ff] to-white border-[#e5dbff]/20",
      iconBgClass: "bg-[#5c7cfa]",
    },
    {
      title: "Budget Warnings",
      value: "1",
      subtext: "Salon on track",
      change: "0% from last month",
      iconType: "warnings",
      bgClass: "bg-gradient-to-b from-[#fff0f6] to-white border-[#ffdeeb]/20",
      iconBgClass: "bg-[#f06595]",
    },
  ],
  "All Salons": [
    {
      title: "Salaries Pending Approval",
      value: "12",
      subtext: "3 overdue",
      change: "+18.5% from last month",
      iconType: "salaries",
      bgClass: "bg-gradient-to-b from-[#fffbeb] to-white border-[#fef3c7]/20",
      iconBgClass: "bg-[#fab005]",
    },
    {
      title: "Taxes Pending Approval",
      value: "5",
      subtext: "1 overdue",
      change: "-10% from last month",
      iconType: "taxes",
      bgClass: "bg-gradient-to-b from-[#e6fcf5] to-white border-[#c3fae8]/20",
      iconBgClass: "bg-[#0ca678]",
    },
    {
      title: "Upcoming Deadlines",
      value: "8",
      subtext: "Next 14 days",
      change: null,
      iconType: "deadlines",
      bgClass: "bg-gradient-to-b from-[#f3f0ff] to-white border-[#e5dbff]/20",
      iconBgClass: "bg-[#5c7cfa]",
    },
    {
      title: "Budget Warnings",
      value: "3",
      subtext: "Salons over budget",
      change: "+50% from last month",
      iconType: "warnings",
      bgClass: "bg-gradient-to-b from-[#fff0f6] to-white border-[#ffdeeb]/20",
      iconBgClass: "bg-[#f06595]",
    },
  ],
};

export const defaultKpiData = kpiDataBySalon["All Salons"];
