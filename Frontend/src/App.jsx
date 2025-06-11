import { Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout.jsx"; // layout bao quanh mọi trang

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Feature from "./pages/Feature";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin/Management
import PatientList from "./components/patient/PatientList";
import AppointmentList from "./components/appointment/AppointmentList";
import MedicalRecordList from "./components/medical/MedicalRecordList";
import InventoryList from "./components/medical/InventoryList";
import StaffList from "./components/staff/StaffList";
import FinanceList from "./components/finance/FinanceList";
import FeedbackList from "./components/customer/FeedbackList";
import UserManagement from "./components/admin/UserManagement";
import ReportDashboard from "./components/reports/ReportDashboard";
import AuthPage from "./pages/User/AuthPage.jsx";

import MedicalHistory from "./pages/User/MedicalHistory.jsx"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Các route con sẽ render trong <Outlet /> của Layout */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="feature" element={<Feature />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Quản lý */}
        <Route path="patients" element={<PatientList />} />
        <Route path="appointments" element={<AppointmentList />} />
        <Route path="medical-record-list" element={<MedicalRecordList />} />
        <Route path="inventory" element={<InventoryList />} />
        <Route path="staff" element={<StaffList />} />
        <Route path="finance" element={<FinanceList />} />
        <Route path="customer" element={<FeedbackList />} />
        <Route path="admin" element={<UserManagement />} />
        <Route path="reports" element={<ReportDashboard />} />

        <Route path="/medical-history" element={<MedicalHistory />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
