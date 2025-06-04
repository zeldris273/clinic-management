const PatientForm = ({ patient, onSave }) => {
  const [formData, setFormData] = useState(
    patient || { id: '', name: '', phone: '', medicalHistory: '' }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{patient ? 'Edit Patient' : 'Add Patient'}</h2>
      <div className="mb-4">
        <label className="block mb-1">ID</label>
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Phone</label>
        <input
          type="text"
          className="p-2 border rounded w-full"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Medical History</label>
        <textarea
          className="p-2 border rounded w-full"
          value={formData.medicalHistory}
          onChange={(e) => setFormData({ ...formData, medicalHistory: e.target.value })}
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Save
      </button>
    </form>
  );
};

export default PatientForm;