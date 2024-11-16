import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Properties from "./pages/Properties";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/properties" element={<Properties />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
