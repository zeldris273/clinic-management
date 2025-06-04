import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer"; // nếu có

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen">
        <Outlet /> {/* nơi render các page con */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
