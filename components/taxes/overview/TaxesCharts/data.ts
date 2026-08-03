type TaxObligation = { month: string; total: number };
type AverageReceipt = { month: string; revenue: number; taxes: number };

const generateTaxObligations = (baseValue: number): TaxObligation[] => [
  { month: "Jan", total: baseValue * 0.8 },
  { month: "Feb", total: baseValue * 1.1 },
  { month: "Mar", total: baseValue * 1.3 },
  { month: "Apr", total: baseValue * 2.1 },
  { month: "May", total: baseValue * 1.5 },
  { month: "Jun", total: baseValue * 1.2 },
  { month: "Jul", total: baseValue * 1.3 },
  { month: "Aug", total: baseValue * 1.8 },
  { month: "Sep", total: baseValue * 2.2 },
  { month: "Oct", total: baseValue * 1.9 },
  { month: "Nov", total: baseValue * 1.4 },
  { month: "Dec", total: baseValue * 2.0 },
];

const generateAverageReceipts = (revBase: number, taxBase: number): AverageReceipt[] => [
  { month: "Jan", revenue: revBase * 1.0, taxes: taxBase * 1.0 },
  { month: "Feb", revenue: revBase * 1.1, taxes: taxBase * 1.1 },
  { month: "Mar", revenue: revBase * 1.2, taxes: taxBase * 1.2 },
  { month: "Apr", revenue: revBase * 0.9, taxes: taxBase * 0.8 },
  { month: "May", revenue: revBase * 1.25, taxes: taxBase * 1.4 },
  { month: "Jun", revenue: revBase * 1.1, taxes: taxBase * 1.1 },
  { month: "Jul", revenue: revBase * 1.3, taxes: taxBase * 1.5 },
  { month: "Aug", revenue: revBase * 1.2, taxes: taxBase * 1.3 },
  { month: "Sep", revenue: revBase * 1.4, taxes: taxBase * 1.6 },
  { month: "Oct", revenue: revBase * 1.3, taxes: taxBase * 1.4 },
  { month: "Nov", revenue: revBase * 1.5, taxes: taxBase * 1.7 },
  { month: "Dec", revenue: revBase * 1.6, taxes: taxBase * 1.8 },
];

export const taxObligationsDataByYear: Record<string, TaxObligation[]> = {
  "2024": generateTaxObligations(1200),
  "2025": generateTaxObligations(1500),
  "2026": generateTaxObligations(1800),
};

export const averageReceiptTrendDataByYear: Record<string, AverageReceipt[]> = {
  "2024": generateAverageReceipts(10000, 2000),
  "2025": generateAverageReceipts(12000, 2500),
  "2026": generateAverageReceipts(14000, 2800),
};
