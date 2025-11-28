import Feedback from "../components/Feedback";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import HowToUse from "../components/HowToUse";
import IncomingEvents from "../components/IncomingEvents";
import NatureElements from "../components/NatureElements";
import PlanVisit from "../components/PlanVisit";

const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <HowToUse />
      <Gallery />
      <NatureElements />
      <IncomingEvents />
      <PlanVisit />
      <Feedback />
    </>
  );
};

export default Index;
