import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Confidential from "../components/Policies/Confidential";

export default function Licenses() {
  return (
    <main className="page__licenses">
      <Header />
      <Confidential />
      <Footer />
    </main>
  );
}
