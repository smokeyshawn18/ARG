import Schedule from "./Schedule";
import Argentina from "../assets/arg.png";

import Conmebol from "../assets/conmebol.png";
import Uru from "../assets/uru.png";
import Brazil from "../assets/brazil.png";
import Para from "../assets/para.png";
import Peru from "../assets/peru.png";

const fixtures = [
  {
    homeTeam: {
      name: "Argentina",
      logo: Argentina,
      country: "Argentina",
    },
    awayTeam: {
      name: "Paraguay",
      logo: Para,
      country: "Paraguay",
    },
    date: "2024-11-15",
    time: "05:15",
    format: "AM",
    comp: "WC - Qualifiers Conmebol",
    venue: "Estadio Mas Monumental",
    stadium: "Buenos Aires, Argentina",
    competetion: Conmebol,
  },
  {
    homeTeam: {
      name: "Argentina",
      logo: Argentina,
      country: "Argentina",
    },
    awayTeam: {
      name: "Peru",
      logo: Peru,
      country: "Peru",
    },
    date: "2024-11-20",
    time: "05:45",
    format: "AM",
    comp: "WC - Qualifiers Conmebol",
    venue: "Estadio Mas Monumental",
    stadium: "Buenos Aires, Argentina",
    competetion: Conmebol,
  },
  {
    homeTeam: {
      name: "Argentina",
      logo: Argentina,
      country: "Argentina",
    },
    awayTeam: {
      name: "Uruguay",
      logo: Uru,
      country: "Bolivia",
    },
    date: "2025-03-20",
    time: "02:45",
    format: "AM",
    comp: "WC - Qualifiers Conmebol",
    venue: "Centenario Stadium",
    stadium: "Uruguay",
    competetion: Conmebol,
  },
  {
    homeTeam: {
      name: "Argentina",
      logo: Argentina,
      country: "Argentina",
    },
    awayTeam: {
      name: "Brazil",
      logo: Brazil,
      country: "Brazil",
    },
    date: "2025-03-23",
    time: "02:45",
    format: "AM",
    comp: "WC - Qualifiers Conmebol",
    venue: "Estadio Mas Monumental",
    stadium: "Buenos Aires, Argentina",
    competetion: Conmebol,
  },

  // Add more fixtures as needed
];

function Fixture() {
  return (
    <div className="App">
      <Schedule fixtures={fixtures} />
    </div>
  );
}

export default Fixture;
