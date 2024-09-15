import Schedule from "./Schedule";
import Argentina from "../assets/arg.png";
import Vene from "../assets/vene.png";
import Conmebol from "../assets/conmebol.png";

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
      country: "Brazil",
    },
    date: "2024-10-11",
    time: "04:45",
    format: "AM",
    comp: "WC - Qualifiers Conmebol",
    venue: "Estadio Monumental de Maturín",
    stadium: "Venezuela",
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
