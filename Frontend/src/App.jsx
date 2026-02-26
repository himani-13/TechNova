import { Routes, Route, Navigate } from "react-router-dom";

import WebsiteLayout from "./components/WebsiteLayout";

import Home from "./pages/Website/Home";
import About from "./pages/Website/About";
import Services from "./pages/Website/Services";
import Industries from "./pages/Website/Industries";
import CaseStudies from "./pages/Website/CaseStudies";
import Careers from "./pages/Website/Careers";
import Contact from "./pages/Website/Contact";

export default function App() {
  return (
    <Routes>
      
      <Route path="/corporate" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      
      <Route
        path="/services"
        element={<Navigate to="/corporate/services" replace />}
      />
      <Route
        path="/contact"
        element={<Navigate to="/corporate/contact" replace />}
      />

    </Routes>
  );
}  