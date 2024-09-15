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
      <h1 className="text-4xl font-extrabold text-white mb-12 text-center">
        Recent Results
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {results.map((result, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-96 lg:w-1/3 bg-white rounded-xl shadow-xl border border-[#002f6c] overflow-hidden"
          >
            <div className="relative">
              <div className="w-full h-32 bg-[#28537e]  flex items-center justify-between px-4 py-2">
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
              <div className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Home Team Scorers */}
                  <div className="bg-white p-3 mb-3 mx-auto rounded-md shadow-sm border border-gray-200">
                    {result.scorers.homeTeam.map((scorer, idx) => (
                      <p
                        key={idx}
                        className="text-sm font-medium text-gray-800"
                      >
                        {scorer.player} - {scorer.minute}
                      </p>
                    ))}
                  </div>

                  {/* Away Team Scorers */}
                  <div className="bg-white p-3 mx-auto rounded-md mb-3 shadow-sm border border-gray-200">
                    {result.scorers.awayTeam.map((scorer, idx) => (
                      <p
                        key={idx}
                        className="text-sm font-medium text-gray-800"
                      >
                        {scorer.player} - {scorer.minute}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
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

                {/* Scorers Section with Grid Design */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
