import { Route, Routes } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Home from "./pages/Home/Home";
//  divisional specialists doctors
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

// Specialists in Dhaka
import AnesthesiologyDhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/AnesthesiologyDhaka/AnesthesiologyDhaka";
import BreastDhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/BreastDhaka/BreastDhaka";
import CancerDhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/CancerDhaka/CancerDhaka";
import CancerSurgeryDhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/CancerSurgeryDhaka/CancerSurgeryDhaka";
import CardiacSurgeryDhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/CardiacSurgeryDhaka/CardiacSurgeryDhaka";
import CardiologyDhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/CardiologyDhaka/CardiologyDhaka";
import ChestAsthmaDhaka from "./pages/SpecialistDoctor/Doctors/Dhaka/ChestAsthmaDhaka/ChestAsthmaDhaka";

// divisional hospitals 
import DhakaHospitals from "./pages/SpecialistDoctor/Hospitals/DhakaHospitals/DhakaHospitals";
import ChittagongHospitals from "./pages/SpecialistDoctor/Hospitals/ChittagongHospitals/ChittagongHospitals";
import SylhetHospitals from "./pages/SpecialistDoctor/Hospitals/SylhetHospitals/SylhetHospitals";
import ComillaHospitals from "./pages/SpecialistDoctor/Hospitals/ComillaHospitals/ComillaHospitals";
import NarayanganjHospitals from "./pages/SpecialistDoctor/Hospitals/NarayanganjHospitals/NarayanganjHospitals";
import RajshahiHospitals from "./pages/SpecialistDoctor/Hospitals/RajshahiHospitals/RajshahiHospitals";
import RangpurHospitals from "./pages/SpecialistDoctor/Hospitals/RangpurHospitals/RangpurHospitals";
import KhulnaHospitals from "./pages/SpecialistDoctor/Hospitals/KhulnaHospitals/KhulnaHospitals";
import BarisalHospitals from "./pages/SpecialistDoctor/Hospitals/BarisalHospitals/BarisalHospitals";
import MymensinghHospitals from "./pages/SpecialistDoctor/Hospitals/MymensinghHospitals/MymensinghHospitals";
import PabnaHospitals from "./pages/SpecialistDoctor/Hospitals/PabnaHospitals/PabnaHospitals";
import BograHospitals from "./pages/SpecialistDoctor/Hospitals/BograHospitals/BograHospitals";

// dhaka divisional single doctor details
import SingleDoctor from "./pages/Home/SingleDoctor/SingleDoctor";
import SingleAnesthesiologist from "./pages/SpecialistDoctor/Doctors/Dhaka/AnesthesiologyDhaka/SingleAnesthesiologist/SingleAnesthesiologist";
import SingleBreastSpecialist from "./pages/SpecialistDoctor/Doctors/Dhaka/BreastDhaka/SingleBreastSpecialist/SingleBreastSpecialist";
import SingleCancerSpecialist from "./pages/SpecialistDoctor/Doctors/Dhaka/CancerDhaka/SingleCancerSpecialist/SingleCancerSpecialist";
import HotLine from "./pages/Home/SingleDoctor/HotLine";
import SingleCancerSurgion from "./pages/SpecialistDoctor/Doctors/Dhaka/CancerSurgeryDhaka/SingleCancerSurgion/SingleCancerSurgion";
import SingleCardiacSurgeon from "./pages/SpecialistDoctor/Doctors/Dhaka/CardiacSurgeryDhaka/SingleCardiacSurgeon/SingleCardiacSurgeon";
import SingleCardiologist from "./pages/SpecialistDoctor/Doctors/Dhaka/CardiologyDhaka/SingleCardiologist/SingleCardiologist";
import SingleChestAsthma from "./pages/SpecialistDoctor/Doctors/Dhaka/ChestAsthmaDhaka/SingleChestAsthma/SingleChestAsthma";

// footer
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

        {/* Specialist in Dhaka */}
        <Route path="/anesthesiology-d" element={<AnesthesiologyDhaka />} />
        <Route path="/breast-d" element={<BreastDhaka />} />
        <Route path="/cancer-d" element={<CancerDhaka />} />
        <Route path="/cancer-surgery-d" element={<CancerSurgeryDhaka />} />
        <Route path="/cardiac-surgery-d" element={<CardiacSurgeryDhaka />} />
        <Route path="/cardiology-d" element={<CardiologyDhaka />} />
        <Route path="/chest-d" element={<ChestAsthmaDhaka />} />

        {/* divisional hospitals */}
        <Route path="/dhaka-h" element={<DhakaHospitals />} />
        <Route path="/chittagong-h" element={<ChittagongHospitals />} />
        <Route path="/sylhet-h" element={<SylhetHospitals />} />
        <Route path="/comilla-h" element={<ComillaHospitals />} />
        <Route path="/narayanganj-h" element={<NarayanganjHospitals />} />
        <Route path="/rajshahi-h" element={<RajshahiHospitals />} />
        <Route path="/rangpur-h" element={<RangpurHospitals />} />
        <Route path="/khulna-h" element={<KhulnaHospitals />} />
        <Route path="/barisal-h" element={<BarisalHospitals />} />
        <Route path="/mymensingh-h" element={<MymensinghHospitals />} />
        <Route path="/pabna-h" element={<PabnaHospitals />} />
        <Route path="/bogra-h" element={<BograHospitals />} />

        {/* dhaka single doctor details */}
        <Route path="/doctor-details/:id" element={<SingleDoctor />} />
        <Route path="/dhaka-anesthesiologist/:id" element={<SingleAnesthesiologist />} />
        <Route path="/dhaka-breast/:id" element={<SingleBreastSpecialist />} />
        <Route path="/dhaka-cancer/:id" element={<SingleCancerSpecialist />} />
        <Route path="/dhaka-cancerSurgeon/:id" element={<SingleCancerSurgion />} />
        <Route path="/dhaka-cardiacSurgeon/:id" element={<SingleCardiacSurgeon />} />
        <Route path="/dhaka-cardiologist/:id" element={<SingleCardiologist />} />
        <Route path="/dhaka-chestAsthma/:id" element={<SingleChestAsthma />} />
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
