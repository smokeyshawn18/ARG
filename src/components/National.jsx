import Messi from "../assets/messi.jpg";
// import ADM from "../assets/adm.webp";
import Emi from "../assets/emi.jpg";
import Paredes from "../assets/paredes.png";
import Enzo from "../assets/enzo.jpg";
import { User, Shirt, Award, Goal, HandHelping } from "lucide-react"; // Removed unused imports
import Lautaro from "../assets/lautaro.avif";
import Alvarez from "../assets/alvareez.jpg";
import Garnacho from "../assets/garnacho.webp";
import Dybala from "../assets/dybala.png";
import Nicolas from "../assets/nic.jpg";
import Lisandro from "../assets/lisandro.jpg";
import Pala from "../assets/pal.jpg";
import Molina from "../assets/molina.webp";
import Mac from "../assets/mac.webp";
import { AiOutlinePlus } from "react-icons/ai";

import De from "../assets/de.jpg";

const National = () => {
  // Player data with national stats only
  const players = [
    {
      image: Messi,
      name: "Lionel Messi",
      position: "RW",
      shirt: 10,
      nationalAppearances: 192,
      nationalGoals: 112,
      nationalAssists: 58,
    },
    {
      image: Lautaro,
      name: "Lautaro Martinez",
      position: "ST",
      shirt: 22,
      nationalAppearances: 71,
      nationalGoals: 32,
      nationalAssists: 9,
    },
    {
      image: Alvarez,
      name: "Julián Álvarez",
      position: "ST",
      shirt: 9,
      nationalAppearances: 42,
      nationalGoals: 11,
      nationalAssists: 2,
    },
    {
      image: Nicolas,
      name: "Nicolás González",
      position: "RW",
      shirt: 15,
      nationalAppearances: 41,
      nationalGoals: 6,
      nationalAssists: 3,
    },
    {
      image: Paredes,
      name: "Leandro Paredes",
      position: "CM",
      shirt: 5,
      nationalAppearances: 70,
      nationalGoals: 5,
      nationalAssists: 7,
    },
    {
      image: Enzo,
      name: "Enzo Fernandez",
      position: "CM",
      shirt: 24,
      nationalAppearances: 34,
      nationalGoals: 4,
      nationalAssists: 6,
    },
    {
      image: Dybala,
      name: "Paulo Dybala",
      position: "AM",
      shirt: 21,
      nationalAppearances: 40,
      nationalGoals: 4,
      nationalAssists: 7,
    },
    {
      image: Mac,
      name: "Alexis Mac Allister",
      position: "CM",
      shirt: 20,
      nationalAppearances: 36,
      nationalGoals: 3,
      nationalAssists: 4,
    },
    {
      image: De,
      name: "Rodrigo De Paul",
      position: "DM",
      shirt: 7,
      nationalAppearances: 75,
      nationalGoals: 2,
      nationalAssists: 11,
    },
    {
      image: Molina,
      name: "Nahuel Molina",
      position: "RB",
      shirt: 26,
      nationalAppearances: 48,
      nationalGoals: 1,
      nationalAssists: 4,
    },
    {
      image: Lisandro,
      name: "Lisandro Martinez",
      position: "CB",
      shirt: 3,
      nationalAppearances: 26,
      nationalGoals: 1,
      nationalAssists: 0,
    },
    {
      image: Garnacho,
      name: "Alejandro Garnacho",
      position: "LW",
      shirt: 17,
      nationalAppearances: 8,
      nationalGoals: 0,
      nationalAssists: 1,
    },
    {
      image: Pala,
      name: "Exequiel Palacios",
      position: "CM",
      shirt: 14,
      nationalAppearances: 32,
      nationalGoals: 0,
      nationalAssists: 5,
    },
    {
      image: Emi,
      name: "Emiliano Martinez",
      position: "GK",
      shirt: 1,
      matches: 49,
      goalsConceded: 20,
      cleanSheets: 35,
    },
  ];

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
                className="w-full h-52 sm:h-60 object-cover object-center transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm sm:text-xl font-bold py-1 sm:py-2 px-3 sm:px-4 rounded-bl-2xl flex items-center">
                <Shirt className="w-4 sm:w-5 h-4 sm:h-5 mr-1" />
                {player.shirt}
              </div>
            </div>

            {/* Player Information */}
            <div className="p-4 sm:p-6 bg-gray-50 rounded-bl-2xl">
              {/* Player Name and Position */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 flex items-center justify-center">
                  <User className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
                  {player.name}
                </h3>
                <p className="text-xl sm:text-2xl font-medium text-blue-800 mt-3">
                  {player.position}
                </p>
              </div>

              {/* Stats: National or Goalkeeper */}
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                {player.position === "GK"
                  ? "National Stats:"
                  : "National Stats:"}
              </h4>
              <div className="flex flex-col items-center text-center">
                {player.position === "GK" ? (
                  <>
                    <div className="flex items-center mb-3 sm:mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Award className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Matches:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.matches}
                      </span>
                    </div>
                    <div className="flex items-center mb-3 sm:mb-4 justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <Goal className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Goals Conceded:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.goalsConceded}
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full max-w-xs">
                      <div className="flex items-center">
                        <AiOutlinePlus className="w-5 sm:w-6 h-5 sm:h-6 mr-2 text-blue-500" />
                        <span className="text-sm text-gray-500 font-bold">
                          Clean Sheets:
                        </span>
                      </div>
                      <span className="text-md sm:text-lg font-semibold text-gray-900">
                        {player.cleanSheets}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default National;
