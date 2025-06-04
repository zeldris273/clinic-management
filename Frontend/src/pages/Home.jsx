import Doctors from "./Doctors";
import HealthImage from "../assets/carousel-1.jpg";
import About from "./About";
import Service from "./Services";
import Feature from "./Feature";
import Appointment from "./Appointment";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <div className="bg-blue-600 text-white p-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-full min-h-[24rem] md:min-h-[32rem]">
          <div className="h-full">
            <img
              src={HealthImage}
              alt="Health Image"
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => (e.target.src = "https://via.placeholder.com/600x400")}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 leading-tight text-center">
              Good Health Is The Root Of All Happiness
            </h1>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-center">
              <div className="relative">
                <h3 className="text-2xl font-bold">123</h3>
                <p>Expert Doctors</p>
                <span className="absolute right-[-0.75rem] top-1/2 -translate-y-1/2 transform bg-white w-px h-12 sm:block hidden"></span>
              </div>
              <div className="relative">
                <h3 className="text-2xl font-bold">1234</h3>
                <p>Medical Staff</p>
                <span className="absolute right-[-0.75rem] top-1/2 -translate-y-1/2 transform bg-white w-px h-12 sm:block hidden"></span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">12345</h3>
                <p>Total Patients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <About/>
        <Service/>
        <div className="mt-5"><Feature/></div>
        <Doctors/>
        <div className="mt-5"><Appointment/></div>
        <Testimonial/>
      </div>
    </div>
  );
};

export default Home;