import { Route, Routes } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home/Home";
import Payment from "./pages/Footer/Payment";
import Contact from "./pages/Footer/Contact";
import About from "./pages/Footer/About";
import Privacy from "./pages/Footer/Privacy";
import Disclaimer from "./pages/Footer/Disclaimer";
import Footer from "./shared/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
