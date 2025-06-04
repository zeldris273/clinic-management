
const NotFound = () => {
  return (
    <div>
    

      {/* 404 Section */}
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-6xl font-bold text-blue-600 mb-4">404</h2>
        <h3 className="text-3xl font-semibold mb-4">Trang Không Tìm Thấy</h3>
        <p className="text-gray-600 mb-8">
          Chúng tôi xin lỗi, trang bạn đang tìm kiếm không tồn tại trên website của chúng tôi! Có thể quay lại trang chủ hoặc thử sử dụng tìm kiếm?
        </p>
        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Quay Về Trang Chủ
        </a>
      </div>

    </div>
  );
};

export default NotFound;