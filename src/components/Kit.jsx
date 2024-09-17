import HomeKit from "../assets/homekit.jpg";
import AwayKit from "../assets/awaykit.jpg";
import GK1Kit from "../assets/gk1.jpg";
import GK2Kit from "../assets/gk2.jpg";
import Training from "../assets/training.jpg";
import AdidasLogo from "../assets/adidas.png"; // Adidas logo

const Kit2024 = () => {
  const kits = [
    {
      id: 1,
      name: "2024 Home",
      image: HomeKit,
      sponsor: "Adidas",
      logo: AdidasLogo,
    },
    {
      id: 2,
      name: "2024 Away",
      image: AwayKit,
      sponsor: "Adidas",
      logo: AdidasLogo,
    },
    {
      id: 3,
      name: "2024 GK 1",
      image: GK1Kit,
      sponsor: "Adidas",
      logo: AdidasLogo,
    },
    {
      id: 4,
      name: "2024 GK 2",
      image: GK2Kit,
      sponsor: "Adidas",
      logo: AdidasLogo,
    },
    {
      id: 5,
      name: "2024 Training",
      image: Training,
      sponsor: "Adidas",
      logo: AdidasLogo,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8 text-sky-900 tracking-tight uppercase">
        Argentina 2024 Kits
      </h2>

      {/* Card Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-16 lg:px-24">
        {kits.map((kit) => (
          <div
            key={kit.id}
            className="bg-white rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            {/* Kit Image */}
            <div className="p-4">
              <img
                src={kit.image}
                alt={kit.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
            </div>

            {/* Kit Information */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-sky-600">{kit.name}</h3>
              <p className="text-gray-800 mt-4 text-base font-semibold uppercase">
                Sponsored by:
              </p>
            </div>
            {/* Card Header with Adidas Logo */}
            <div className="bg-gradient-to-r from-sky-600 to-sky-800 rounded-t-lg p-4 flex justify-center items-center">
              <img
                src={kit.logo}
                alt={`${kit.sponsor} Logo`}
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kit2024;
