export interface Distillery {
  id: number;
  name: string;
  state: string;
  city: string;
  capacity: number;
  feedstock: string[];
  status: "operational" | "under-construction" | "proposed";
  lat: number;
  lng: number;
}

export const distilleries: Distillery[] = [
  { id: 1, name: "Bajaj Hindusthan — Gola Gokarannath", state: "Uttar Pradesh", city: "Gola Gokarannath", capacity: 320, feedstock: ["Sugarcane juice", "B-heavy molasses"], status: "operational", lat: 28.00, lng: 80.47 },
  { id: 2, name: "Balrampur Chini — Babhnan", state: "Uttar Pradesh", city: "Babhnan", capacity: 280, feedstock: ["Sugarcane juice", "C-heavy molasses"], status: "operational", lat: 27.15, lng: 82.17 },
  { id: 3, name: "Dwarikesh Sugar — Baheri", state: "Uttar Pradesh", city: "Baheri", capacity: 200, feedstock: ["Sugarcane juice", "B-heavy molasses"], status: "operational", lat: 28.78, lng: 79.50 },
  { id: 4, name: "Triveni Engineering — Sabhlapur", state: "Uttar Pradesh", city: "Sabhlapur", capacity: 210, feedstock: ["B-heavy molasses", "Maize"], status: "operational", lat: 27.50, lng: 80.00 },
  { id: 5, name: "Simbhaoli Sugars — Simbhaoli", state: "Uttar Pradesh", city: "Simbhaoli", capacity: 160, feedstock: ["C-heavy molasses", "B-heavy molasses"], status: "operational", lat: 28.58, lng: 77.52 },
  { id: 6, name: "Godavari Biorefineries — Sameerwadi", state: "Karnataka", city: "Sameerwadi", capacity: 180, feedstock: ["Sugarcane juice", "B-heavy molasses", "Maize"], status: "operational", lat: 16.50, lng: 75.30 },
  { id: 7, name: "Renuka Sugars — Athani", state: "Karnataka", city: "Athani", capacity: 150, feedstock: ["Sugarcane juice", "C-heavy molasses"], status: "operational", lat: 16.73, lng: 75.07 },
  { id: 8, name: "Ugar Khurd — Ugar", state: "Karnataka", city: "Ugar", capacity: 130, feedstock: ["B-heavy molasses"], status: "operational", lat: 16.10, lng: 76.10 },
  { id: 9, name: "Shree Renuka Sugars — Haliyal", state: "Karnataka", city: "Haliyal", capacity: 140, feedstock: ["Sugarcane juice"], status: "operational", lat: 15.33, lng: 74.77 },
  { id: 10, name: "Sakthi Sugar — Erode", state: "Tamil Nadu", city: "Erode", capacity: 120, feedstock: ["Sugarcane juice", "C-heavy molasses"], status: "operational", lat: 11.34, lng: 77.72 },
  { id: 11, name: "EID Parry — Nellikuppam", state: "Tamil Nadu", city: "Nellikuppam", capacity: 110, feedstock: ["Sugarcane juice"], status: "operational", lat: 11.78, lng: 79.68 },
  { id: 12, name: "KCP Sugars — Lakshmipuram", state: "Andhra Pradesh", city: "Lakshmipuram", capacity: 130, feedstock: ["Sugarcane juice", "B-heavy molasses"], status: "operational", lat: 16.50, lng: 80.50 },
  { id: 13, name: "Andhra Sugars — Kotha", state: "Andhra Pradesh", city: "Kotha", capacity: 100, feedstock: ["C-heavy molasses", "Maize"], status: "operational", lat: 16.20, lng: 81.10 },
  { id: 14, name: "Vishnu Sugars — Molliposi", state: "Telangana", city: "Molliposi", capacity: 115, feedstock: ["Sugarcane juice", "Maize"], status: "operational", lat: 18.50, lng: 79.50 },
  { id: 15, name: "Sri Chamundeswari Sugars — Kollegal", state: "Karnataka", city: "Kollegal", capacity: 95, feedstock: ["Sugarcane juice"], status: "operational", lat: 12.16, lng: 77.11 },
  { id: 16, name: "Mawana Sugars — Mawana", state: "Uttar Pradesh", city: "Mawana", capacity: 190, feedstock: ["Sugarcane juice", "B-heavy molasses"], status: "operational", lat: 28.98, lng: 77.90 },
  { id: 17, name: "Upper Ganges Sugar — Seohara", state: "Uttar Pradesh", city: "Seohara", capacity: 170, feedstock: ["C-heavy molasses", "Maize"], status: "operational", lat: 29.20, lng: 78.58 },
  { id: 18, name: "Shree Khedeshwar — Malshiras", state: "Maharashtra", city: "Malshiras", capacity: 140, feedstock: ["Sugarcane juice", "B-heavy molasses"], status: "operational", lat: 17.97, lng: 75.30 },
  { id: 19, name: "Shree Datta — Rethare Harnai", state: "Maharashtra", city: "Rethare Harnai", capacity: 120, feedstock: ["Sugarcane juice"], status: "operational", lat: 17.60, lng: 74.47 },
  { id: 20, name: "Shivshahi — Mhaswad", state: "Maharashtra", city: "Mhaswad", capacity: 110, feedstock: ["B-heavy molasses", "Maize"], status: "operational", lat: 17.63, lng: 74.78 },
  { id: 21, name: "Kumbhi Valley — Kokrud", state: "Maharashtra", city: "Kokrud", capacity: 100, feedstock: ["Sugarcane juice"], status: "operational", lat: 16.80, lng: 74.20 },
  { id: 22, name: "Bharat Ethanol — Zaidpur", state: "Uttar Pradesh", city: "Zaidpur", capacity: 300, feedstock: ["Maize", "Damaged grain"], status: "operational", lat: 26.83, lng: 81.33 },
  { id: 23, name: "K.M. Sugar — Amethi", state: "Uttar Pradesh", city: "Amethi", capacity: 160, feedstock: ["Sugarcane juice", "C-heavy molasses"], status: "operational", lat: 26.67, lng: 81.83 },
  { id: 24, name: "Bannari Amman Sugars — Modur", state: "Tamil Nadu", city: "Modur", capacity: 105, feedstock: ["Sugarcane juice"], status: "operational", lat: 11.50, lng: 77.50 },
  { id: 25, name: "Oudh Sugar Mills — Hargaon", state: "Uttar Pradesh", city: "Hargaon", capacity: 150, feedstock: ["B-heavy molasses", "Maize"], status: "operational", lat: 27.50, lng: 81.00 },
  { id: 26, name: "Dhampur Sugar — Dhampur", state: "Uttar Pradesh", city: "Dhampur", capacity: 250, feedstock: ["Sugarcane juice", "B-heavy molasses", "Maize"], status: "operational", lat: 29.30, lng: 78.50 },
  { id: 27, name: "Magadh Sugar — Riga", state: "Bihar", city: "Riga", capacity: 130, feedstock: ["Sugarcane juice", "C-heavy molasses"], status: "operational", lat: 26.50, lng: 85.50 },
  { id: 28, name: "Bihar Sugar — Majhaulia", state: "Bihar", city: "Majhaulia", capacity: 110, feedstock: ["Sugarcane juice"], status: "operational", lat: 26.70, lng: 84.80 },
  { id: 29, name: "Haripura Sugar — Haripura", state: "Bihar", city: "Haripura", capacity: 100, feedstock: ["B-heavy molasses"], status: "operational", lat: 26.40, lng: 85.80 },
  { id: 30, name: "Nalanda Sugar — Narkatiaganj", state: "Bihar", city: "Narkatiaganj", capacity: 95, feedstock: ["C-heavy molasses"], status: "operational", lat: 27.10, lng: 84.47 },
  { id: 31, name: "Chhindwara Distillery — Chhindwara", state: "Madhya Pradesh", city: "Chhindwara", capacity: 140, feedstock: ["Maize", "B-heavy molasses"], status: "operational", lat: 22.04, lng: 78.94 },
  { id: 32, name: "Alicon Distillery — Dewas", state: "Madhya Pradesh", city: "Dewas", capacity: 120, feedstock: ["Maize"], status: "operational", lat: 22.96, lng: 76.06 },
  { id: 33, name: "Ruchi Soya — Indore", state: "Madhya Pradesh", city: "Indore", capacity: 100, feedstock: ["Maize", "Damaged grain"], status: "operational", lat: 22.72, lng: 75.86 },
  { id: 34, name: "Gloster Jute — Nandan", state: "West Bengal", city: "Nandan", capacity: 85, feedstock: ["C-heavy molasses"], status: "operational", lat: 23.00, lng: 88.00 },
  { id: 35, name: "Hindustan Distillery — Pithampur", state: "Madhya Pradesh", city: "Pithampur", capacity: 200, feedstock: ["Maize", "Rice"], status: "under-construction", lat: 22.60, lng: 75.68 },
  { id: 36, name: "Greenfield Ethanol — Kakinada", state: "Andhra Pradesh", city: "Kakinada", capacity: 250, feedstock: ["Maize", "Rice", "Sugarcane juice"], status: "under-construction", lat: 16.94, lng: 82.24 },
  { id: 37, name: "Punjab Ethanol — Ludhiana", state: "Punjab", city: "Ludhiana", capacity: 180, feedstock: ["Maize", "Rice"], status: "operational", lat: 30.90, lng: 75.85 },
  { id: 38, name: "Haryana Distillery — Yamunanagar", state: "Haryana", city: "Yamunanagar", capacity: 160, feedstock: ["Maize", "Rice"], status: "operational", lat: 30.13, lng: 77.28 },
  { id: 39, name: "Gujarat Poshan — Gandhidham", state: "Gujarat", city: "Gandhidham", capacity: 130, feedstock: ["C-heavy molasses", "Maize"], status: "operational", lat: 23.08, lng: 70.13 },
  { id: 40, name: "Odisha Ethanol — Cuttack", state: "Odisha", city: "Cuttack", capacity: 110, feedstock: ["Rice", "Maize"], status: "operational", lat: 20.46, lng: 85.88 },
];

export const feedstocks = ["Sugarcane juice", "B-heavy molasses", "C-heavy molasses", "Maize", "Rice", "Damaged grain"];

export const statesWithDistilleries = [...new Set(distilleries.map((d) => d.state))].sort();
