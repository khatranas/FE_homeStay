import React from "react";
import HomeStay from "./pages/HomeStay";

import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Home";

export default function App() {
  return (
    <div>
      <Header logo="Dee's Estate" button="Get Started" />
      <Routes>
        <Route path="/" element={<HomeStay />} />
        <Route path="/rent" element={"tran"} />
      </Routes>
    </div>
  );
}
