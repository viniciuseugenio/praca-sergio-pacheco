import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Index from "./pages/Index";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
