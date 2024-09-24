import { motion } from "framer-motion";
// Use relevant images
import afaLogo from "../assets/afa.png";
import worldCup1978 from "../assets/1978.jpeg";
import maradona from "../assets/maradona.webp";

import qatar2022 from "../assets/2022.webp";
import Finalissima from "../assets/finalissima.jpg";
import Copa from "../assets/copa.webp";

const events = [
  {
    year: "1893",
    title: "Formation of AFA",
    description: "The Argentine Football Association was established.",
    image: afaLogo,
  },
  {
    year: "1978",
    title: "First World Cup Victory",
    description: "Argentina won its first World Cup on home soil.",
    image: worldCup1978,
    highlightUrl: "https://www.youtube.com/watch?v=2EwfHjbeNV8",
  },
  {
    year: "1986",
    title: "The Maradona Era",
    description:
      "Diego Maradona led Argentina to victory in the 1986 World Cup.",
    image: maradona,
    highlightUrl: "https://www.youtube.com/watch?v=Fw1zBZC--AY",
  },
  {
    year: "2022",
    title: "Finalissima Victory",
    description: "Argentina beat Italy 3-0 to win the 2022 Finalissima.",
    image: Finalissima,
    highlightUrl: "https://www.youtube.com/watch?v=J5QyAnYbFmc",
  },
  {
    year: "2022",
    title: "Third World Cup Victory",
    description: "Lionel Messi and Argentina claimed the 2022 World Cup.",
    image: qatar2022,
    highlightUrl: "https://www.youtube.com/watch?v=zhEWqfP6V_w",
  },
  {
    year: "2024",
    title: "Copa América 2024 Victory",
    description:
      "Argentina won its 16th Copa América title, defeating Columbia in the final.",
    image: Copa,
    highlightUrl: "https://www.youtube.com/watch?v=Z0a4C5B7wSo",
  },
];

const History = () => {
  return (
    <div className="bg-gradient-to-r from-[#74acdf] to-[#ffffff] py-14 px-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-sky-900 mb-6">
          Argentina Men&apos;s Football Team History
        </h1>
        <p className="text-2xl text-sky-800 font-semibold">
          A legacy of football greatness spanning decades.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 shadow-xl rounded-2xl border border-sky-300 transform transition-transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-60 mb-5">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-3xl font-bold text-sky-700 mb-3">
              {event.year}
            </h2>
            <h3 className="text-2xl font-extrabold text-black mb-4">
              {event.title}
            </h3>
            <p className="text-lg text-gray-700 font-medium mb-4">
              {event.description}
            </p>

            {/* Conditional Highlights Button */}
            {(event.year === "2022" ||
              event.year === "2024" ||
              event.year === "1978" ||
              event.year === "1986") && (
              <a
                href={event.highlightUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-sky-600 text-white font-bold text-lg rounded-full transition-colors duration-300 hover:bg-sky-700"
              >
                Watch Highlights
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default History;
