import React from "react";
import { motion } from "framer-motion";
import icon1 from "../../../assets/image/press-adspower.svg";
import icon2 from "../../../assets/image/press-aeza.svg";
import icon3 from "../../../assets/image/press-sendpulse.svg";
import icon4 from "../../../assets/image/press-bloomberg.svg";
import icon5 from "../../../assets/image/press-bitcoin.svg";
import "./infinityslider.css";
// Define the array of slides with numbers
const slides = [
  { number: icon1 },
  { number: icon2 },
  { number: icon3 },
  { number: icon4 },
  { number: icon5 },
];

const SliderNumber = () => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="infinity_main px-5">
      <div className="overflow-hidden">
        {/* Wrapping div for seamless looping */}
        <motion.div
          className="d-flex"
          animate={{
            x: ["0%", "-100%"],
            transition: {
              ease: "linear",
              duration: 50,
              repeat: Infinity,
            },
          }}
        >
          {/* Render duplicated slides */}
          {duplicatedSlides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="slider_image ">
                <img src={slide.number} alt="" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SliderNumber;
