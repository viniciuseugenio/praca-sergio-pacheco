import { MotionConfig } from "motion/react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import History from "./pages/History";
import Index from "./pages/Index";

function App() {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.8,
        ease: "easeInOut",
        bounce: 0,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/history" element={<History />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
