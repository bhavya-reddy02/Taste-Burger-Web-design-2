import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CartOffcanvas from "../CartOffcanvas";
import CookieBanner from "../CookieBanner";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
      <CartOffcanvas />
      <CookieBanner />
    </>
  );
}

export default Layout;
