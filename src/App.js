import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
