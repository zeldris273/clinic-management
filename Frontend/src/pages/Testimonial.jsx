import { useState } from "react";

const testimonials = [
  {
    name: "Nguyễn Thị A",
    profession: "Kế Toán",
    message:
      "Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Trần Văn B",
    profession: "Giáo Viên",
    message:
      "Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit. Sed sed duo labore justo sea clita tempor justo dolor ipsum amet kasd amet duo.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Lê Thị C",
    profession: "Nội Trợ",
    message:
      "Kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white py-16">
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1 border border-blue-400 rounded-full text-blue-500 font-medium mb-4">
          Testimonial
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-2">What Say Our Patients!</h2>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center relative text-center">
        {/* Avatar and Arrows */}
        <div className="flex items-center justify-center mb-6 relative">
          <button onClick={prev} className="absolute left-[-40px] text-blue-600 hover:text-blue-800 text-3xl">
            &#8592;
          </button>
          <img
            src={testimonials[current].avatar}
            alt="avatar"
            className="w-20 h-20 rounded-full border-4 border-blue-500 object-cover"
          />
          <button onClick={next} className="absolute right-[-40px] text-blue-600 hover:text-blue-800 text-3xl">
            &#8594;
          </button>
        </div>

        {/* Testimonial Box */}
        <div className="bg-blue-600 text-white p-6 rounded-lg max-w-xl transition-all duration-500">
          <p className="mb-4 leading-relaxed">{testimonials[current].message}</p>
          <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
          <p className="italic text-sm">{testimonials[current].profession}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
