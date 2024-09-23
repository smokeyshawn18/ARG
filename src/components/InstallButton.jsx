import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const InstallButton = ({ onInstallClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      window.deferredPrompt = event;
      setIsVisible(true); // Show button when installable
    };

    const handleAppInstalled = () => {
      setIsVisible(false); // Hide button after installation
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

  // If the app is not installable or it's already installed, don't render the button
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gradient-to-r from-[#75A3D3] to-[#4E89C7] text-[#FFFFFF] p-6 rounded-full shadow-lg border-4 border-[#F0F0F0]">
        <button
          onClick={onInstallClick}
          className="font-bold text-xl bg-white text-[#4E89C7] py-3 px-8 rounded-full hover:bg-[#F0F0F0] hover:text-[#75A3D3] transition-all duration-300 shadow-md"
        >
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
