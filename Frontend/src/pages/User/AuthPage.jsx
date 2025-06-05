import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../../store/authSlice";
import api from "../../api/api";
import Swal from "sweetalert2";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const [isOtpSent, setIsOtpSent] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth); // Lấy trạng thái từ Redux

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setForm({ email: "", password: "", confirmPassword: "", otp: "" });
    setIsOtpSent(false);
  };

  const handleSendOtp = async () => {
    try {
      await api.post("/api/auth/register", {
        email: form.email,
        password: form.password,
      });
      setIsOtpSent(true);
      Swal.fire({
        icon: "success",
        title: "OTP đã được gửi!",
        text: "Vui lòng kiểm tra email và nhập mã OTP.",
        timer: 1500,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Đã xảy ra lỗi!";
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: errorMessage.message || errorMessage,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "login") {
        // Đăng nhập
        const result = await dispatch(
          loginUser({ email: form.email, password: form.password })
        ).unwrap();
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else if (mode === "register") {
        // Đăng ký
        if (form.password !== form.confirmPassword) {
          Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: "Mật khẩu không khớp!",
          });
          return;
        }
        if (!isOtpSent) {
          Swal.fire({
            icon: "warning",
            title: "Chưa gửi OTP",
            text: "Vui lòng bấm 'Gửi mã OTP' trước!",
          });
          return;
        }
        const result = await dispatch(
          registerUser({
            email: form.email,
            password: form.password,
            otp: form.otp,
          })
        ).unwrap();
        Swal.fire({
          icon: "success",
          title: "Đăng ký thành công!",
          showConfirmButton: false,
          timer: 1500,
        });
        resetForm();
        setMode("login");
      } else if (mode === "forgot-password") {
        // Quên mật khẩu
        await api.post("/api/auth/forgot-password", { email: form.email });
        Swal.fire({
          icon: "success",
          title: "OTP đã được gửi!",
          text: "Vui lòng kiểm tra email để lấy mã OTP.",
        });
        setMode("reset-password");
        setForm({ ...form, password: "", confirmPassword: "" });
      } else if (mode === "reset-password") {
        // Đặt lại mật khẩu
        if (form.password !== form.confirmPassword) {
          Swal.fire({
            icon: "error",
            title: "Lỗi",
            text: "Mật khẩu không khớp!",
          });
          return;
        }
        await api.post("/api/auth/reset-password", {
          email: form.email,
          otp: form.otp,
          password: form.password,
        });
        Swal.fire({
          icon: "success",
          title: "Đặt lại mật khẩu thành công!",
          showConfirmButton: false,
          timer: 1500,
        });
        resetForm();
        setMode("login");
      }
    } catch (error) {
      const errorMessage =
        error.message || error || "Đã xảy ra lỗi!";
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: errorMessage,
      });
    }
  };

  const toggleMode = (newMode) => {
    setMode(newMode);
    resetForm();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          {mode === "login" && "Đăng nhập tài khoản"}
          {mode === "register" && "Tạo tài khoản mới"}
          {mode === "forgot-password" && "Quên mật khẩu"}
          {mode === "reset-password" && "Đặt lại mật khẩu"}
        </h2>

        {error && (
          <div className="text-red-500 text-center mb-4">
            {error.message || error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {(mode === "login" ||
            mode === "register" ||
            mode === "forgot-password" ||
            mode === "reset-password") && (
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
                disabled={loading}
              />
            </div>
          )}

          {(mode === "login" || mode === "register" || mode === "reset-password") && (
            <div>
              <label className="block mb-1 font-medium">Mật khẩu</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
                disabled={loading}
              />
            </div>
          )}

          {(mode === "register" || mode === "reset-password") && (
            <div>
              <label className="block mb-1 font-medium">Xác nhận mật khẩu</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2"
                disabled={loading}
              />
            </div>
          )}

          {(mode === "register" || mode === "reset-password") && (
            <div>
              <label className="block mb-1 font-medium">Mã OTP</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="otp"
                  value={form.otp}
                  onChange={handleChange}
                  required={mode === "reset-password"}
                  placeholder="Nhập OTP từ email"
                  className="w-[70%] border rounded px-3 py-2"
                  disabled={loading}
                />
                {mode === "register" && (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    disabled={loading}
                  >
                    Gửi OTP
                  </button>
                )}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={(mode === "register" && !isOtpSent) || loading}
            className={`w-full py-2 rounded text-white transition ${
              (mode === "register" && !isOtpSent) || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Đang xử lý..." : (
              <>
                {mode === "login" && "Đăng nhập"}
                {mode === "register" && "Đăng ký"}
                {mode === "forgot-password" && "Gửi OTP"}
                {mode === "reset-password" && "Đặt lại mật khẩu"}
              </>
            )}
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {mode === "login" && (
            <>
              Chưa có tài khoản?{" "}
              <button
                onClick={() => toggleMode("register")}
                className="text-blue-600 hover:underline font-medium"
              >
                Đăng ký
              </button>
              <br />
              <button
                onClick={() => toggleMode("forgot-password")}
                className="text-blue-600 hover:underline font-medium mt-2"
              >
                Quên mật khẩu?
              </button>
            </>
          )}
          {mode === "register" && (
            <>
              Đã có tài khoản?{" "}
              <button
                onClick={() => toggleMode("login")}
                className="text-blue-600 hover:underline font-medium"
              >
                Đăng nhập
              </button>
            </>
          )}
          {(mode === "forgot-password" || mode === "reset-password") && (
            <>
              Quay lại{" "}
              <button
                onClick={() => toggleMode("login")}
                className="text-blue-600 hover:underline font-medium"
              >
                Đăng nhập
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}