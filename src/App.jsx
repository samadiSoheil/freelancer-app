import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
