import React from "react";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Contact from "../Shared/Contact";
import About from "../Shared/About";

function Home() {
  return (
    <div>
      <Navbar />
      <About/>
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
