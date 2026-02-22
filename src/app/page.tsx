import HeroSection from "@/components/HeroSection";
import HomeCards from "@/components/HomeCards";
import HomeQuickLinks from "@/components/HomeQuickLinks";

// Refresco de consistencia para el Navbar - Fase Recursos
export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeCards />
      <HomeQuickLinks />
    </>
  );
}
