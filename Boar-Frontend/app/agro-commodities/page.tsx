import ExportDocSHipping from "@/components/agro-commodities/ExportDocShipping";
import AgroHeroSection from "@/components/agro-commodities/HeroSection";
import OurProducts from "@/components/agro-commodities/OurProducts";
import { WhyProcessor } from "@/components/agro-commodities/WhyProcessor";
import CTASection from "@/components/home/ctasection";


const AgroCommoditiesPage = () => {
  return (
    <div>
      <AgroHeroSection />
      <OurProducts/>
      <ExportDocSHipping/>
      <WhyProcessor/>
      <CTASection />
    </div>
  );
};

export default AgroCommoditiesPage;
