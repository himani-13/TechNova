import { Routes, Route } from "react-router-dom";

import MainPortal from "./pages/MainPortal";

import WebsiteLayout from "./components/WebsiteLayout";
import Home from "./pages/Website/Home";
import About from "./pages/Website/About";
import Services from "./pages/Website/Services";
import Industries from "./pages/Website/Industries";
import CaseStudies from "./pages/Website/CaseStudies";
import CaseDetails from "./pages/Website/CaseDetails";
import Careers from "./pages/Website/Careers";
import Contact from "./pages/Website/Contact";

import ClientLogin from "./pages/auth/Login";
import Dashboard from "./pages/client/Dashboard";
import ProjectDetail from "./pages/client/ProjectDetail";
import RaiseTicket from "./pages/client/RaiseTicket";

import AdminLogin from "./pages/Website/admin/AdminLogin";
import Leads from "./pages/Website/admin/Leads";
import ProjectsAdmin from "./pages/Website/admin/ProjectAdmin";
import Analytics from "./pages/Website/admin/Analytics";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<MainPortal />} />

      <Route path="/corporate" element={<WebsiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="industries" element={<Industries />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="case-studies/:id" element={<CaseDetails />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="/client/login" element={<ClientLogin />} />
      <Route path="/client/dashboard" element={<Dashboard />} />
      <Route path="/client/project/:id" element={<ProjectDetail />} />
      <Route path="/client/ticket" element={<RaiseTicket />} />

      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/leads" element={<Leads />} />
      <Route path="/admin/projects" element={<ProjectsAdmin />} />
      <Route path="/admin/analytics" element={<Analytics />} />

    </Routes>
  );
}