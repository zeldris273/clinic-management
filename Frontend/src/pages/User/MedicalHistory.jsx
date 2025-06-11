import { useState, useEffect } from "react";
import { FaSearch, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

const MedicalHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [error, setError] = useState(null);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        // Lấy accessToken từ localStorage
        const token = localStorage.getItem("accessToken");
        if (!token) {
          Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: "Bạn chưa đăng nhập!",
          });
          navigate("/auth");
          return;
        }

        // Giải mã token để lấy userId và role
        const decoded = jwtDecode(token);
        const userId =
          decoded[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
          ];
        const role =
          decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];

        
        if (role !== "User") {
          Swal.fire({
            icon: "warning",
            title: "Không có quyền",
            text: "Chỉ bác sĩ mới có thể xem lịch sử khám bệnh!",
          });
          navigate("/");
          return;
        }

        // Gọi API với userId
        const response = await api.get(
          `/api/medical-history/users/history/${userId}`
        );
        setMedicalRecords(response.data);
      } catch (error) {
        console.error("Error fetching medical records:", error);
        setError("Không thể tải lịch sử khám bệnh. Vui lòng thử lại.");
      }
    };
    fetchMedicalRecords();
  }, [navigate]);

  // Lọc và tìm kiếm
  const filteredRecords = medicalRecords.filter((record) => {
    const matchesSearch =
      record.diagnosis?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false ||
      record.treatment?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      false;
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

  // Xem chi tiết bản ghi
  const handleViewDetails = async (record) => {
    try {
      setError(null);
      const response = await api.get(`/api/medical-history/${record.id}`);
      setSelectedRecord(response.data);
    } catch (err) {
      console.error("Lỗi khi lấy chi tiết:", err);
      setError("Không thể tải chi tiết bản ghi. Vui lòng thử lại.");
      setSelectedRecord(record);
    }
  };

  // Đóng modal
  const closeModal = () => {
    setSelectedRecord(null);
    setError(null);
  };

  return (
    <div>
      <div className="bg-gray-100 py-10 mt-10">
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
                placeholder="Tìm theo chẩn đoán hoặc điều trị..."
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
                  <th className="p-4 text-left">Bác sĩ ID</th>
                  <th className="p-4 text-left">Chẩn đoán</th>
                  <th className="p-4 text-left">Phương pháp điều trị</th>
                  <th className="p-4 text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record) => (
                    <tr key={record.id} className="border-b hover:bg-gray-50">
                      <td className="p-4">
                        {new Date(record.date).toLocaleDateString()}
                      </td>
                      <td className="p-4">{record.doctorId}</td>
                      <td className="p-4">{record.diagnosis}</td>
                      <td className="p-4">{record.treatment}</td>
                      <td className="p-4 text-center">
                        <button
                          className="text-blue-600 hover:text-blue-800"
                          onClick={() => handleViewDetails(record)}
                          title="Xem chi tiết"
                        >
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
                      <strong>Ngày khám:</strong>{" "}
                      {new Date(record.date).toLocaleDateString()}
                    </div>
                    <div className="mb-2">
                      <strong>Bác sĩ ID:</strong> {record.doctorId}
                    </div>
                    <div className="mb-2">
                      <strong>Chẩn đoán:</strong> {record.diagnosis}
                    </div>
                    <div className="mb-2">
                      <strong>Phương pháp điều trị:</strong> {record.treatment}
                    </div>
                    <div className="text-center">
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleViewDetails(record)}
                        title="Xem chi tiết"
                      >
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

          {/* Modal xem chi tiết */}
          {selectedRecord && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-600">
                  Chi tiết khám bệnh
                </h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="space-y-2">
                  <p>
                    <strong>Ngày khám:</strong>{" "}
                    {new Date(selectedRecord.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Bác sĩ ID:</strong> {selectedRecord.doctorId}
                  </p>
                  <p>
                    <strong>Chẩn đoán:</strong> {selectedRecord.diagnosis}
                  </p>
                  <p>
                    <strong>Phương pháp điều trị:</strong>{" "}
                    {selectedRecord.treatment}
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={closeModal}
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
