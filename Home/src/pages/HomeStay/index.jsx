import React from "react";
import {
  Featured,
  Banner,
  Fitter,
  Box,
  Footer,
  Choose,
} from "../../components/Home";
import Testimonials from "../../components/Home/Testimonials";

export default function HomeStay() {
  return (
    <div>
      <Banner />
      <Fitter />
      <Box />
      <Choose />
      <Featured />
      <Testimonials />
      <Footer />
    </div>
  );
}
