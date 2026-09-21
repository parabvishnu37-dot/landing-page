import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatIsSolo from "./components/WhatIsSolo";
import WhatYouCanDo from "./components/WhatYouCanDo";
import HowSoloWorks from "./components/HowSoloWorks";
import SoloFeatures from "./components/SoloFeatures";
import ExploreFeatures from "./components/ExploreFeatures";
import CareerPathExplorer from "./components/CareerPathExplorer";
import SkillMatch from "./components/SkillMatch";
import AIChatbot from "./components/AIChatbot";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatIsSolo />
      <WhatYouCanDo />
      <HowSoloWorks />
      <SoloFeatures />
      <ExploreFeatures />
      <CareerPathExplorer />
      <SkillMatch />
      <AIChatbot />
      <FinalCTA />
      <Footer />
    </>
  );
}
