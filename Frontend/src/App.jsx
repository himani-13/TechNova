import { Routes, Route } from "react-router-dom";

import WebsiteLayout from "./components/WebsiteLayout";

import Home from "./pages/Website/Home";
import About from "./pages/website/About";
import Services from "./pages/website/Services";
import CaseStudies from "./pages/website/CaseStudies";
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

      {/* Website */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Auth */}
      <Route path="/login" element={<Login />} />

      {/* Client */}
      <Route path="/client/dashboard" element={<Dashboard />} />
      <Route path="/client/project/:id" element={<ProjectDetail />} />

      {/* Admin */}
      <Route path="/admin/leads" element={<Leads />} />
      <Route path="/admin/services" element={<ServicesAdmin />} />
      <Route path="/admin/case-studies" element={<CaseStudiesAdmin />} />
      <Route path="/admin/projects" element={<ProjectsAdmin />} />

    </Routes>
  );
}