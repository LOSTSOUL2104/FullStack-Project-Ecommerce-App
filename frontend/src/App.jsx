import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import SigninSignUp from "./components/SigninSIgnUp";
import PlaceOrder from "./pages/PlaceOrder";
import OrderConfirmed from "./pages/Order-confirmed";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LatestCollection from "./components/LatestCollection";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <UserProvider>
      <Navbar />
      </UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<LatestCollection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/SigninSignUp" element={<SigninSignUp />} />
        <Route path="/Order-confirmed" element={<OrderConfirmed />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
