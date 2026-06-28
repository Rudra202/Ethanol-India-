export interface WaterStressData {
  state: string;
  stressIndex: number;
  groundwaterDecline: number;
  ethanolImpact: "high" | "medium" | "low";
  description: string;
}

export const waterStressData: WaterStressData[] = [
  { state: "Punjab", stressIndex: 0.82, groundwaterDecline: 3.2, ethanolImpact: "high", description: "Highest groundwater depletion rate in India; maize for ethanol competes with wheat-paddy cycle." },
  { state: "Haryana", stressIndex: 0.78, groundwaterDecline: 2.8, ethanolImpact: "high", description: "Intensive agriculture + ethanol demand driving deeper borewells." },
  { state: "Rajasthan", stressIndex: 0.85, groundwaterDecline: 2.1, ethanolImpact: "medium", description: "Arid state; limited ethanol feedstock grown here but water stress is extreme." },
  { state: "Uttar Pradesh", stressIndex: 0.65, groundwaterDecline: 1.9, ethanolImpact: "high", description: "India's largest ethanol producer; sugarcane & maize both irrigated." },
  { state: "Maharashtra", stressIndex: 0.55, groundwaterDecline: 1.2, ethanolImpact: "medium", description: "Significant sugarcane ethanol; rain-fed & irrigated mix." },
  { state: "Tamil Nadu", stressIndex: 0.72, groundwaterDecline: 1.8, ethanolImpact: "medium", description: "Water-stressed; sugarcane ethanol from irrigated fields." },
  { state: "Karnataka", stressIndex: 0.52, groundwaterDecline: 1.0, ethanolImpact: "medium", description: "Moderate stress; sugarcane & maize ethanol both present." },
  { state: "Gujarat", stressIndex: 0.6, groundwaterDecline: 1.5, ethanolImpact: "low", description: "Sugarcane ethanol from irrigated areas; also has arid districts." },
  { state: "Madhya Pradesh", stressIndex: 0.5, groundwaterDecline: 0.9, ethanolImpact: "medium", description: "Growing maize area for ethanol; moderate water stress." },
  { state: "Bihar", stressIndex: 0.38, groundwaterDecline: 0.5, ethanolImpact: "low", description: "Lower stress; rice-based ethanol from FCI surplus." },
  { state: "West Bengal", stressIndex: 0.35, groundwaterDecline: 0.4, ethanolImpact: "low", description: "Adequate rainfall; rice-based ethanol from surplus stocks." },
  { state: "Odisha", stressIndex: 0.3, groundwaterDecline: 0.3, ethanolImpact: "low", description: "Well-watered; limited ethanol production currently." },
  { state: "Chhattisgarh", stressIndex: 0.35, groundwaterDecline: 0.4, ethanolImpact: "low", description: "Good rainfall; emerging ethanol producer." },
  { state: "Telangana", stressIndex: 0.62, groundwaterDecline: 1.6, ethanolImpact: "medium", description: "Rising ethanol capacity; groundwater declining in parts." },
  { state: "Andhra Pradesh", stressIndex: 0.55, groundwaterDecline: 1.1, ethanolImpact: "medium", description: "Sugarcane ethanol; coastal districts better, inland drier." },
];

export function getStressColor(index: number): string {
  if (index >= 0.7) return "#ef4444";
  if (index >= 0.5) return "#f59e0b";
  if (index >= 0.35) return "#eab308";
  return "#22c55e";
}
