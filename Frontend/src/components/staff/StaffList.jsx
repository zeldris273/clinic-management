const StaffList = () => {
  const [staff, setStaff] = useState([
    { id: 1, name: 'Dr. Smith', role: 'Doctor', department: 'Cardiology', certificate: 'MD' },
    // Add more sample data
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Staff Management</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Add Staff</button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Role</th>
            <th className="p-2">Department</th>
            <th className="p-2">Certificate</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {staff.map((member) => (
            <tr key={member.id}>
              <td className="p-2">{member.id}</td>
              <td className="p-2">{member.name}</td>
              <td className="p-2">{member.role}</td>
              <td className="p-2">{member.department}</td>
              <td className="p-2">{member.certificate}</td>
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

export default StaffList;