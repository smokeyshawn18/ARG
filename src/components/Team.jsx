// In a parent component
import TeamSection from "./TeamSection";
import Messi from "../assets/messi.jpg";
import Lautaro from "../assets/lautaro.avif";
import Alvarez from "../assets/alvareez.jpg";
import Atletico from "../assets/atletico.png";
import Inter from "../assets/inter.webp";
import Miami from "../assets/miami.png";
import Roma from "../assets/roma.png";
import Dybala from "../assets/dybala.webp";
import Mac from "../assets/mac.webp";
import LiverPool from "../assets/liv.png";
import De from "../assets/de.jpeg";
import ADM from "../assets/adm.webp";
import Benfica from "../assets/benfica.png";
import Paredes from "../assets/paredes.png";
import Nicolas from "../assets/nic.jpg";
import Juventus from "../assets/juv.png";
import Enzo from "../assets/enzo.jpg";
import Chelsea from "../assets/chelsea.png";
import Garnacho from "../assets/garnacho.webp";
import United from "../assets/united.svg";
import Lisandro from "../assets/lisandro.webp";
import Bayer from "../assets/baye.png";
import Pala from "../assets/pal.jpg";
import Romero from "../assets/romero.webp";
import Tottenham from "../assets/tot.jpg";
import Emi from "../assets/emi.jpg";
import Villa from "../assets/villa.png";
import Molina from "../assets/molina.jpg";

const players = [
  {
    name: "Lionel Messi",
    position: "RW",
    shirt: 10,
    age: 37,
    image: Messi,
    club: Miami,
    careerStats: {
      appearances: 1047,
      goals: 821,
      assists: 361,
    },
    seasonStats: {
      appearances: 36,
      goals: 29,
      assists: 18,
    },
  },
  {
    name: "Ángel Di María",
    position: "AM",
    shirt: 11,
    status: "Retired (Int'l)",
    age: 36,
    image: ADM,
    club: Benfica,
    careerStats: {
      appearances: 913,
      goals: 210,
      assists: 299,
    },
    seasonStats: {
      appearances: 24,
      goals: 11,
      assists: 6,
    },
  },
  {
    name: "Paulo Dybala",
    position: "RW",
    shirt: 21,
    club: Roma,
    age: 30,
    image: Dybala,
    careerStats: {
      appearances: 541,
      goals: 190,
      assists: 89,
    },
    seasonStats: {
      appearances: 22,
      goals: 6,
      assists: 2,
    },
  },
  {
    name: "Lautaro Martinez",
    position: "ST",
    shirt: 22,
    club: Inter,
    age: 27,
    image: Lautaro,
    careerStats: {
      appearances: 408,
      goals: 185,
      assists: 57,
    },
    seasonStats: {
      appearances: 29,
      goals: 10,
      assists: 3,
    },
  },

  {
    name: "Julián Álvarez",
    position: "ST",
    shirt: 9,
    age: 24,
    image: Alvarez,
    club: Atletico,
    careerStats: {
      appearances: 261,
      goals: 99,
      assists: 50,
    },
    seasonStats: {
      appearances: 32,
      goals: 14,
      assists: 3,
    },
  },
  {
    name: "Nicolás González",
    position: "RW",
    shirt: 15,
    age: 26,
    image: Nicolas,
    club: Juventus,
    careerStats: {
      appearances: 290,
      goals: 77,
      assists: 34,
    },
    seasonStats: {
      appearances: 12,
      goals: 4,
      assists: 2,
    },
  },
  {
    name: "Rodrigo De Paul",
    position: "CM",
    shirt: 7,
    age: 30,
    image: De,
    club: Atletico,
    careerStats: {
      appearances: 503,
      goals: 56,
      assists: 75,
    },
    seasonStats: {
      appearances: 30,
      goals: 3,
      assists: 5,
    },
  },

  {
    name: "Alexis Mac Allister",
    position: "CM",
    shirt: 20,
    club: LiverPool,
    age: 25,
    image: Mac,
    careerStats: {
      appearances: 292,
      goals: 44,
      assists: 32,
    },
    seasonStats: {
      appearances: 29,
      goals: 4,
      assists: 2,
    },
  },

  {
    name: "Leandro Paredes",
    position: "CM",
    shirt: 5,
    club: Roma,
    age: 30,
    image: Paredes,
    careerStats: {
      appearances: 446,
      goals: 35,
      assists: 44,
    },
    seasonStats: {
      appearances: 18,
      goals: 1,
      assists: 2,
    },
  },

  {
    name: "Enzo Fernandez",
    position: "DM",
    shirt: 24,
    age: 23,
    image: Enzo,
    club: Chelsea,
    careerStats: {
      appearances: 207,
      goals: 28,
      assists: 28,
    },
    seasonStats: {
      appearances: 29,
      goals: 3,
      assists: 9,
    },
  },

  {
    name: "Exequiel Palacios",
    position: "CM",
    shirt: 14,
    age: 26,
    image: Pala,
    club: Bayer,
    careerStats: {
      appearances: 240,
      goals: 24,
      assists: 25,
    },
    seasonStats: {
      appearances: 18,
      goals: 1,
      assists: 5,
    },
  },
  {
    name: "Alejandro Garnacho",
    position: "LW",
    shirt: 17,
    age: 20,
    image: Garnacho,
    club: United,
    careerStats: {
      appearances: 92,
      goals: 15,
      assists: 10,
    },
    seasonStats: {
      appearances: 30,
      goals: 8,
      assists: 5,
    },
  },
  {
    name: "Nahuel Molina",
    position: "RB",
    shirt: 26,
    age: 26,
    image: Molina,
    club: Atletico,
    careerStats: {
      appearances: 266,
      goals: 19,
      assists: 26,
    },
    seasonStats: {
      appearances: 22,
      goals: 1,
      assists: 4,
    },
  },

  {
    name: "Cristian Romero",
    position: "CB",
    shirt: 13,
    age: 26,
    image: Romero,
    club: Tottenham,
    careerStats: {
      appearances: 257,
      goals: 15,
      assists: 10,
    },
    seasonStats: {
      appearances: 16,
      goals: 1,
      assists: 0,
    },
  },
  {
    name: "Lisandro Martinez",
    position: "CB",
    shirt: 25,
    age: 26,
    image: Lisandro,
    club: United,
    careerStats: {
      appearances: 260,
      goals: 10,
      assists: 13,
    },
    seasonStats: {
      appearances: 28,
      goals: 0,
      assists: 1,
    },
  },
  {
    name: "Emiliano Martínez",
    position: "GK",
    shirt: 1,
    age: 32,
    image: Emi, // Replace with actual image
    club: Villa,
    careerStats: {
      appearances: 305,
      goalsConceded: 336,
      cleanSheets: 119,
    },
    seasonStats: {
      appearances: 29,
      goalsConceded: 38,
      cleanSheets: 7,
    },
  },

  // Add more players as needed
];

function App() {
  return (
    <div>
      <TeamSection players={players} />
    </div>
  );
}

export default App;
