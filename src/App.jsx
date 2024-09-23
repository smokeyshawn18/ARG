import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Fixture from "./components/Fixture";
import History from "./components/History";
import Results from "./components/Results";
import InstallButton from "./components/InstallButton"; // Import the InstallButton

function App() {
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      console.log("beforeinstallprompt event fired");
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
          </Routes>
        </div>
        <Footer />
        {/* Sticky Install Button */}
        <InstallButton onInstallClick={handleInstallClick} />
      </div>
    </Router>
  );
}

export default App;
