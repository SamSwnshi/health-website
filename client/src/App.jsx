import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useContext, useEffect } from "react";
import { Context } from "./main";
import axios from "axios";
import AdminDashboard from "./components/AdminDashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const { isAuth, setIsAuth, user, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/login",
          { withCredentials: true }
        );
        setIsAuth(true);
        setUser(response.data.user);
      } catch (error) {
        console.log("Error:", error.response);
        setIsAuth(false);
        setUser({});
      }
    };
    fetchUser();
  }, []);
  return (
    <>
      <div className="tracking-widest">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
          <Route
            path="/admindashboard/*"
            element={
              isAuth && user.roles === "Admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
         
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </div>
    </>
  );
}

export default App;
