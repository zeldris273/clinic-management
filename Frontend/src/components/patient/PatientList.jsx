import { useState } from 'react';

const PatientList = () => {
  const [patients, setPatients] = useState([
    { id: '123456789', name: 'John Doe', phone: '0123456789', medicalHistory: 'Hypertension' },
    // Add more sample data
  ]);
  const [search, setSearch] = useState('');

  const filteredPatients = patients.filter(
    (patient) =>
      patient.id.includes(search) ||
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.phone.includes(search)
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Patient Management</h2>
      <input
        type="text"
        placeholder="Search by ID, Name, or Phone"
        className="p-2 border rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Add Patient</button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Medical History</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td className="p-2">{patient.id}</td>
              <td className="p-2">{patient.name}</td>
              <td className="p-2">{patient.phone}</td>
              <td className="p-2">{patient.medicalHistory}</td>
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

export default PatientList;