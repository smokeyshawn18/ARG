import { FaCalendarAlt } from "react-icons/fa";
import Argentina from "../assets/arg.png";
import Columbia from "../assets/col.webp";
import Conmebol from "../assets/conmebol.png";

const Results = () => {
  const results = [
    {
      homeTeam: {
        name: "Argentina",
        logo: Argentina,
        score: 1,
      },
      awayTeam: {
        name: "Columbia",
        logo: Columbia,
        score: 2,
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
    // Add more match results as needed
  ];

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
                    {result.homeTeam.score} - {result.awayTeam.score}
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
                      {result.scorers.homeTeam.map((scorer, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <img
                            src={result.homeTeam.logo}
                            alt={result.homeTeam.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <p className="text-sm font-medium text-gray-800">
                            {scorer.player} -{" "}
                            <span className="font-semibold">
                              {scorer.minute}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Away Team Scorers */}
                  <div className="bg-white w-full lg:w-1/2 p-4 rounded-lg shadow-lg border border-gray-200">
                    <h3 className="text-center text-lg font-bold text-gray-700 mb-3">
                      {result.awayTeam.name} Scorers
                    </h3>
                    <div className="space-y-3">
                      {result.scorers.awayTeam.map((scorer, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <img
                            src={result.awayTeam.logo}
                            alt={result.awayTeam.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <p className="text-sm font-medium text-gray-800">
                            {scorer.player} -{" "}
                            <span className="font-semibold">
                              {scorer.minute}
                            </span>
                          </p>
                        </div>
                      ))}
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
