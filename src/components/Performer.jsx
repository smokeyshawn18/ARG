import {
  FaCalendarAlt,
  FaHandsHelping,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import Messi from "../assets/messi.jpg";
import Lautaro from "../assets/lautaro.avif";
import Alvarez from "../assets/alvareez.jpg";
import React from "react";
import PropTypes from "prop-types";
import Laliga from "../assets/atletico.png";
import Inter from "../assets/inter.webp";
import Miami from "../assets/miami.png";
import Argentina from "../assets/arg.png";
// import Garnacho from "../assets/garnacho.webp";
import United from "../assets/united.svg";

const players = [
  {
    name: "Lionel Messi",
    position: "Forward",
    age: 37,
    shirtNumber: 10,
    club: Miami,
    image: Messi,
    leagues: {
      MLS: {
        matches: 25,
        goals: 23,
        assists: 13,
      },
      nationalStats: {
        matches: 11,
        goals: 6,
        assists: 5,
      },
    },
  },

  {
    name: "Julián Álvarez",
    position: "Forward",
    age: 24,
    club: Laliga,
    shirtNumber: 9,
    image: Alvarez,
    leagues: {
      LaLiga: {
        matches: 25,
        goals: 12,
        assists: 2,
      },
      nationalStats: {
        matches: 6,
        goals: 2,
        assists: 1,
      },
    },
  },
  {
    name: "Lautaro Martinez",
    position: "Forward",
    age: 27,
    club: Inter,
    shirtNumber: 22,
    image: Lautaro,
    leagues: {
      SerieA: {
        matches: 20,
        goals: 6,
        assists: 2,
      },
      nationalStats: {
        matches: 6,
        goals: 3,
        assists: 1,
      },
    },
  },
  // {
  //   name: "Alejandro Garnacho",
  //   position: "Forward",
  //   age: 20,
  //   club: United,
  //   shirtNumber: 17,
  //   image: Garnacho,
  //   leagues: {
  //     United: {
  //       matches: 24,
  //       goals: 8,
  //       assists: 4,
  //     },
  //     nationalStats: {
  //       matches: 2,
  //       goals: 0,
  //       assists: 1,
  //     },
  //   },
  // },
];

function KeyPerformers() {
  const [expandedPlayerIndex, setExpandedPlayerIndex] = React.useState(null);

  const toggleExpand = (index) => {
    setExpandedPlayerIndex(expandedPlayerIndex === index ? null : index);
  };

  return (
    <div className="bg-sky-50 min-h-screen p-8">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-sky-800 uppercase tracking-widest">
        Key Performers This Season
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {players.map((player, index) => {
          const totalGoals = Object.values(player.leagues).reduce(
            (acc, league) => acc + league.goals,
            0
          );
          const totalMatches = Object.values(player.leagues).reduce(
            (acc, league) => acc + league.matches,
            0
          );
          const totalAssists = Object.values(player.leagues).reduce(
            (acc, league) => acc + league.assists,
            0
          );

          const isExpanded = expandedPlayerIndex === index;

          return (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 relative border border-gray-200"
            >
              <div className="absolute top-[-0.8em] right-[-0.7em] p-4">
                <div className="text-2xl font-bold bg-[#2c7da6] text-white rounded-full w-16 h-16 flex items-center justify-center">
                  #{player.shirtNumber}
                </div>
              </div>
              <div className="relative p-6">
                <div className="flex flex-col items-center mb-6 relative">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-lg"
                  />
                  <div className="text-center mt-8">
                    <h3 className="text-2xl font-bold">{player.name}</h3>
                    <img
                      src={player.club}
                      className="w-10 h-10 mx-auto mt-3 mb-3"
                      alt=""
                    />
                    <p className="text-lg font-semibold">{player.position}</p>
                    <p className="text-xl font-bold">{player.age}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="flex flex-col items-center bg-gray-100 text-black p-4 rounded-lg mb-4 md:mb-0">
                    <FaCalendarAlt className="text-black text-2xl mb-2" />
                    <p className="text-xl font-bold">{totalMatches}</p>
                    <span className="text-sm font-semibold">Matches</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 text-black p-4 rounded-lg mb-4 md:mb-0">
                    <GoGoal className="text-black text-2xl mb-2" />
                    <p className="text-xl font-bold">{totalGoals}</p>
                    <span className="text-sm font-semibold">Goals</span>
                  </div>
                  <div className="flex flex-col items-center bg-gray-100 text-black p-4 rounded-lg">
                    <FaHandsHelping className="text-black text-2xl mb-2" />
                    <p className="text-xl font-bold">{totalAssists}</p>
                    <span className="text-sm font-semibold">Assists</span>
                  </div>
                </div>
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-center mt-6 text-gray-800 hover:text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-lg px-4 py-2 transition-colors duration-300"
                >
                  {isExpanded ? (
                    <>
                      <span className="font-bold text-lg">Show Less</span>
                      <FaChevronUp className="ml-2" />
                    </>
                  ) : (
                    <>
                      <span className="font-bold text-lg">Show More</span>
                      <FaChevronDown className="ml-2" />
                    </>
                  )}
                </button>
                {isExpanded && (
                  <div className="mt-6 space-y-4">
                    {player.leagues.MLS && (
                      <LeagueStats
                        leagueLogo={Miami}
                        leagueName="Inter Miami"
                        matches={player.leagues.MLS.matches}
                        goals={player.leagues.MLS.goals}
                        assists={player.leagues.MLS.assists}
                      />
                    )}
                    {player.leagues.LaLiga && (
                      <LeagueStats
                        leagueName="Atletico Madrid"
                        leagueLogo={Laliga}
                        matches={player.leagues.LaLiga.matches}
                        goals={player.leagues.LaLiga.goals}
                        assists={player.leagues.LaLiga.assists}
                      />
                    )}
                    {player.leagues.SerieA && (
                      <LeagueStats
                        leagueName="Inter Milan"
                        leagueLogo={Inter}
                        matches={player.leagues.SerieA.matches}
                        goals={player.leagues.SerieA.goals}
                        assists={player.leagues.SerieA.assists}
                      />
                    )}
                    {player.leagues.United && (
                      <LeagueStats
                        leagueName="Man United"
                        leagueLogo={United}
                        matches={player.leagues.United.matches}
                        goals={player.leagues.United.goals}
                        assists={player.leagues.United.assists}
                      />
                    )}
                    <LeagueStats
                      leagueName="National - 24/25 Season"
                      leagueLogo={Argentina}
                      matches={player.leagues.nationalStats.matches}
                      goals={player.leagues.nationalStats.goals}
                      assists={player.leagues.nationalStats.assists}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LeagueStats({ leagueName, leagueLogo, matches, goals, assists }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <img
        src={leagueLogo}
        alt={leagueName}
        className="w-12 h-12 sm:w-16 sm:h-16 mr-4"
      />
      <div className="flex-1 text-center sm:text-left">
        <div className="text-lg sm:text-xl font-semibold text-sky-700">
          {leagueName}
        </div>
        <div className="flex justify-between mt-3 sm:mt-2">
          <span className="text-sm sm:text-base text-gray-600">Matches:</span>
          <span className="font-semibold text-gray-800 text-sm sm:text-base">
            {matches}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm sm:text-base text-gray-600">Goals:</span>
          <span className="font-semibold text-gray-800 text-sm sm:text-base">
            {goals}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm sm:text-base text-gray-600">Assists:</span>
          <span className="font-semibold text-gray-800 text-sm sm:text-base">
            {assists}
          </span>
        </div>
      </div>
    </div>
  );
}

LeagueStats.propTypes = {
  leagueName: PropTypes.string.isRequired,
  leagueLogo: PropTypes.string.isRequired,
  matches: PropTypes.number.isRequired,
  goals: PropTypes.number.isRequired,
  assists: PropTypes.number.isRequired,
};

export default KeyPerformers;
