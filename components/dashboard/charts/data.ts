// Payroll chart month labels
export const payrollMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Base payroll values by salon
export const payrollBaseDataBySalon: Record<string, number[]> = {
  "Glamour Beauty": [
    8000, 10000, 11000, 9500, 6000, 14000, 18000, 20000, 17000, 19000, 22000,
    18000,
  ],
  "Style Studio": [
    12000, 14000, 15000, 13000, 9000, 16000, 19000, 21000, 18000, 20000, 23000,
    19000,
  ],
  "Chic Hair & Beauty": [
    7000, 9000, 8500, 9500, 7500, 11000, 13000, 15000, 14000, 16000, 17000,
    15000,
  ],
  "All Salons": [
    15000, 18000, 20000, 17500, 12000, 23000, 29000, 31000, 27000, 32000,
    35000, 30000,
  ],
};

export const defaultPayrollBaseData = payrollBaseDataBySalon["All Salons"];

// Year multipliers
export const yearFactors: Record<string, number> = {
  "2024": 0.8,
  "2025": 1.0,
  "2026": 1.2,
};

// Derive scaled data for a given salon and year
export const getPayrollData = (
  selectedSalon: string,
  selectedYear: string,
): number[] => {
  const yearFactor = yearFactors[selectedYear] ?? 1.0;
  const baseData =
    payrollBaseDataBySalon[selectedSalon] ?? defaultPayrollBaseData;
  return baseData.map((val) => Math.round(val * yearFactor));
};

// Shared SVG layout constants
export const SVG_WIDTH = 500;
export const SVG_HEIGHT = 220;
export const PADDING_LEFT = 45;
export const PADDING_RIGHT = 20;
export const PADDING_TOP = 20;
export const PADDING_BOTTOM = 30;
export const Y_MAX = 60000;

// ─── Expense vs Budget Chart ─────────────────────────────────────────────────

export interface BudgetExpenseItem {
  budget: number;
  expense: number;
}

export const expenseCategories = [
  "Salaries",
  "Taxes",
  "Supplies",
  "Marketing",
  "Utilities",
];

export const expenseBaseDataBySalon: Record<string, BudgetExpenseItem[]> = {
  "Glamour Beauty": [
    { budget: 15000, expense: 19000 },
    { budget: 10000, expense: 12000 },
    { budget: 5000, expense: 7000 },
    { budget: 4000, expense: 3000 },
    { budget: 3000, expense: 4500 },
  ],
  "Style Studio": [
    { budget: 18000, expense: 16000 },
    { budget: 12000, expense: 11000 },
    { budget: 8000, expense: 7500 },
    { budget: 6000, expense: 4000 },
    { budget: 4000, expense: 3500 },
  ],
  "Chic Hair & Beauty": [
    { budget: 12000, expense: 11000 },
    { budget: 8000, expense: 7000 },
    { budget: 6000, expense: 5000 },
    { budget: 3000, expense: 2000 },
    { budget: 2000, expense: 1800 },
  ],
  "All Salons": [
    { budget: 35000, expense: 8000 },
    { budget: 26000, expense: 15000 },
    { budget: 48000, expense: 24000 },
    { budget: 28000, expense: 3000 },
    { budget: 8000, expense: 25000 },
  ],
};

// Year multipliers for expense chart (slightly different from payroll)
export const expenseYearFactors: Record<string, number> = {
  "2024": 0.85,
  "2025": 1.0,
  "2026": 1.15,
};

export const getExpenseBudgetData = (
  selectedSalon: string,
  selectedYear: string,
): BudgetExpenseItem[] => {
  const yearFactor = expenseYearFactors[selectedYear] ?? 1.0;
  const baseData =
    expenseBaseDataBySalon[selectedSalon] ??
    expenseBaseDataBySalon["All Salons"];
  return baseData.map((item) => ({
    budget: Math.round(item.budget * yearFactor),
    expense: Math.round(item.expense * yearFactor),
  }));
};
