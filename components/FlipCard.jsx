import React, { useState } from "react";
import "../style/FlipCard.css";
import img1 from "../assets/18.jpg";
import img2 from "../assets/19.jpg";
import img3 from "../assets/20.jpg";
import img4 from "../assets/21.jpg";

const FlipCard = ({ frontImage, frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontImage} alt="Card Front" />
          <p>{frontText}</p>
        </div>
        <div className="flip-card-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

const CardContainer = () => {
  // Example data for four cards
  const cardData = [
    {
      frontImage: img1,
      frontText: "We Led by our Purpose",
      backText:
        "We are led by our purpose: together ahead of disease together. It inspires every one of us to do our best work. We support smart risk-taking, invest in innovation where and when it matters, and constantly strive to do things better to make an impact on peoples health across the world.",
    },
    {
      frontImage: img2,
      frontText: "What we do can transform",
      backText:
        " What we do can transform our patient and shareholder outcomes, and the experience of our people. When you join us, you'll work with other outstanding professionals on some of the biggest challenges in healthcare.",
    },
    {
      frontImage: img3,
      frontText: "Work on challenging projects",
      backText:
        "You'll have opportunities to work on challenging projects and assignments that will help you grow, thrive, and reach your full potential. You'll have the space to build and contribute to a high-performing team to achieve ambitious goals.",
    },
    {
      frontImage: img4,
      frontText: "Succeed with our team",
      backText:
        "We help you to succeed on your terms. At contoso, we all take clear ownership of our work, giving and recieving constructive feedback, with the promise of reward and recoginition for great performance.",
    },
  ];

  return (
    <div className="title">
      <h1>Deliver what matters most</h1>
      <div className="card-container">
        {cardData.map((card, index) => (
          <FlipCard
            key={index}
            frontImage={card.frontImage}
            frontText={card.frontText}
            backText={card.backText}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
