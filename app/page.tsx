import AIChatbot from "./components/AIChatbot";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Opportunities from "./components/Opportunities";
import SkillMatch from "./components/SkillMatch";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import CareerPathExplorer from "./components/CareerPathExplorer";
import SoloExperience from "./components/SoloExperience";
import HowItWorks from "./components/HowItWorks";
import GoalSelector from "./components/GoalSelector";
import PlatformFeatures from "./components/PlatformFeatures";
import ConnectedJourney from "./components/ConnectedJourney";

export default function Home() {
  return (
    <><Navbar /><Hero /><SoloExperience /><HowItWorks /><GoalSelector /><PlatformFeatures /><ConnectedJourney /><CareerPathExplorer /><AIChatbot /><Opportunities /><SkillMatch /><FinalCTA /><Footer /></>
  );
}
