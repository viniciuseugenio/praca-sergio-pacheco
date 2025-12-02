import { MotionConfig } from "motion/react";
import { BrowserRouter, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/Layout";
import GalleryPage from "./pages/GalleryPage";
import History from "./pages/History";
import Index from "./pages/Index";
import NatureElementsPage from "./pages/NatureElementsPage";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import EventManagement from "./pages/EventManagement";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import NatureElementsManagement from "./pages/NatureElementsManagement";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus by default
      retry: 1, // Retry failed queries once
      staleTime: 60 * 1000, // Consider data fresh for 1 minute
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
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
                <Route path="/gallery" element={<GalleryPage />} />
                <Route
                  path="/nature-elements"
                  element={<NatureElementsPage />}
                />
              </Route>
              <Route path="/admin" element={<Admin />} />
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/events"
                element={
                  <ProtectedRoute>
                    <EventManagement />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/nature-elements"
                element={
                  <ProtectedRoute>
                    <NatureElementsManagement />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </MotionConfig>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
