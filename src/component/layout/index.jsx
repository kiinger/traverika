import Header from "../header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/index";
import { ToastContainer } from "react-toastify";
import "./index.css";
export default function Layout() {
  console.log("layout ");
  return (
    <div className="layout">
      <Header />
      <main>
        <ToastContainer position="top-center" autoClose={2000} />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
