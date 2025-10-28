import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import History from "./components/History";
import HowToUse from "./components/HowToUse";
import IncomingEvents from "./components/IncomingEvents";
import PlanVisit from "./components/PlanVisit";

function App() {
  return (
    <>
      <HeroSection />
      <HowToUse />
      <Gallery />
      <IncomingEvents />
      <History />
      <PlanVisit />
      <Feedback />
      <Footer />
    </>
  );
}

export default App;
