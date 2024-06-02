import React from "react";
import iamge1 from "../../../assets/image/download.jpeg";
import iamge2 from "../../../assets/image/download (1).jpeg";
import iamge3 from "../../../assets/image/download (2).jpeg";
import iamge4 from "../../../assets/image/download (3).jpeg";
import "./slider.css";
function Slider() {
  return (
    <div className="main_slider">
      <div className="slider_iner">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={iamge1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={iamge2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={iamge3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={iamge4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.86 5.732a1 1 0 0 0-.128 1.408l4.466 5.36-4.466 5.36a1 1 0 0 0 1.536 1.28l5-6a1 1 0 0 0 0-1.28l-5-6a1 1 0 0 0-1.408-.128"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.86 5.732a1 1 0 0 0-.128 1.408l4.466 5.36-4.466 5.36a1 1 0 0 0 1.536 1.28l5-6a1 1 0 0 0 0-1.28l-5-6a1 1 0 0 0-1.408-.128"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Slider;
