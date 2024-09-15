import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./components/Team";

import Fixture from "./components/Fixture";
import History from "./components/History";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />} />{" "}
        <Route path="/schedule" element={<Fixture />} />
        <Route path="/results" element={<Results />} />
        <Route path="/History" element={<History />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
