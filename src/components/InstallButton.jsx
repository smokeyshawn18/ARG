import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const InstallButton = ({ onInstallClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isAppInstalled = localStorage.getItem("appInstalled");
    if (isAppInstalled === "true") {
      setIsVisible(false);
      return;
    }

    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      window.deferredPrompt = event;
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      localStorage.setItem("appInstalled", "true");
      setIsVisible(false);
    };

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

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#75A3D3] text-[#FFFFFF] p-5 rounded shadow-lg border-2 border-[#F0F0F0]">
        <button onClick={onInstallClick} className="font-bold text-xl">
          Install App
        </button>
      </div>
    </div>
  );
};

InstallButton.propTypes = {
  onInstallClick: PropTypes.func.isRequired,
};

export default InstallButton;
