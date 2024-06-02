import React from "react";
import Header from "../../components/layout/header";
import Hero from "./herosection/hero";
import Slider from "./slider/slider";
import SliderNumber from "./infinityslider/infinityslider";
import MIE from "./makeiteasy/makeiteasy";
import Gateway from "./gateway/gateway";

function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Slider />
      <SliderNumber />
      <MIE />
      <Gateway />
    </div>
  );
}
export default Home;
