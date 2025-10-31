import Feedback from "../components/Feedback";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import History from "../components/History";
import HowToUse from "../components/HowToUse";
import IncomingEvents from "../components/IncomingEvents";
import PlanVisit from "../components/PlanVisit";

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HowToUse />
      <Gallery />
      <IncomingEvents />
      <History />
      <PlanVisit />
      <Feedback />
    </>
  );
};

export default Index;
