import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineSportsSoccer } from "react-icons/md"; // Matches icon
import { FaFutbol } from "react-icons/fa"; // Goals icon
import { AiOutlinePlus } from "react-icons/ai"; // Assists icon

const TeamSection = ({ players }) => {
  return (
    <div className="p-8 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <h1 className="text-5xl font-extrabold text-white mb-12 text-center uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
        Argentina Player Stats
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {players.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>

      <p className="text-xl mt-12 p-6 text-center font-extrabold text-gray-300 bg-gray-800 bg-opacity-60 rounded-xl">
        Note:{" "}
        <span className="text-lg font-bold text-gray-200">
          Stats are According to{" "}
          <a
            className="text-blue-400"
            target="blank"
            href="https://www.transfermarkt.com/"
          >
            Transfermarket.com
          </a>
          <br />
          This Season Stats includes Club and National Team stats.
        </span>
      </p>
    </div>
  );
};

function PlayerCard({ player }) {
  const [showCareerStats, setShowCareerStats] = useState(false); // Default to "This Season" view

  // Function to calculate updated career stats
  const getUpdatedCareerStats = () => {
    return player.position === "GK"
      ? {
          appearances:
            player.careerStats.appearances + player.seasonStats.appearances,
          goalsConceded:
            player.careerStats.goalsConceded + player.seasonStats.goalsConceded,
          cleanSheets:
            player.careerStats.cleanSheets + player.seasonStats.cleanSheets,
        }
      : {
          appearances:
            player.careerStats.appearances + player.seasonStats.appearances,
          goals: player.careerStats.goals + player.seasonStats.goals,
          assists: player.careerStats.assists + player.seasonStats.assists,
        };
  };

  const careerStats = getUpdatedCareerStats();

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-700 transform  border border-gray-700 relative">
      {/* Shirt Number */}
      <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full px-4 py-3 text-xl font-bold">
        #{player.shirt}
      </div>

      <div className="relative mb-6">
        <img
          src={player.image}
          className="w-32 h-32 rounded-full object-cover mx-auto border-2 border-blue-200"
          alt={player.name}
        />
      </div>

      <h2 className="text-3xl font-bold text-white mb-1 text-center">
        {player.name}
      </h2>
      <img src={player.club} className="w-12 h-12 mt-2 mb-2 mx-auto" alt="" />
      <p className="text-lg text-blue-200 text-center font-semibold mb-2 mt-2">
        {player.age}
      </p>
      <p className="text-lg text-blue-400 text-center font-semibold mb-4">
        {player.position}
      </p>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setShowCareerStats(false)}
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-transform duration-300 ${
            !showCareerStats
              ? "bg-blue-600 text-white transform scale-110"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          This Season
        </button>
        <button
          onClick={() => setShowCareerStats(true)}
          className={`px-6 py-2 rounded-full text-lg font-semibold transition-transform duration-300 ${
            showCareerStats
              ? "bg-blue-600 text-white transform scale-110"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Career Stats
        </button>
      </div>

      <div className="mt-6 bg-gray-800 rounded-xl p-4 shadow-inner">
        <h3 className="text-xl font-bold text-white mb-4">
          {showCareerStats ? "Career:" : "This Season:"}
        </h3>
        <ul className="text-gray-300 space-y-3">
          <li className="flex items-center justify-between">
            <span className="flex items-center space-x-2">
              <MdOutlineSportsSoccer className="text-blue-400 text-xl" />
              <span className="font-medium">Appearances:</span>
            </span>
            <span className="font-bold text-white">
              {showCareerStats
                ? careerStats.appearances
                : player.seasonStats.appearances}
            </span>
          </li>

          {/* Display different stats based on position */}
          {player.position === "GK" ? (
            <>
              <li className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <FaFutbol className="text-red-400 text-xl" />
                  <span className="font-medium">Goals Conceded:</span>
                </span>
                <span className="font-bold text-white">
                  {showCareerStats
                    ? careerStats.goalsConceded
                    : player.seasonStats.goalsConceded}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <AiOutlinePlus className="text-green-400 text-xl" />
                  <span className="font-medium">Clean Sheets:</span>
                </span>
                <span className="font-bold text-white">
                  {showCareerStats
                    ? careerStats.cleanSheets
                    : player.seasonStats.cleanSheets}
                </span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <FaFutbol className="text-yellow-400 text-xl" />
                  <span className="font-medium">Goals:</span>
                </span>
                <span className="font-bold text-white">
                  {showCareerStats
                    ? careerStats.goals
                    : player.seasonStats.goals}
                </span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <AiOutlinePlus className="text-purple-400 text-xl" />
                  <span className="font-medium">Assists:</span>
                </span>
                <span className="font-bold text-white">
                  {showCareerStats
                    ? careerStats.assists
                    : player.seasonStats.assists}
                </span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

// Prop validation for TeamSection
PlayerCard.propTypes = {
  player: PropTypes.shape({
    status: PropTypes.string.isRequired,
    shirt: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    club: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    careerStats: PropTypes.shape({
      appearances: PropTypes.number.isRequired,
      // Different validation depending on position (GK or outfield player)
      goals: PropTypes.number, // Only for outfield players
      assists: PropTypes.number, // Only for outfield players
      goalsConceded: PropTypes.number, // Only for goalkeepers
      cleanSheets: PropTypes.number, // Only for goalkeepers
    }).isRequired,
    seasonStats: PropTypes.shape({
      appearances: PropTypes.number.isRequired,
      goals: PropTypes.number, // Only for outfield players
      assists: PropTypes.number, // Only for outfield players
      goalsConceded: PropTypes.number, // Only for goalkeepers
      cleanSheets: PropTypes.number, // Only for goalkeepers
    }).isRequired,
  }).isRequired,
};

// Prop validation for TeamSection
TeamSection.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      shirt: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      club: PropTypes.string.isRequired,
      careerStats: PropTypes.shape({
        appearances: PropTypes.number.isRequired,
        goals: PropTypes.number, // Optional for goalkeepers
        assists: PropTypes.number, // Optional for goalkeepers
        goalsConceded: PropTypes.number, // Required for goalkeepers
        cleanSheets: PropTypes.number, // Required for goalkeepers
      }).isRequired,
      seasonStats: PropTypes.shape({
        appearances: PropTypes.number.isRequired,
        goals: PropTypes.number, // Optional for goalkeepers
        assists: PropTypes.number, // Optional for goalkeepers
        goalsConceded: PropTypes.number, // Required for goalkeepers
        cleanSheets: PropTypes.number, // Required for goalkeepers
      }).isRequired,
    })
  ).isRequired,
};

export default TeamSection;
