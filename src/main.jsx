import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Team from "./components/Team.jsx";
import Fixture from "./components/Fixture.jsx";
import History from "./components/History.jsx";
import Results from "./components/Result.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Team" element={<Team />} />{" "}
        <Route path="/schedule" element={<Fixture />} />
        {/* <Route path="/results" element={<Results />} />
      <Route path="/trophy-cabinet" element={<TrophyCabinet />} /> */}
        <Route path="/results" element={<Results />} />
        <Route path="/History" element={<History />} />
        {/* Add route for PlayerSection */}
        {/* Add more routes as needed */}
      </Routes>
      {/* <Footer /> */}
      <Footer />
    </Router>
  </StrictMode>
);
