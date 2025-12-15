// HighwayLane.js

import React from 'react';
import '../style/HighwayLane.css';
import med1 from "../assets/1.jpg";
import med2 from "../assets/2.jpg";
import med3 from "../assets/5.jpg";
import med4 from "../assets/6.jpg";
import med5 from "../assets/21.jpg";
import med6 from "../assets/22.jpg";
import med7 from "../assets/23.jpg";
import med8 from "../assets/25.jpg";
import med9 from "../assets/24.jpg";
import med10 from "../assets/18.jpg";



const HighwayLane = () => {
  const images = [med1, med2, med3, med4, med5, med6, med7, med8, med9, med10, med1];

  return (
    <div className="highway-lane">
      <div className="highway-image-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt="" />
        ))}
      </div>
    </div>
  );
};

export default HighwayLane;
