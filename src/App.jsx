import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Contact from "./pages/ContactUs";
import Footer from "./Components/Footer";
import About from "./pages/About";
import SinglePropertyPage from "./Components/SinglePropertyPage";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/single-property/:id" element={<SinglePropertyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
