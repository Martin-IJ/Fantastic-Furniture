import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import BannerSection from "@/components/home/BannerSection";
import CuratedCollections from "@/components/home/CuratedCollections";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 pb-24 space-y-24">
      <HeroSection />
      <StatsSection />
      <BannerSection />
      <CuratedCollections />
      <CTASection />
    </div>
  );
}
