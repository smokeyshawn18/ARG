import { useState } from "react";
import Messi from "../assets/messi.jpg";
import ADM from "../assets/adm.webp";
import { User, Shirt, Award, Goal, HandHelping, Building2 } from "lucide-react";
import Lautaro from "../assets/lautaro.avif";
import Alvarez from "../assets/alvareez.jpg";
import Miami from "../assets/miami.png";
import Benfica from "../assets/benfica.png";
import Inter from "../assets/inter.webp";
import Atletico from "../assets/atletico.png";
import Barcelona from "../assets/barcelona.png";
import City from "../assets/city.svg";
import PSG from "../assets/psg.png";
import Juventus from "../assets/juv.png";
import United from "../assets/united.svg";
import RMA from "../assets/rma.png";
import Racing from "../assets/racing.png";
import Plate from "../assets/rplate.png";
import Roma from "../assets/roma.png";
import Dybala from "../assets/dybala.png";
import Palermo from "../assets/palermo.jpg";
import Nicolas from "../assets/nic.jpg";
import Florentina from "../assets/flor.png";
import VFB from "../assets/vfb.png";
import Mac from "../assets/mac.webp";
import Liverpool from "../assets/liv.png";
import Brighton from "../assets/brighton.svg";
import De from "../assets/de.jpg";
import Udinese from "../assets/udi.png";
import Valencia from "../assets/valencia.png";

const National = () => {
  // Player data with national and club stats, including club logos
  const players = [
    {
      image: Messi,
      name: "Lionel Messi",
      position: "Forward",
      shirt: 10,
      club: Miami,
      clubLogos: [Miami, PSG, Barcelona], // Messi's clubs
      nationalAppearances: 187,
      nationalGoals: 109,
      nationalAssists: 58,
      clubAppearances: 885,
      clubGoals: 731,
      clubAssists: 317,
    },
    {
      image: ADM,
      name: "Angel Di Maria",
      position: "Midfielder",
      shirt: 11,
      club: Benfica,
      clubLogos: [Benfica, Juventus, PSG, United, RMA], // Di Maria's clubs
      nationalAppearances: 145,
      nationalGoals: 31,
      nationalAssists: 32,
      clubAppearances: 774,
      clubGoals: 180,
      clubAssists: 267,
    },
    {
      image: Dybala,
      name: "Paulo Dybala",
      position: "Forward",
      shirt: 21,

      clubLogos: [Roma, Juventus, Palermo], // Alvarez's clubs
      nationalAppearances: 40,
      nationalGoals: 4,
      nationalAssists: 7,
      clubAppearances: 508,
      clubGoals: 188,
      clubAssists: 82,
    },
    {
      image: Lautaro,
      name: "Lautaro Martinez",
      position: "Forward",
      shirt: 22,
      club: Inter,
      clubLogos: [Inter, Racing], // Lautaro's clubs
      nationalAppearances: 66,
      nationalGoals: 29,
      nationalAssists: 8,
      clubAppearances: 349,
      clubGoals: 156,
      clubAssists: 50,
    },

    {
      image: Alvarez,
      name: "Julián Álvarez",
      position: "Forward",
      shirt: 9,
      club: Atletico,
      clubLogos: [Atletico, City, Plate], // Alvarez's clubs
      nationalAppearances: 38,
      nationalGoals: 10,
      nationalAssists: 2,
      clubAppearances: 232,
      clubGoals: 91,
      clubAssists: 49,
    },

    {
      image: Nicolas,
      name: "Nicolás González",
      position: "Forward",
      shirt: 15,

      clubLogos: [Juventus, Florentina, VFB], // Alvarez's clubs
      nationalAppearances: 38,
      nationalGoals: 10,
      nationalAssists: 2,
      clubAppearances: 232,
      clubGoals: 91,
      clubAssists: 49,
    },
    {
      image: De,
      name: "Rodrigo De Paul",

      position: "Forward",
      shirt: 7,
      club: Atletico,
      clubLogos: [Atletico, Udinese, Racing, Valencia], // Alvarez's clubs
      nationalAppearances: 71,
      nationalGoals: 2,
      nationalAssists: 11,
      clubAppearances: 440,
      clubGoals: 54,
      clubAssists: 65,
    },
    {
      image: Mac,
      name: "Alexis Mac Allister",
      position: "Midfielder",
      shirt: 20,
      club: Atletico,
      clubLogos: [Liverpool, Brighton], // Alvarez's clubs
      nationalAppearances: 33,
      nationalGoals: 3,
      nationalAssists: 4,
      clubAppearances: 268,
      clubGoals: 41,
      clubAssists: 29,
    },

    // Add more players here...
  ];

  // State to manage individual toggle for each player
  const [toggleStats, setToggleStats] = useState(
    players.map(() => true) // default to show National stats for all players
  );

  // Function to toggle stats for individual players
  const togglePlayerStats = (index) => {
    setToggleStats((prevToggleStats) =>
      prevToggleStats.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-sky-900 mb-12 tracking-wider uppercase">
        Argentina National Team Players Stats
      </h2>

      {/* Responsive grid for players */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {players.map((player, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            {/* Player Image */}
            <div className="relative">
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-52 sm:h-60 object-cover object-center"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm sm:text-xl font-bold py-1 sm:py-2 px-3 sm:px-4 rounded-bl-2xl flex items-center">
                <Shirt className="w-4 sm:w-5 h-4 sm:h-5 mr-1" />
                {player.shirt}
              </div>
            </div>

            {/* Player Information */}
            <div className="p-4 sm:p-6">
              {/* Player Name and Position */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                  <User className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  {player.name}
                </h3>
                <p className="text-md sm:text-lg font-medium text-blue-600">
                  {player.position}
                </p>
              </div>

              {/* Toggle Buttons */}
              <div className="flex justify-center mb-4 space-x-4">
                <button
                  onClick={() => togglePlayerStats(index)}
                  className={`${
                    toggleStats[index]
                      ? "bg-gradient-to-r from-blue-500 to-sky-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } py-3 px-8 rounded-full text-sm font-semibold shadow-lg hover:bg-sky-500 hover:text-sky-200 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50`}
                >
                  National
                </button>
                <button
                  onClick={() => togglePlayerStats(index)}
                  className={`${
                    !toggleStats[index]
                      ? "bg-gradient-to-r from-blue-500 to-sky-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } py-3 px-8 rounded-full text-sm font-semibold shadow-lg hover:bg-sky-500 hover:text-sky-200 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50`}
                >
                  Club
                </button>
              </div>

              {/* Stats: National or Club */}
              {toggleStats[index] ? (
                <>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                    National Stats:
                  </h4>
                  <div className="flex flex-col items-center text-center">
                    {/* National Stats */}
                    <div className="flex items-center mb-3 sm:mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Award className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Matches:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.nationalAppearances}
                      </span>
                    </div>
                    <div className="flex items-center mb-3 sm:mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Goal className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Goals:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.nationalGoals}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <HandHelping className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Assists:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.nationalAssists}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Club Stats:
                  </h4>
                  {/* Club logos */}
                  <div className="flex justify-center space-x-3 sm:space-x-4 mb-3">
                    {player.clubLogos.map((clubLogo, i) => (
                      <img
                        key={i}
                        src={clubLogo}
                        className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
                        alt="Club Logo"
                      />
                    ))}
                  </div>
                  {/* Club Stats */}
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-3 sm:mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Building2 className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Matches:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.clubAppearances}
                      </span>
                    </div>
                    <div className="flex items-center mb-3 sm:mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Goal className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Goals:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.clubGoals}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <HandHelping className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Assists:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.clubAssists}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default National;
