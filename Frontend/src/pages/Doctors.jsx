import Doctor1 from '../assets/team-1.jpg';
import Doctor2 from '../assets/team-2.jpg';
import Doctor3 from '../assets/team-3.jpg';
import Doctor4 from '../assets/team-4.jpg';

const Doctors = () => {
  const doctors = [
    { img: Doctor1, name: 'Bác Sĩ A', department: 'Chuyên khoa A' },
    { img: Doctor2, name: 'Bác Sĩ B', department: 'Chuyên khoa B' },
    { img: Doctor3, name: 'Bác Sĩ C', department: 'Chuyên khoa C' },
    { img: Doctor4, name: 'Bác Sĩ D', department: 'Chuyên khoa D' },
  ];

  return (
    <div className="bg-gray-100 py-12 mt-5">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block px-6 py-1 border border-blue-300 text-blue-600 rounded-full font-medium mb-2">
          Doctors
        </span>
        <h3 className="text-xl font-semibold mb-8">Các Bác Sĩ Giàu Kinh Nghiệm</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden group transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Facebook */}
                  <a href="#" className="text-white hover:text-blue-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12a10 10 0 1 0-11.5 9.87v-7h-2v-2.87h2V9.5c0-2 1.2-3.13 3-3.13.9 0 1.85.17 1.85.17v2.03h-1.04c-1.03 0-1.35.64-1.35 1.3v1.56h2.3l-.37 2.87h-1.93v7A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a href="#" className="text-white hover:text-blue-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.15 9.15 0 0 1-2.88 1.1A4.52 4.52 0 0 0 16.62 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.04A12.87 12.87 0 0 1 1.64 1.15a4.51 4.51 0 0 0 1.4 6.03A4.47 4.47 0 0 1 .88 6.14v.06c0 2.18 1.55 4.01 3.61 4.43a4.51 4.51 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 0 19.54a12.8 12.8 0 0 0 6.95 2.03c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.02-.58A9.26 9.26 0 0 0 23 3z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="text-white hover:text-pink-400">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.3 1 .7 1.5 1.2.5.5.9.9 1.2 1.5.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.3.6-.7 1-1.2 1.5-.5.5-.9.9-1.5 1.2-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.3-1-.7-1.5-1.2-.5-.5-.9-.9-1.2-1.5-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.3-.6.7-1 1.2-1.5.5-.5.9-.9 1.5-1.2.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.2 4.8.5 4.1.8c-.9.4-1.7 1-2.5 1.8C.8 3.4.2 4.2 0 5.1c-.3.7-.6 1.6-.7 2.9C-.9 8.3-.9 8.7-.9 12s0 3.7.1 5c.1 1.3.4 2.2.7 2.9.3.9.8 1.7 1.6 2.5.8.8 1.6 1.3 2.5 1.6.7.3 1.6.6 2.9.7 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.4 2.9-.7.9-.3 1.7-.8 2.5-1.6.8-.8 1.3-1.6 1.6-2.5.3-.7.6-1.6.7-2.9.1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.4-2.2-.7-2.9-.3-.9-.8-1.7-1.6-2.5-.8-.8-1.6-1.3-2.5-1.6C18.2.5 17.3.2 16 .1 14.7 0 14.3 0 12 0zM12 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.8a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-lg mb-1">{doctor.name}</h4>
                <p className="text-gray-600">{doctor.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
