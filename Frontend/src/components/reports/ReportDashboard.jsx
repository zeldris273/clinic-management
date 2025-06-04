import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ReportDashboard = () => {
  // Dữ liệu biểu đồ
  const data = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Lượt khám bệnh nhân',
        data: [200, 300, 250, 400, 350, 500],
        backgroundColor: 'rgba(59, 130, 246, 0.2)', // Màu nền xanh nhạt
        borderColor: 'rgba(59, 130, 246, 1)', // Viền xanh đậm
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Tùy chọn biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Thống kê lượt khám bệnh nhân theo tháng',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Số lượt khám',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Tháng',
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Bảng điều khiển báo cáo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Tổng lượt khám</h3>
          <p className="text-2xl">12,345</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Doanh thu</h3>
          <p className="text-2xl">50,000 USD</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">Hiệu suất nhân viên</h3>
          <p className="text-2xl">85%</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ReportDashboard; 