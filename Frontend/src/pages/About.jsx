import About1 from "../assets/about-1.jpg";
import About2 from "../assets/about-2.jpg";
import { CiCircleCheck } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import Feature from "./Feature";
import Doctors from "./Doctors";
import header_img from "../assets/header-page.jpg";

const About = () => {
  return (
    <div>
      {/* About Us Section */}
      {useLocation().pathname === "/about" && (
        <img src={header_img} alt="header_img" />
      )}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative flex flex-col">
            <img
              src={About1}
              alt="About Us"
              className="w-3/4 rounded-lg shadow self-end"
            />
            <img
              src={About2}
              alt="About Us"
              className="w-1/2 rounded-lg shadow bg-white pt-3 pr-3 -mt-[25%]"
            />
          </div>
          <div>
            <span className="inline-block px-6 py-1 border border-blue-300 text-blue-600 rounded-full font-medium mb-2">
              About Us
            </span>
            <h3 className="text-xl font-semibold mb-4">
              Why You Should Trust Us? Get Know About Us!
            </h3>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet.
            </p>
            <p className="mb-4">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
              stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo
              nonumy clita sit at, sed sit sanctus dolor eos.
            </p>
            <div className="space-y-2 ml-2 mb-4">
              <div className="flex items-center gap-2">
                <CiCircleCheck className="text-green-600 text-xl" />
                <span>Quality health care</span>
              </div>
              <div className="flex items-center gap-2">
                <CiCircleCheck className="text-green-600 text-xl" />
                <span>Only Qualified Doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <CiCircleCheck className="text-green-600 text-xl" />
                <span>Medical Research Professionals</span>
              </div>
            </div>
            <button
              href="#"
              className="bg-blue-600 text-white px-8 py-4 rounded-4xl hover:bg-blue-700 mt-5"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      {useLocation().pathname === "/about" && (
        <div className="mt-12">
          <Feature />
          <Doctors />
        </div>
      )}
    </div>
  );
};

export default About;
