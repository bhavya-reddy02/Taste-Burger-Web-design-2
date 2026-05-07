import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layouts/Layout";
import About from "./pages/Home/About";
import Menu from "./pages/Home/Menu";
import Shop from "./pages/Home/Shop";
import Blog from "./pages/Home/Blog";
import Contact from "./pages/Home/Contact";
import { CartProvider } from "./context/CartContext";
import "./styles/HomeStyle.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/menu" element={<Layout><Menu /></Layout>} />
          <Route path="/shop" element={<Layout><Shop /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
