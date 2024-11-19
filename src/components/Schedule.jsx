import PropTypes from "prop-types";
import { FaCalendarAlt } from "react-icons/fa"; // Calendar icon

const Schedule = ({ fixtures }) => {
  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return date.toLocaleDateString("en-US", options).replace(",", "-");
  };

  return (
    <div className="p-8 bg-darkblue min-h-screen">
      <h1 className="text-4xl font-extrabold text-sky-900 mb-8 uppercase tracking-wider text-center">
        Upcoming Fixtures
      </h1>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {fixtures.map((fixture, index) => (
          <div
            key={index}
            className="w-full sm:w-80 md:w-96 lg:w-full bg-white rounded-xl shadow-lg border border-darkblue"
          >
            <div className="relative">
              <div className="w-full h-40 bg-gradient-to-r from-[#31607f] to-[#002f6c] flex items-center justify-center text-center text-white">
                {/* Home Team Logo */}
                <div className="absolute left-4 flex flex-col items-center">
                  <img
                    src={fixture.homeTeam.logo}
                    alt={fixture.homeTeam.name}
                    className="w-24 h-24 rounded-full border-2 border-white"
                  />
                  <p className="mt-2 text-lg font-semibold">
                    {fixture.homeTeam.name}
                  </p>
                </div>

                {/* VS Text */}
                <p className="text-3xl font-bold mx-8">VS</p>

                {/* Away Team Logo */}
                <div className="absolute right-4 flex flex-col items-center">
                  <img
                    src={fixture.awayTeam.logo}
                    alt={fixture.awayTeam.name}
                    className="w-24 h-24 rounded-full border-2 border-white"
                  />
                  <p className="mt-2 text-lg font-semibold">
                    {fixture.awayTeam.name}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="text-center mb-4">
                  <FaCalendarAlt className="text-blue-500 text-2xl mb-2" />
                  <p className="text-xl font-semibold text-darkblue">
                    {formatDate(fixture.date)}
                  </p>
                  <p className="text-xl font-semibold text-darkblue">
                    {fixture.time} {fixture.format}
                  </p>
                  <img
                    src={fixture.competetion}
                    className="w-12 h-14 mx-auto mt-3 mb-3"
                    alt=""
                  />
                  <p className="text-xl font-bold text-darkblue">
                    {fixture.comp}
                  </p>
                </div>
                <div className="text-center mb-4">
                  <p className="text-md font-semibold text-gray-800">
                    {fixture.venue}
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    {fixture.stadium}
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

// Prop validation for Schedule
Schedule.propTypes = {
  fixtures: PropTypes.arrayOf(
    PropTypes.shape({
      homeTeam: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
      awayTeam: PropTypes.shape({
        name: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired,
      stadium: PropTypes.string.isRequired,
      referee: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Schedule;
