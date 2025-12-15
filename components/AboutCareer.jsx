import React from "react";
import {
  // BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import Grant from "../assets/13.jpg";
import Partnership from "../assets/14.jpg";
import HealthCare from "../assets/15.jpg";
import "../style/AboutCareer.css";
import SubHeading from "./SubHeading";

// ... (your existing imports and styles)

const AboutCareer = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  // Add an array of texts for each card
  const cardTexts = [
    "Veteran Ventures",
    "Careers in Science",
    "Fellowship Program",
  ];

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Our Career" />
        <h1 className="headtext__cormorant">Careers</h1>
        <p className="p__opensans" style={{ color: "#fff", marginTop: "2rem" }}>
          Incredible things can happen when people come together with one shared
          goal. The future of medicine is happening here, and we’re eager to
          work alongside inspired and inspirational people who want to improve
          health around the world.
        </p>
        {/* <button type="button" className="custom__button">
          Explore Career
        </button> */}
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[Grant, Partnership, HealthCare].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt={`gallery_image-${index + 1}`} />
              {/* Display different text on hover for each card */}
              <div className="gallery__image-icon">
                <p style={{ fontFamily: "Cormat-upright" }}>
                  {cardTexts[index]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutCareer;
