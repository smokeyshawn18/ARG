import {
  FaTrophy,
  FaRegHandshake,
  FaTimesCircle,
  FaFutbol,
} from "react-icons/fa";
import Scaloni from "../assets/scaloni.webp"; // Update with correct path

export default function CoachProfile() {
  // Define individual stats
  const wins = 62;
  const draws = 13;
  const losses = 8;
  const totalTrophies = 4; // Example value

  // Calculate total matches
  const totalMatches = wins + draws + losses;

  // Data array with computed totalMatches
  const data = [
    {
      type: "stat",
      icon: <FaFutbol className="text-gray-600 w-6 h-6" />,
      label: "Matches",
      value: totalMatches,
    },
    {
      type: "stat",
      icon: <FaTrophy className="text-teal-600 w-6 h-6" />,
      label: "Wins",
      value: wins,
    },
    {
      type: "stat",
      icon: <FaRegHandshake className="text-blue-400 w-6 h-6" />,
      label: "Draws",
      value: draws,
    },
    {
      type: "stat",
      icon: <FaTimesCircle className="text-rose-400 w-6 h-6" />,
      label: "Losses",
      value: losses,
    },
    {
      type: "stat",
      icon: <FaTrophy className="text-yellow-500 w-6 h-6" />,
      label: "Trophies",
      value: totalTrophies,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl">
        {/* Coach Image */}
        <div className="relative mb-6">
          <img
            src={Scaloni}
            alt="Argentina Coach"
            className="w-50 h-40 mx-auto rounded-xl border-4 border-teal-200 shadow-md transition-transform transform hover:scale-110"
          />
        </div>

        {/* Coach Name */}
        <h2 className="text-3xl font-extrabold text-gray-800 mt-6 text-center">
          Lionel Scaloni
        </h2>

        {/* Coach Role */}
        <p className="text-lg text-gray-900 mt-2 italic font-bold text-center">
          Head Coach of Argentina
        </p>

        {/* Bio */}
        <p className="mt-4 text-gray-800 leading-relaxed font-semibold text-center">
          Lionel Scaloni has led the Argentina national football team since
          2018. Under his leadership, Argentina won the 2021, 2024 Copa América,
          Finalissima 2022 the 2022 FIFA World Cup.
        </p>

        {/* Stats */}
        <div className="mt-6">
          {data.map((stat, index) => (
            <div key={index} className="flex items-center mb-4 space-x-4">
              <div className="p-3">{stat.icon}</div>
              <p className="text-lg font-bold text-gray-700">
                {stat.label}:{" "}
                <span className="text-gray-800">{stat.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
