import { useState } from "react";
import Button from "../../components/common/Button";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import axios from "axios";

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        formData
      );

      if (response.status === 200) {
        setIsLoading(false);
        onLogin(response.data);
      } else {
        setIsLoading(false);
        setErrors({ api: "Login failed. Please try again." });
      }
    } catch (error) {
      setIsLoading(false);
      setErrors({
        api:
          error.response?.data?.error ||
          "Login failed. Please check your credentials.",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-amber-50/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-amber-100">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock size={24} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-amber-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-amber-700">
            Sign in to your Interview Management System
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-amber-500" />
            </div>
            <input
              type="text"
              placeholder="Enter your username"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 transition-colors ${
                errors.username
                  ? "border-red-300 focus:ring-red-500"
                  : "border-amber-200"
              }`}
              required
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">{errors.username}</p>
            )}
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock size={18} className="text-amber-500" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 transition-colors ${
                errors.password
                  ? "border-red-300 focus:ring-red-500"
                  : "border-amber-200"
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff
                  size={18}
                  className="text-amber-500 hover:text-amber-600"
                />
              ) : (
                <Eye
                  size={18}
                  className="text-amber-500 hover:text-amber-600"
                />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-amber-600 bg-white border-amber-300 rounded focus:ring-amber-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-amber-700">Remember me</span>
            </label>
            <button
              type="button"
              className="text-sm text-amber-600 hover:text-amber-800 font-medium"
            >
              Forgot password?
            </button>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 text-lg font-semibold bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing in...
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
