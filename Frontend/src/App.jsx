import { Routes, Route } from "react-router-dom";

import WebsiteLayout from "./components/WebsiteLayout";

import Home from "./pages/website/Home";
import About from "./pages/website/About";
import Services from "./pages/website/Services";
import Industries from "./pages/website/Industries";
import CaseStudies from "./pages/website/CaseStudies";
import CaseDetails from "./pages/Website/CaseDetails";
import Careers from "./pages/website/Careers";
import Contact from "./pages/website/Contact";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/client/Dashboard";
import ProjectDetail from "./pages/client/ProjectDetail";

import Leads from "./pages/admin/Leads";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import CaseStudiesAdmin from "./pages/admin/CaseStudiesAdmin";
import ProjectsAdmin from "./pages/admin/ProjectsAdmin";

export default function App() {
  return (
    <Routes>

      
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/case-studies/:id" element={<CaseDetails />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      
      <Route path="/login" element={<Login />} />

    
      <Route path="/client/dashboard" element={<Dashboard />} />
      <Route path="/client/project/:id" element={<ProjectDetail />} />

      
      <Route path="/admin/leads" element={<Leads />} />
      <Route path="/admin/services" element={<ServicesAdmin />} />
      <Route path="/admin/case-studies" element={<CaseStudiesAdmin />} />
      <Route path="/admin/projects" element={<ProjectsAdmin />} />
      <Route path="/contact" element={<Contact />} />
     <Route path="/services" element={<Services />} />
    </Routes>
  );
}