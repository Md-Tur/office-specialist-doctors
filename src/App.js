import { Route, Routes } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home/Home";
import Dhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/Dhaka";
import Chittagong from "./pages/SpecialistDoctor/Doctors/Chittagong/Chittagong";
import Sylhet from "./pages/SpecialistDoctor/Doctors/Sylhet/Sylhet";
import Comilla from "./pages/SpecialistDoctor/Doctors/Comilla/Comilla";
import Narayanganj from "./pages/SpecialistDoctor/Doctors/Narayanganj/Narayanganj";
import Rajshahi from "./pages/SpecialistDoctor/Doctors/Rajshahi/Rajshahi";
import Rangpur from "./pages/SpecialistDoctor/Doctors/Rangpur/Rangpur";
import Khulna from "./pages/SpecialistDoctor/Doctors/Khulna/Khulna";
import Barisal from "./pages/SpecialistDoctor/Doctors/Barisal/Barisal";
import Mymensingh from "./pages/SpecialistDoctor/Doctors/Mymensingh/Mymensingh";
import Pabna from "./pages/SpecialistDoctor/Doctors/Pabna/Pabna";
import Bogra from "./pages/SpecialistDoctor/Doctors/Bogra/Bogra";
import SingleDoctor from "./pages/Home/SingleDoctor/SingleDoctor";
import HotLine from "./pages/Home/SingleDoctor/HotLine";
import Payment from "./pages/Footer/Payment";
import Contact from "./pages/Footer/Contact";
import Members from "./pages/Footer/Members/Members";
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

        {/* divisional specialist doctors */}
        <Route path="/dhaka-d" element={<Dhaka />} />
        <Route path="/chittagong-d" element={<Chittagong />} />
        <Route path="/sylhet-d" element={<Sylhet />} />
        <Route path="/comilla-d" element={<Comilla />} />
        <Route path="/narayanganj-d" element={<Narayanganj />} />
        <Route path="/rajshahi-d" element={<Rajshahi />} />
        <Route path="/rangpur-d" element={<Rangpur />} />
        <Route path="/khulna-d" element={<Khulna />} />
        <Route path="/barisal-d" element={<Barisal />} />
        <Route path="/mymensingh-d" element={<Mymensingh />} />
        <Route path="/pabna-d" element={<Pabna />} />
        <Route path="/bogra-d" element={<Bogra />} />

        {/* single doctor details */}
        <Route path="/doctor-details/:id" element={<SingleDoctor />} />
        <Route path="/hotline" element={<HotLine />} />

        {/* footer */}
        <Route path="/payment" element={<Payment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
