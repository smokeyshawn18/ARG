import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Team from "./components/Team.jsx";
import Fixture from "./components/Fixture.jsx";
import History from "./components/History.jsx";
import Results from "./components/Result.jsx";
import Footer from "./components/Footer.jsx";
import InstallButton from "./components/InstallButton.jsx";
import National from "./components/National.jsx";

function App() {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPromptEvent(event);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (isInstallable && installPromptEvent) {
      installPromptEvent.prompt();
      const { outcome } = await installPromptEvent.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      }
      setInstallPromptEvent(null);
      setIsInstallable(false);
    } else {
      console.log("Install prompt event is not available");
    }
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/schedule" element={<Fixture />} />
        <Route path="/results" element={<Results />} />
        <Route path="/History" element={<History />} />
        <Route path="/national" element={<National />} />
      </Routes>
      <Footer />
      {/* Render the InstallButton only if installable */}
      {isInstallable && <InstallButton onInstallClick={handleInstallClick} />}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
