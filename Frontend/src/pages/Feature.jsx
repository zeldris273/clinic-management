import FeatureImg from '../assets/feature.jpg'; 

const Feature = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <button className="border border-white px-6 py-2 rounded-full mb-4">Features</button>
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="mb-8 text-lg leading-relaxed">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item 1 */}
              <div className="flex items-center">
                <div className="bg-white text-blue-600 p-4 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4S8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">Experience</p>
                  <h4 className="font-bold">Doctors</h4>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center">
                <div className="bg-white text-blue-600 p-4 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11l3 3L22 4l-1.41-1.41L12 12.17l-2.59-2.58L8 11z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">Quality</p>
                  <h4 className="font-bold">Services</h4>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center">
                <div className="bg-white text-blue-600 p-4 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4a2 2 0 00-2 2v16l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">Positive</p>
                  <h4 className="font-bold">Consultation</h4>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center">
                <div className="bg-white text-blue-600 p-4 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17h-2v6h6v-2h-4z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm">24 Hours</p>
                  <h4 className="font-bold">Support</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={FeatureImg}
              alt="Doctors discussing"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
