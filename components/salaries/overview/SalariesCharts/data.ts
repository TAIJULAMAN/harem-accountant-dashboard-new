// ─── Area Chart (Monthly Salary Expenditures) ────────────────────────────────

export const payrollMonths = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

// Base expenditure values per year
const expendituresByYear: Record<string, number[]> = {
  "2024": [2500, 4000, 3300, 2700, 3000, 3200, 3800, 3300, 3100, 4200, 5100, 5900],
  "2025": [3000, 4800, 3900, 3100, 3500, 3800, 4500, 3900, 3700, 5000, 6000, 7000],
  "2026": [3600, 5700, 4700, 3700, 4200, 4600, 5400, 4700, 4400, 6000, 7200, 8400],
};

export const getExpendituresData = (selectedYear: string): number[] =>
  expendituresByYear[selectedYear] ?? expendituresByYear["2025"];

// Y-axis max for expenditures chart
export const EXPENDITURES_Y_MAX = 14000;

// ─── Bar Chart (Salary Distribution) ─────────────────────────────────────────

export const distributionBrackets = [
  "€1 - 1.5K",
  "€1.5 - 2K",
  "€2 - 2.5K",
  "€2.5 - 3K",
  "€3K +",
];

const distributionByYear: Record<string, number[]> = {
  "2024": [12, 9, 8, 5, 1],
  "2025": [10, 7, 12, 8, 2],
  "2026": [8, 6, 13, 11, 4],
};

export const getDistributionData = (selectedYear: string): number[] =>
  distributionByYear[selectedYear] ?? distributionByYear["2025"];

// Distribution Y-axis max
export const DISTRIBUTION_Y_MAX = 16;

// ─── Shared SVG layout constants ──────────────────────────────────────────────

export const SVG_WIDTH = 500;
export const SVG_HEIGHT = 220;
export const PADDING_LEFT = 45;
export const PADDING_RIGHT = 20;
export const PADDING_TOP = 20;
export const PADDING_BOTTOM = 30;
