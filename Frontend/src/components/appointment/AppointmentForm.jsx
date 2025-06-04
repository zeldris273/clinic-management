const AppointmentForm = ({ appointment, onSave }) => {
  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-300 w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-300 w-full"
        />
        <input
          type="tel"
          placeholder="Your Mobile"
          className="p-3 rounded border border-gray-300 w-full"
        />
        <select className="p-3 rounded border border-gray-300 w-full">
          <option>Choose Doctor</option>
          <option>Dr. Smith</option>
          <option>Dr. Jane</option>
          <option>Dr. John</option>
        </select>
        <input
          type="date"
          className="p-3 rounded border border-gray-300 w-full"
        />
        <input
          type="time"
          className="p-3 rounded border border-gray-300 w-full"
        />
        <textarea
          placeholder="Describe your problem"
          className="col-span-2 p-3 rounded border border-gray-300 w-full h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
