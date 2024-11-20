import Schedule from "./Schedule";
import Argentina from "../assets/arg.png";
import Conmebol from "../assets/conmebol.png";
import Uru from "../assets/uru.png";
import Brazil from "../assets/brazil.png";
import Chile from "../assets/chile.png";

const fixtures = [
  {
    homeTeam: {
      name: "Uruguay",
      logo: Uru,
      country: "Bolivia",
    },
    awayTeam: {
      name: "Argentina",
      logo: Argentina,
      country: "Argentina",
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
  {
    homeTeam: {
      name: "Chile",
      logo: Chile,
      country: "Chile",
    },
    awayTeam: {
      name: "Argentina",
      logo: Argentina,
      country: "Argentina",
    },
    date: "2025-06-05",
    time: "01:45",
    format: "AM",
    comp: "WC - Qualifiers Conmebol",
    venue: "Estadio Nacional Julio Martinez Pradanos",
    stadium: "Chile",
    competetion: Conmebol,
  },
];

function Fixture() {
  return (
    <div className="App">
      <Schedule fixtures={fixtures} />
    </div>
  );
}

export default Fixture;
