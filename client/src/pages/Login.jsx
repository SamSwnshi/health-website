import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import { toast } from "react-toastify";

const Login = () => {
  const { setIsAuth, setUser } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        { email, password, roles },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      if (res.data.user.roles === "Admin") {
        navigate("/admindashboard");
      } else {
        navigate("/"); // Redirect to home for Doctor or Patient
      }

      toast.success(res.data.message, {
        position: "top-center",
        autoClose: 5000,
      });
      setUser(res.data.user);
      setIsAuth(true);

      setEmail("");
      setPassword("");
      setRoles("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <section className="flex justify-center items-center py-12 md:py-24 w-full">
        <div className="bg-white w-full max-w-xs md:max-w-md lg:max-w-lg p-6 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-red-700 mb-8">
            Login Page
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-md outline-none shadow-md"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-md outline-none shadow-md"
            />
            <select
              className="w-full p-3 border bg-gray-300 rounded-md outline-none shadow-md"
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
              <option value="Admin">Admin</option>
            </select>

            <div className="text-center text-sm">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 hover:underline">
                  Register Now
                </Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-lg bg-yellow-200 text-lg font-medium text-black border-2 border-transparent hover:border-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
