import { useLocation } from "react-router-dom";
import header_img from "../assets/header-page.jpg";
import Testimonial from "./Testimonial";
import AppointmentForm from "../components/appointment/AppointmentForm";

const Appointment = () => {
  return (
    <div className="bg-white mb-8">
      {useLocation().pathname === "/appointment" && (
        <img src={header_img} alt="header_img" className="mb-8" />
      )}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Info */}
        <div>
          <span className="inline-block px-4 py-1 border border-blue-400 rounded-full text-blue-500 font-medium mb-4">
            Appointment
          </span>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Make An Appointment To Visit Our Doctor
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.72 11.72 0 003.69.59 1 1 0 011 1v3.61a1 1 0 01-.91 1A17.74 17.74 0 013 6.91a1 1 0 011-1h3.6a1 1 0 011 1 11.72 11.72 0 00.59 3.69 1 1 0 01-.24 1.05l-2.33 2.14z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Call Us Now</p>
                <p className="text-lg font-semibold text-gray-800">
                  +012 345 6789
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-lg">
              <div className="bg-white text-blue-600 p-3 rounded-full">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm8 7L4.5 6.5h15L12 11z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-600">Mail Us Now</p>
                <p className="text-lg font-semibold text-gray-800">
                  info@example.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <AppointmentForm />
      </div>

      {useLocation().pathname === "/appointment" && <Testimonial />}
    </div>
  );
};

export default Appointment;
