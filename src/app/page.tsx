import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { OverviewSection } from "@/components/OverviewSection";
import { SimulatorSection } from "@/components/SimulatorSection";
import { WaterSection } from "@/components/WaterSection";
import { CostCalculatorSection } from "@/components/CostCalculatorSection";
import { PricesSection } from "@/components/PricesSection";
import { VehiclesSection } from "@/components/VehiclesSection";
import { SuppliersSection } from "@/components/SuppliersSection";
import { NewsSection } from "@/components/NewsSection";
import { CountryComparisonSection } from "@/components/CountryComparisonSection";
import { IssuesSection } from "@/components/IssuesSection";
import { PolicyTimelineSection } from "@/components/PolicyTimelineSection";
import { IndiaMapSection } from "@/components/IndiaMapSection";
import { DistilleryDirectory } from "@/components/DistilleryDirectory";
import { PriceHistorySection } from "@/components/PriceHistorySection";
import { VehicleGuide } from "@/components/VehicleGuide";
import { ScrollStorySection } from "@/components/ScrollStorySection";
import { SubscribeSection } from "@/components/SubscribeSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <OverviewSection />
      <IndiaMapSection />
      <ScrollStorySection />
      <SimulatorSection />
      <WaterSection />
      <CostCalculatorSection />
      <PricesSection />
      <PriceHistorySection />
      <VehiclesSection />
      <VehicleGuide />
      <SuppliersSection />
      <DistilleryDirectory />
      <NewsSection />
      <CountryComparisonSection />
      <IssuesSection />
      <PolicyTimelineSection />
      <SubscribeSection />
      <Footer />
    </main>
  );
}
