import { useState } from 'react';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', date: '2025-06-01', type: 'General' },
    // Add more sample data
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Appointment Management</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Book Appointment</button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Patient</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Date</th>
            <th className="p-2">Type</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td className="p-2">{appt.id}</td>
              <td className="p-2">{appt.patient}</td>
              <td className="p-2">{appt.doctor}</td>
              <td className="p-2">{appt.date}</td>
              <td className="p-2">{appt.type}</td>
              <td className="p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;