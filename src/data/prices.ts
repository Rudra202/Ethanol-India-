export interface PricePoint {
  month: string;
  price: number;
}

export interface StatePriceHistory {
  state: string;
  history: PricePoint[];
}

const months = [
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
];

const basePrices: Record<string, number> = {
  "Delhi": 102.12, "Mumbai": 111.21, "Kolkata": 106.03, "Chennai": 102.63,
  "Bengaluru": 107.18, "Hyderabad": 109.86, "Pune": 108.50, "Ahmedabad": 100.57,
  "Lucknow": 106.61, "Jaipur": 108.27, "Chandigarh": 103.28, "Bhopal": 107.46,
  "Patna": 107.86, "Guwahati": 99.12,
};

export function generatePriceHistory(state: string): PricePoint[] {
  const base = basePrices[state] || 104;
  return months.map((month, i) => {
    const variance = (Math.sin(i * 0.8 + 0.5) * 4) + (Math.random() - 0.5) * 1.5;
    return { month, price: Math.round((base + variance) * 100) / 100 };
  });
}

export const featuredStates = Object.keys(basePrices);

export function getAllStatePriceHistories(): StatePriceHistory[] {
  return featuredStates.map((state) => ({
    state,
    history: generatePriceHistory(state),
  }));
}
