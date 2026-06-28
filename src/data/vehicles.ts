export interface VehicleModel {
  make: string;
  model: string;
  yearStart: number;
  yearEnd: number;
  e20Compatible: "yes" | "partial" | "no" | "check";
  mileageDropE20: number;
  notes: string;
}

export const vehicles: VehicleModel[] = [
  { make: "Maruti Suzuki", model: "Swift", yearStart: 2018, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-compliant from 2018; mileage drop minimal (~1-2%)" },
  { make: "Maruti Suzuki", model: "WagonR", yearStart: 2019, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "Officially E20-ready from 2019" },
  { make: "Maruti Suzuki", model: "Baleno", yearStart: 2016, yearEnd: 2019, e20Compatible: "partial", mileageDropE20: 3.0, notes: "Pre-2019 models may have elastomer issues; 2019+ OK" },
  { make: "Maruti Suzuki", model: "Baleno", yearStart: 2019, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "Full E20 compatibility from 2019 refresh" },
  { make: "Maruti Suzuki", model: "Alto", yearStart: 2015, yearEnd: 2018, e20Compatible: "partial", mileageDropE20: 3.5, notes: "Older models; rubber lines may need replacement" },
  { make: "Maruti Suzuki", model: "Alto", yearStart: 2018, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.8, notes: "E20-ready from 2018" },
  { make: "Maruti Suzuki", model: "Dzire", yearStart: 2017, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-compliant fuel system" },
  { make: "Hyundai", model: "i20", yearStart: 2015, yearEnd: 2020, e20Compatible: "partial", mileageDropE20: 2.5, notes: "Pre-2020: rubber & plastic compatibility uncertain" },
  { make: "Hyundai", model: "i20", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "E20-compliant from 2020" },
  { make: "Hyundai", model: "Creta", yearStart: 2015, yearEnd: 2020, e20Compatible: "partial", mileageDropE20: 2.0, notes: "Pre-2020 models may need fuel line inspection" },
  { make: "Hyundai", model: "Creta", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "E20-ready" },
  { make: "Hyundai", model: "Verna", yearStart: 2017, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-compliant" },
  { make: "Hyundai", model: "Grand i10", yearStart: 2014, yearEnd: 2026, e20Compatible: "partial", mileageDropE20: 2.8, notes: "Smaller engine; older models more sensitive" },
  { make: "Tata", model: "Nexon", yearStart: 2017, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "E20-ready from launch" },
  { make: "Tata", model: "Tiago", yearStart: 2016, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-compliant; mileage impact minimal" },
  { make: "Tata", model: "Punch", yearStart: 2021, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "New platform, fully E20-ready" },
  { make: "Tata", model: "Harrier", yearStart: 2019, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "E20-compatible fuel system" },
  { make: "Tata", model: "Altroz", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "Fully E20-compliant" },
  { make: "Mahindra", model: "XUV700", yearStart: 2021, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "New gen, fully E20-ready" },
  { make: "Mahindra", model: "Scorpio", yearStart: 2014, yearEnd: 2020, e20Compatible: "partial", mileageDropE20: 2.5, notes: "Older mHawk engines; check fuel lines" },
  { make: "Mahindra", model: "Scorpio-N", yearStart: 2022, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "New engine, E20-compliant" },
  { make: "Mahindra", model: "Thar", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-compatible" },
  { make: "Mahindra", model: "Bolero", yearStart: 2012, yearEnd: 2020, e20Compatible: "partial", mileageDropE20: 4.0, notes: "Older engine design; higher mileage hit expected" },
  { make: "Honda", model: "City", yearStart: 2014, yearEnd: 2020, e20Compatible: "partial", mileageDropE20: 2.0, notes: "Pre-2020: i-VTEC engines need E20 calibration check" },
  { make: "Honda", model: "City", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "E20-compliant from 2020" },
  { make: "Honda", model: "Amaze", yearStart: 2018, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-ready" },
  { make: "Honda", model: "Civic", yearStart: 2018, yearEnd: 2020, e20Compatible: "partial", mileageDropE20: 2.0, notes: "Check E20 compatibility before filling" },
  { make: "Toyota", model: "Fortuner", yearStart: 2015, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "Engine designed for ethanol blends globally" },
  { make: "Toyota", model: "Innova Crysta", yearStart: 2016, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "E20-ready" },
  { make: "Toyota", model: "Camry Hybrid", yearStart: 2019, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 0.5, notes: "Hybrid; minimal blend impact" },
  { make: "Kia", model: "Seltos", yearStart: 2019, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "E20-compliant" },
  { make: "Kia", model: "Sonet", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "E20-ready" },
  { make: "Kia", model: "Carnival", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "E20-compliant" },
  { make: "Volkswagen", model: "Virtus", yearStart: 2022, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "Global platform, E20-ready" },
  { make: "Volkswagen", model: "Taigun", yearStart: 2021, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "E20-compliant" },
  { make: "Škoda", model: "Slavia", yearStart: 2022, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "E20-ready" },
  { make: "Škoda", model: "Kushaq", yearStart: 2021, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "E20-compliant" },
  { make: "Renault", model: "Kwid", yearStart: 2015, yearEnd: 2026, e20Compatible: "partial", mileageDropE20: 2.5, notes: "Small engine; higher sensitivity to ethanol" },
  { make: "Renault", model: "Kiger", yearStart: 2021, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-ready" },
  { make: "Nissan", model: "Magnite", yearStart: 2020, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.5, notes: "E20-compliant" },
  { make: "MG", model: "Hector", yearStart: 2019, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.2, notes: "E20-ready" },
  { make: "MG", model: "Astor", yearStart: 2021, yearEnd: 2026, e20Compatible: "yes", mileageDropE20: 1.0, notes: "E20-compliant" },
  { make: "Ford", model: "EcoSport", yearStart: 2015, yearEnd: 2022, e20Compatible: "partial", mileageDropE20: 2.0, notes: "Discontinued in India; check fuel system" },
  { make: "Ford", model: "Endeavour", yearStart: 2016, yearEnd: 2022, e20Compatible: "yes", mileageDropE20: 1.5, notes: "Global diesel platform; E20 OK" },
];

export const makes = [...new Set(vehicles.map((v) => v.make))].sort();
