import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProgramPage from "./pages/ProgramPage";
import KurikulumPage from "./pages/KurikulumPage";
import MentorPage from "./pages/MentorPage";
import HargaPage from "./pages/HargaPage";
import KontakPage from "./pages/KontakPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/kurikulum" element={<KurikulumPage />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/harga" element={<HargaPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
