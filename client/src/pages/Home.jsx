import React from "react";
import Hero from "../components/Hero";
import Doctor from "../components/Doctor";
import Biography from "../components/Biography";
import Department from "../components/Department";
import MessageForm from "../components/MessageForm";
// import Subscipt from "../components/Subscipt";
import Location from "../components/Location";

const Home = () => {
  return (
    <div>
      <Hero />
      <Doctor />
      <Biography />
      <Department />
      <MessageForm />
      {/* <Subscipt /> */}
      <Location />
    </div>
  );
};

export default Home;
