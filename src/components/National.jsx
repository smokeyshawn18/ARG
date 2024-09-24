import Messi from "../assets/messi.jpg";
import ADM from "../assets/adm.webp";
import { User, Shirt, Award, Goal, HandHelping } from "lucide-react";
import Lautaro from "../assets/lautaro.avif";

const National = () => {
  // Player data inside the component
  const players = [
    {
      image: Messi,
      name: "Lionel Messi",
      position: "Forward",
      shirt: 10,
      nationalAppearances: 187,
      nationalGoals: 109,
      nationalAssists: 58,
    },
    {
      image: ADM,
      name: "Angel Di Maria",
      position: "Midfielder",
      shirt: 11,
      nationalAppearances: 145,
      nationalGoals: 31,
      nationalAssists: 32,
    },
    {
      image: Lautaro,
      name: "Lautaro Martinez",
      position: "Forward",
      shirt: 22,
      nationalAppearances: 66,
      nationalGoals: 29,
      nationalAssists: 8,
    },
    // Add more players here...
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-4xl md:text-4xl font-extrabold text-center text-sky-900 mb-16 tracking-wider uppercase">
        Argentina National Team Players stats
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

              {/* Player Stats */}

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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default National;
