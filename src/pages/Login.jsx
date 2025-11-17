import  { useState } from "react";

const Login = () => {
  const [mode, setMode] = useState("login"); // "login" or "signup"

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "login" ? "Login" : "Signup"}
        </h2>

        {/* -------- Signup Form -------- */}
        {mode === "signup" && (
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Signup
            </button>
            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </p>
          </form>
        )}

        {/* -------- Login Form -------- */}
        {mode === "login" && (
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              Login
            </button>
            <p className="text-center text-gray-500">
              Don’t have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setMode("signup")}
              >
                Signup
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
