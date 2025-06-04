import { useLocation } from "react-router-dom";
import header_img from "../assets/header-page.jpg";
import Appointment from "./Appointment";
import Testimonial from "./Testimonial";

const Service = () => {
  const services = [
    {
      icon: "❤️",
      title: "Cardiology",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: "🫁",
      title: "Pulmonary",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: "🧠",
      title: "Neurology",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: "🦴",
      title: "Orthopedics",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: "🦷",
      title: "Dental Surgery",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
    {
      icon: "🧪",
      title: "Laboratory",
      desc: "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.",
    },
  ];

  return (
    <div className="bg-white">
      {useLocation().pathname === "/services" && (
        <img src={header_img} alt="header_img" />
      )}
      <div className="text-center mb-12 mt-5">
        <span className="inline-block px-6 py-1 border border-blue-300 text-blue-600 rounded-full font-medium mb-2">
          Service
        </span>
        <h2 className="text-4xl font-bold text-slate-800">Health Solution</h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-50 rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition duration-300"
          >
            <div className="flex flex-col items-start space-y-4">
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white shadow-md text-2xl text-blue-600">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            {/* Plus button */}
            <div className="mt-6">
              <button className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 rounded-full shadow hover:bg-blue-100 transition duration-200">
                <span className="text-xl font-bold">+</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {useLocation().pathname === "/services" && (
        <div>
          <Appointment />
          <Testimonial />
        </div>
      )}
    </div>
  );
};

export default Service;
