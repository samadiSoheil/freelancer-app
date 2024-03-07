import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <Routes>
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
