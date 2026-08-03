export interface Salon {
  id: string;
  name: string;
  pendingSalaries: number;
  pendingTaxes: number;
  status: "Over Budget" | "On Track";
  iconBg: string;
  iconColor: string;
}

export const salonsData: Salon[] = [
  {
    id: "1",
    name: "Glamour Beauty",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "Over Budget",
    iconBg: "bg-[#ffe8ec]",
    iconColor: "text-[#ff4b72]",
  },
  {
    id: "2",
    name: "Style Studio",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "On Track",
    iconBg: "bg-[#e2f9f0]",
    iconColor: "text-[#20c997]",
  },
  {
    id: "3",
    name: "Chic Hair & Beauty",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "On Track",
    iconBg: "bg-[#e2f9f0]",
    iconColor: "text-[#20c997]",
  },
  {
    id: "4",
    name: "Glamour Beauty",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "Over Budget",
    iconBg: "bg-[#ffe8ec]",
    iconColor: "text-[#ff4b72]",
  },
];
