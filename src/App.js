import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Logements from "./Logements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/Logements" element={<Logements />} />
      </Routes>
    </Router>
  );
}

export default App;
