import Argentina from "../assets/arg.png";
import Columbia from "../assets/col.webp";
import Conmebol from "../assets/conmebol.png";
import Venezuela from "../assets/vene.png";
import Bolivia from "../assets/bolivia.png";
import Para from "../assets/para.png";
import Peru from "../assets/peru.png";

const Results = () => {
  const results = [
    {
      homeTeam: {
        name: "Argentina",
        logo: Argentina,
      },
      awayTeam: {
        name: "Peru",
        logo: Peru,
      },
      date: "November 20, 2024",
      time: "5:45",
      format: "AM",
      competitionLogo: Conmebol,
      competition: "WC - Qualifiers Conmebol",
      venue: "Estadio Monumental de Maturin, Venezuela",
      stadium: "Argentina",
      scorers: {
        homeTeam: [{ player: "Lautaro", minute: "55'" }],
        awayTeam: [{ player: "" }],
      },
    },
    {
      awayTeam: {
        name: "Paraguay",
        logo: Para,
      },
      homeTeam: {
        name: "Argentina",
        logo: Argentina,
      },
      date: "Nov 15, 2024",
      time: "5:15",
      format: "AM",
      competitionLogo: Conmebol,
      competition: "WC - Qualifiers Conmebol",
      venue: "Estadio Mas Monumental",
      stadium: "Paraguay",
      scorers: {
        homeTeam: [{ player: "Lautaro", minute: "11'" }],
        awayTeam: [
          { player: "Sanabria", minute: "19'" },
          { player: "Alderete", minute: "47'" },
        ],
      },
    },
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
      venue: "Estadio Mas Monumental, Argentina",
      stadium: "Argentina",
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
      date: "September 6, 2024",
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
      ? teamScorers.reduce((total, scorer) => {
          if (scorer.minute && typeof scorer.minute === "string") {
            return total + scorer.minute.split(",").length;
          }
          return total;
        }, 0)
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
    <div className="bg-gradient-to-b from-[#002f6c] to-[#28537e] min-h-screen py-12 px-4">
      <h1 className="text-center text-5xl md:text-6xl font-bold text-white uppercase tracking-wide mb-12">
        Recent Results
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-12">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg border border-[#002f6c] overflow-hidden transform transition duration-300 hover:scale-105"
          >
            {/* Match Info */}
            <div className="flex items-center justify-between bg-gradient-to-r from-[#003f70] to-[#28537e] p-6">
              {/* Home Team */}
              <div className="flex flex-col items-center">
                <img
                  src={result.homeTeam.logo}
                  alt={result.homeTeam.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white"
                />
                <p className="text-white text-lg sm:text-xl font-semibold mt-2">
                  {result.homeTeam.name}
                </p>
              </div>

              {/* Score */}
              <div className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-white">
                  {calculateScore(result.scorers.homeTeam)} -{" "}
                  {calculateScore(result.scorers.awayTeam)}
                </p>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center">
                <img
                  src={result.awayTeam.logo}
                  alt={result.awayTeam.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white"
                />
                <p className="text-white text-lg sm:text-xl font-semibold mt-2">
                  {result.awayTeam.name}
                </p>
              </div>
            </div>

            {/* Scorers Section */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Home Scorers */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#002f6c] mb-4">
                    {result.homeTeam.name} Scorers
                  </h3>
                  <ul className="space-y-2 text-gray-800">
                    {renderScorers(result.scorers.homeTeam)}
                  </ul>
                </div>

                {/* Away Scorers */}
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-[#002f6c] mb-4">
                    {result.awayTeam.name} Scorers
                  </h3>
                  <ul className="space-y-2 text-gray-800">
                    {renderScorers(result.scorers.awayTeam)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Match Details */}
            <div className="bg-gray-50 p-6">
              <div className="text-center mb-6">
                <p className="text-lg font-medium text-[#28537e]">
                  {result.date} - {result.time} {result.format}
                </p>
                <img
                  src={result.competitionLogo}
                  alt={result.competition}
                  className="w-16 h-16 mx-auto my-4"
                />
                <p className="text-xl font-bold text-[#002f6c]">
                  {result.competition}
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-700 font-medium">{result.venue}</p>
                <p className="text-gray-700">{result.stadium}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
