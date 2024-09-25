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
import Dybala from "../assets/dybala.webp";
import Palermo from "../assets/palermo.jpg";
import Nicolas from "../assets/nic.jpg";

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

      clubLogos: [Juventus], // Alvarez's clubs
      nationalAppearances: 38,
      nationalGoals: 10,
      nationalAssists: 2,
      clubAppearances: 232,
      clubGoals: 91,
      clubAssists: 49,
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
      <h2 className="text-4xl md:text-4xl font-extrabold text-center text-sky-900 mb-16 tracking-wider uppercase">
        Argentina National Team Players Stats
      </h2>

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
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xl font-bold py-2 px-4 rounded-bl-2xl flex items-center">
                <Shirt className="w-5 h-5 mr-1" />
                {player.shirt}
              </div>
            </div>

            {/* Player Information */}
            <div className="p-6">
              {/* Player Name and Position */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                  <User className="w-5 h-5 mr-2" />
                  {player.name}
                </h3>
                <p className="text-lg font-medium text-blue-600">
                  {player.position}
                </p>
              </div>

              {/* Buttons to toggle between National and Club stats for each player */}
              <div className="flex justify-center mb-4">
                <button
                  onClick={() => togglePlayerStats(index)}
                  className={`${
                    toggleStats[index]
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  } py-2 px-4 rounded-l-lg text-sm font-semibold hover:bg-blue-500 transition-colors`}
                >
                  National
                </button>
                <button
                  onClick={() => togglePlayerStats(index)}
                  className={`${
                    !toggleStats[index]
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-700"
                  } py-2 px-4 rounded-r-lg text-sm font-semibold hover:bg-blue-500 transition-colors`}
                >
                  Club
                </button>
              </div>

              {/* Toggle Between National and Club Stats */}
              {toggleStats[index] ? (
                <>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    National Stats:
                  </h4>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Award className="w-6 h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Matches:
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {player.nationalAppearances}
                      </span>
                    </div>
                    <div className="flex items-center mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Goal className="w-6 h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Goals:
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {player.nationalGoals}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <HandHelping className="w-6 h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Assists:
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {player.nationalAssists}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">
                    Club Stats:
                  </h4>
                  {/* Display club logos */}
                  <div className="mt-0 flex justify-center space-x-4 mb-3">
                    {player.clubLogos.map((clubLogo, i) => (
                      <img
                        key={i}
                        src={clubLogo}
                        className="w-10 h-10 object-contain"
                        alt="Club Logo"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Building2 className="w-6 h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Matches:
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {player.clubAppearances}
                      </span>
                    </div>
                    <div className="flex items-center mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Goal className="w-6 h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Goals:
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
                        {player.clubGoals}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <HandHelping className="w-6 h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Assists:
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-gray-900">
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
