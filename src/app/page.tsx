import HeroSection from "@/components/HeroSection";
import ProjectTypeQuiz from "@/components/ProjectTypeQuiz";
import Marquee from "@/components/Marquee";
import TrustSection from "@/components/TrustSection";
import DimensionDivider from "@/components/DimensionDivider";
import HomeCards from "@/components/HomeCards";
import HomeQuickLinks from "@/components/HomeQuickLinks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectTypeQuiz />
      <Marquee text="Los Mochis, Sinaloa · Navojoa, Sonora · Construcciones de Precisión · Est. 2001 ·" />
      <TrustSection />
      <DimensionDivider />
      <HomeCards />
      <HomeQuickLinks />
    </>
  );
}
