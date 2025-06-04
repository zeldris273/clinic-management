import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto">
          <nav className="flex">
            <a href="/" className="text-blue-600 hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="/contact" className="text-blue-600 hover:underline">Pages</a>
            <span className="mx-2">/</span>
            <span className="text-gray-600">Liên Hệ</span>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="mb-6">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-4 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14h-2v6H6v2h6v-6h2v6h2v-2h-4V6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Địa Chỉ</h4>
                  <p className="text-gray-600">123 Street, New York, USA</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-4 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Gọi Ngay</h4>
                  <p className="text-gray-600">+012 345 6789</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-4 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold">Gửi Email</h4>
                  <p className="text-gray-600">info@example.com</p>
                </div>
              </div>
            </div>
            <div>
              <iframe
                className="w-full h-64 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUwJzAxLjkiUyAxNDTCsDU3JzEzLjUiRQ!5e0!3m2!1sen!2sus!4v1603794290143!5m2!1sen!2sus"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Liên Hệ Với Chúng Tôi</h2>
            <h3 className="text-xl font-semibold mb-4">Có Thắc Mắc? Vui Lòng Liên Hệ!</h3>
            <p className="mb-4">
              Form liên hệ hiện đang không hoạt động. Để có form liên hệ hoạt động với Ajax & PHP, chỉ cần sao chép và dán các file, thêm một chút mã là xong. <a href="#" className="text-blue-600 hover:underline">Tải Xuống Ngay</a>.
            </p>
            <form className="grid grid-cols-1 gap-4">
              <input type="text" placeholder="Họ Tên" className="p-2 border rounded w-full" />
              <input type="email" placeholder="Email" className="p-2 border rounded w-full" />
              <input type="text" placeholder="Chủ Đề" className="p-2 border rounded w-full" />
              <textarea placeholder="Tin Nhắn" className="p-2 border rounded w-full h-32"></textarea>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;