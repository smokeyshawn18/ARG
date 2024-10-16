import Schedule from "./Schedule";
import Argentina from "../assets/arg.png";

import Conmebol from "../assets/conmebol.png";

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
      country: "Bolivia",
    },
    date: "2024-11-14",
    time: "02:45",
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
      country: "Bolivia",
    },
    date: "2024-11-17",
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
