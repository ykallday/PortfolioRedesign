import { Routes, Route } from "react-router-dom";
import Enter from "./Enter";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import SoftwareDevelopment from "./SoftwareDevelopment";
import DigitalMarketing from "./DigitalMarketing";
import Connect from "./Connect";

export default function PageOrg() {
  return (
    <Routes>
      <Route path="/" element={<Enter />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route path="resume" element={<Resume />} />
      <Route path="software_development" element={<SoftwareDevelopment />} />
      <Route path="digital_marketing" element={<DigitalMarketing />} />
      <Route path="connect" element={<Connect />} />
    </Routes>
  );
}
