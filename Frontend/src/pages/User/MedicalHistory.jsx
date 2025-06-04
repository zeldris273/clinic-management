import { useState } from "react";

import { FaSearch, FaEye } from "react-icons/fa";

const MedicalHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // Dữ liệu mẫu
  const medicalRecords = [
    {
      id: 1,
      date: "2025-06-01",
      doctor: "BS. Nguyễn Văn A",
      diagnosis: "Cảm cúm",
      treatment: "Uống paracetamol, nghỉ ngơi",
    },
    {
      id: 2,
      date: "2025-05-28",
      doctor: "BS. Trần Thị B",
      diagnosis: "Viêm họng",
      treatment: "Kháng sinh, súc miệng nước muối",
    },
    {
      id: 3,
      date: "2025-05-20",
      doctor: "BS. Lê Văn C",
      diagnosis: "Đau dạ dày",
      treatment: "Omeprazole, ăn nhẹ",
    },
  ];

  // Lọc và tìm kiếm
  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "week" &&
        new Date(record.date) >=
          new Date(new Date().setDate(new Date().getDate() - 7))) ||
      (filter === "month" &&
        new Date(record.date) >=
          new Date(new Date().setMonth(new Date().getMonth() - 1)));
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Lịch sử khám bệnh
          </h1>

          {/* Tìm kiếm và lọc */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center bg-white rounded-lg shadow p-2 w-full sm:w-1/2">
              <FaSearch className="text-gray-500 mx-2" />
              <input
                type="text"
                placeholder="Tìm theo bác sĩ hoặc chẩn đoán..."
                className="w-full p-2 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="p-3 rounded-lg bg-white shadow w-full sm:w-1/4"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">Tất cả</option>
              <option value="week">Tuần này</option>
              <option value="month">Tháng này</option>
            </select>
          </div>

          {/* Bảng trên desktop, cards trên mobile */}
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            {/* Bảng trên desktop */}
            <table className="w-full hidden md:table">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Ngày khám</th>
                  <th className="p-4 text-left">Bác sĩ</th>
                  <th className="p-4 text-left">Chẩn đoán</th>
                  <th className="p-4 text-left">Phương pháp điều trị</th>
                  <th className="p-4 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record) => (
                    <tr key={record.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">{record.date}</td>
                      <td className="p-4">{record.doctor}</td>
                      <td className="p-4">{record.diagnosis}</td>
                      <td className="p-4">{record.treatment}</td>
                      <td className="p-4 text-center">
                        <button className="text-blue-600 hover:text-blue-800">
                          <FaEye />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      Không tìm thấy dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Cards trên mobile */}
            <div className="md:hidden">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <div
                    key={record.id}
                    className="border-b p-4 bg-white hover:bg-gray-50"
                  >
                    <div className="mb-2">
                      <strong>Ngày khám:</strong> {record.date}
                    </div>
                    <div className="mb-2">
                      <strong>Bác sĩ:</strong> {record.doctor}
                    </div>
                    <div className="mb-2">
                      <strong>Chẩn đoán:</strong> {record.diagnosis}
                    </div>
                    <div className="mb-2">
                      <strong>Phương pháp điều trị:</strong> {record.treatment}
                    </div>
                    <div className="text-center">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FaEye />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  Không tìm thấy dữ liệu
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;