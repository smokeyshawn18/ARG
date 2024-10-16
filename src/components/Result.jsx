import { FaCalendarAlt } from "react-icons/fa";
import Argentina from "../assets/arg.png";
import Columbia from "../assets/col.webp";
import Conmebol from "../assets/conmebol.png";
import Venezuela from "../assets/vene.png";
import Bolivia from "../assets/bolivia.png";

const Results = () => {
  const results = [
    {
      homeTeam: {
        name: "Argentina",
        logo: Argentina,
      },
      awayTeam: {
        name: "Bolivia",
        logo: Bolivia,
      },
      date: "Oct 16, 2024",
      time: "5:45",
      format: "AM",
      competitionLogo: Conmebol,
      competition: "WC - Qualifiers Conmebol",
      venue: "Estadio Metropolitano",
      stadium: "Columbia",
      scorers: {
        homeTeam: [
          { player: "Messi", minute: "19', 84', 86'" },
          { player: "Lautaro", minute: "43'" },
          { player: "Alvarez", minute: "45+3'" },
          { player: "Almada", minute: "69" },
        ],
        awayTeam: [],
      },
    },

    {
      homeTeam: {
        name: "Argentina",
        logo: Argentina,
      },
      awayTeam: {
        name: "Venezuela",
        logo: Venezuela,
      },
      date: "October 11, 2024",
      time: "2:45",
      format: "AM",
      competitionLogo: Conmebol,
      competition: "WC - Qualifiers Conmebol",
      venue: "Estadio Monumental de Maturin, Venezuela",
      stadium: "Venezuela",
      scorers: {
        homeTeam: [{ player: "Otamendi", minute: "13'" }],
        awayTeam: [{ player: "Rondon", minute: "65'" }],
      },
    },
    {
      homeTeam: {
        name: "Argentina",
        logo: Argentina,
      },
      awayTeam: {
        name: "Columbia",
        logo: Columbia,
      },
      date: "September 11, 2024",
      time: "2:30",
      format: "AM",
      competitionLogo: Conmebol,
      competition: "WC - Qualifiers Conmebol",
      venue: "Estadio Metropolitano",
      stadium: "Columbia",
      scorers: {
        homeTeam: [{ player: "Nicolás González", minute: "48'" }],
        awayTeam: [
          { player: "Yerson Mosquera", minute: "25'" },
          { player: "James Rodriguez", minute: "25' (P)" },
        ],
      },
    },
  ];

  // Function to calculate score based on the number of goal minutes
  const calculateScore = (teamScorers) => {
    return teamScorers.length > 0
      ? teamScorers.reduce(
          (total, scorer) => total + scorer.minute.split(", ").length,
          0
        )
      : 0;
  };

  const renderScorers = (teamScorers) => {
    return teamScorers.map((scorer, idx) => (
      <p key={idx} className="text-sm font-medium text-gray-800">
        {scorer.player} - {scorer.minute}
      </p>
    ));
  };

  return (
    <div className="p-8 bg-darkblue min-h-screen">
      <h1 className="text-4xl font-extrabold text-sky-900 mb-10 uppercase tracking-wider text-center">
        Recent Results
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {results.map((result, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-96 lg:w-1/3 bg-white rounded-xl shadow-xl border border-[#002f6c] overflow-hidden"
          >
            <div className="relative">
              <div className="w-full h-32 bg-[#28537e] flex items-center justify-between px-4 py-2">
                {/* Home Team Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src={result.homeTeam.logo}
                    alt={result.homeTeam.name}
                    className="w-16 h-16 rounded-full border-2 border-white"
                  />
                  <p className="mt-2 text-lg font-semibold text-white">
                    {result.homeTeam.name}
                  </p>
                </div>

                {/* Score */}
                <div className="text-center flex flex-col justify-center">
                  <p className="text-4xl font-bold text-white">
                    {calculateScore(result.scorers.homeTeam)} -{" "}
                    {calculateScore(result.scorers.awayTeam)}
                  </p>
                </div>

                {/* Away Team Logo */}
                <div className="flex flex-col items-center">
                  <img
                    src={result.awayTeam.logo}
                    alt={result.awayTeam.name}
                    className="w-16 h-16 rounded-full border-2 border-white"
                  />
                  <p className="mt-2 text-lg font-semibold text-white">
                    {result.awayTeam.name}
                  </p>
                </div>
              </div>

              {/* Scorers Section */}
              <div className="mt-4 px-4">
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                  {/* Home Team Scorers */}
                  <div className="bg-white w-full lg:w-1/2 p-4 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-center text-lg font-bold text-gray-700 mb-3">
                      {result.homeTeam.name} Scorers
                    </h3>
                    <div className="space-y-3">
                      {renderScorers(result.scorers.homeTeam)}
                    </div>
                  </div>

                  {/* Away Team Scorers */}
                  <div className="bg-white w-full lg:w-1/2 p-4 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-center text-lg font-bold text-gray-700 mb-3">
                      {result.awayTeam.name} Scorers
                    </h3>
                    <div className="space-y-3">
                      {renderScorers(result.scorers.awayTeam)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Match Details */}
              <div className="p-4 bg-gray-100">
                <div className="text-center mb-4">
                  <FaCalendarAlt className="text-blue-500 text-2xl mb-2" />
                  <p className="text-xl font-semibold text-darkblue">
                    {result.date}
                  </p>
                  <p className="text-xl font-semibold text-darkblue">
                    {result.time} {result.format}
                  </p>
                  <img
                    src={result.competitionLogo}
                    className="w-12 h-14 mx-auto mt-3 mb-3"
                    alt={result.competition}
                  />
                  <p className="text-xl font-bold text-darkblue">
                    {result.competition}
                  </p>
                </div>
                <div className="text-center mb-4">
                  <p className="text-md font-semibold text-gray-800">
                    {result.venue}
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    {result.stadium}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
