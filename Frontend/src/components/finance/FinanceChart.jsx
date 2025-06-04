import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Đăng ký các thành phần cần thiết của Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FinanceChart = () => {
  // Dữ liệu biểu đồ
  const data = {
    labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6'],
    datasets: [
      {
        label: 'Doanh thu',
        data: [5000, 7000, 6000, 8000, 9000, 10000],
        backgroundColor: 'rgba(59, 130, 246, 0.5)', // Màu xanh nhạt
        borderColor: 'rgba(59, 130, 246, 1)', // Viền xanh đậm
        borderWidth: 1,
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
        text: 'Thống kê doanh thu theo tháng',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Doanh thu (USD)',
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
      <h2 className="text-2xl font-bold mb-4">Thống kê doanh thu</h2>
      <div className="bg-white p-4 rounded shadow">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default FinanceChart;