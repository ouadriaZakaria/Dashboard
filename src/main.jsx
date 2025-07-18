import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppQueryClientProvider } from "./QueryClientProvider.jsx";
import AppProvider from "./AppProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppQueryClientProvider>
      <AppProvider>
        <App />
        <Toaster/>
      </AppProvider>
    </AppQueryClientProvider>
  </StrictMode>
);
