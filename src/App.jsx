import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import WhyManateq from "./components/WhyManateq";
import Services from "./components/Services";
import MapSection from "./components/MapSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { injectCSS } from "./utils/animations";

export default function ManateqWebsite() {
  useEffect(() => {
    injectCSS();
  }, []);

  return (
    <div style={{ fontFamily: "'Georgia', serif", overflowX: "hidden" }}>
      <Navbar />
      <div style={{ paddingTop: 72 }}>
        <Hero />
        <StatsBar />
        <WhyManateq />
        <Services />
        <MapSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
