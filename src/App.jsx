import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Fixture from "./components/Fixture";
import History from "./components/History";
import Results from "./components/Results";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/schedule" element={<Fixture />} />
            <Route path="/results" element={<Results />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
