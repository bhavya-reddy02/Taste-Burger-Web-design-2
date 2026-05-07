import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Promotion from "./Promotion";
import Shop from "./Shop";
import Blog from "./Blog";
import Contact from "./Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Menu />
      <Promotion />
      <Shop />
      <Blog />
      <Contact />
    </Layout>
  );
}
