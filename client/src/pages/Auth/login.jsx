import LoginForm from "./login-form";
import { Building2 } from "lucide-react";

const Login = () => {
  const handleLogin = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(#d97706 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <LoginForm onLogin={handleLogin} />

        <div className="text-center mt-8">
          <p className="text-sm text-amber-600">
            © 2025 Interview Management System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
