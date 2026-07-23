import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import TrustSection from "@/components/TrustSection";
import HomeCards from "@/components/HomeCards";
import HomeQuickLinks from "@/components/HomeQuickLinks";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee text="Los Mochis, Sinaloa · Navojoa, Sonora · Construcciones de Precisión · Est. 2001 ·" />
      <TrustSection />
      <HomeCards />
      <HomeQuickLinks />
    </>
  );
}
