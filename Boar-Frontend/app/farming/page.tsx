import FarmingApproach from "@/components/farming/FarmingApproach";
import FarmingPortfolio from "@/components/farming/FarmingPortfolio";
import FarmingHeroSection from "@/components/farming/HeroSection";
import CTASection from "@/components/home/ctasection";

const page = () => {
  return (
    <div>
      <FarmingHeroSection />

      <FarmingPortfolio />

      <FarmingApproach/>
      
      <CTASection />
    </div>
  );
};

export default page;
