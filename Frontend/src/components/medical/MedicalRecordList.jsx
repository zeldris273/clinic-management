const MedicalRecordList = () => {
  const [records, setRecords] = useState([
    { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', date: '2025-06-01', diagnosis: 'Flu', supplies: ['Syringe', 'Bandage'] },
    // Add more sample data
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Medical Records</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Add Record</button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Patient</th>
            <th className="p-2">Doctor</th>
            <th className="p-2">Date</th>
            <th className="p-2">Diagnosis</th>
            <th className="p-2">Supplies Used</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td className="p-2">{record.id}</td>
              <td className="p-2">{record.patient}</td>
              <td className="p-2">{record.doctor}</td>
              <td className="p-2">{record.date}</td>
              <td className="p-2">{record.diagnosis}</td>
              <td className="p-2">{record.supplies.join(', ')}</td>
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

export default MedicalRecordList;