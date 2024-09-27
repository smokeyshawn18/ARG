import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Navbar,
  Team,
  Footer,
  Fixture,
  History,
  Results,
} from "./components";

import InstallButton from "./components/InstallButton";
import National from "./components/National";

function App() {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent default prompt
      setInstallPromptEvent(event);
      setIsInstallable(true); // Show install button
    };

    const handleAppInstalled = () => {
      setIsInstallable(false); // Hide install button after installation
    };

    // Listen for events
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
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
      setIsInstallable(false); // Hide button after interaction
    } else {
      console.log("Install prompt event is not available");
    }
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/schedule" element={<Fixture />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
            <Route path="/national" element={<National />} />
          </Routes>
        </div>
        <Footer />
        {/* Render the InstallButton only if installable */}
        {isInstallable && <InstallButton onInstallClick={handleInstallClick} />}
      </div>
    </Router>
  );
}

export default App;
