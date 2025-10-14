import { useState } from "react";
import { WarningBanner } from "./components/WarningBanner";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { BrandingSection } from "./components/BrandingSection";
import { DealSetup } from "./components/DealSetup";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "dealsetup">("home");

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <WarningBanner />
      <Navigation 
        onRebuildTrustClick={() => setCurrentPage("dealsetup")}
        onAboutClick={() => setCurrentPage("home")}
      />
      {currentPage === "home" ? (
        <>
          <HeroSection />
          <BrandingSection />
        </>
      ) : (
        <DealSetup />
      )}
    </div>
  );
}