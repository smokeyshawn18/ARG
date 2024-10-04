import Schedule from "./Schedule";
import Argentina from "../assets/arg.png";
import Vene from "../assets/vene.png";
import Conmebol from "../assets/conmebol.png";
import Bolivia from "../assets/bolivia.png";
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
      name: "Venezuela",
      logo: Vene,
      country: "Venezuela",
    },
    date: "2024-10-11",
    time: "04:45",
    format: "AM",
    comp: "WC - Qualifiers Conmebol",
    venue: "Estadio Monumental de Maturín",
    stadium: "Venezuela",
    competetion: Conmebol,
  },
  {
    homeTeam: {
      name: "Argentina",
      logo: Argentina,
      country: "Argentina",
    },
    awayTeam: {
      name: "Bolivia",
      logo: Bolivia,
      country: "Bolivia",
    },
    date: "2024-10-16",
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
