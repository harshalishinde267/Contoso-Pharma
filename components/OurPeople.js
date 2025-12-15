import React from 'react';
import { Link } from 'react-router-dom';
import '../style/OurPeopleStyle.css';
import img1 from "../assets/8.jpg";
import img2 from "../assets/10.jpg";
import img3 from "../assets/9.jpg";
import img4 from "../assets/11.jpg";

const OurPeople = () => {
    return (
        <div className="destination">
            <h1>Our People</h1>

            <div className="custom-container">
                <div className="custom-card__container">
                    <article className="custom-card__article">
                        <img src={img2} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Dr. Vrushali Shinde</span>
                            <h2 className="card__title">Chairman and chief Executive Officer,President</h2>
                        </div>
                    </article>

                    <article className="custom-card__article">
                        <img src={img1} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Chris Boshoff</span>
                            <h2 className="card__title">Executive Vice President</h2>
                        </div>
                    </article>

                    <article className="custom-card__article">
                        <img src={img3} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Alexander Willms</span>
                            <h2 className="card__title">Executive Vice President</h2>
                        </div>
                    </article>
                    <article className="custom-card__article">
                        <img src={img4} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Melissa Marsh</span>
                            <h2 className="card__title">Chief Financial Officer</h2>
                        </div>
                    </article>
                    <article className="custom-card__article">
                        <img src={img1} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Dave Denton</span>
                            <h2 className="card__title">Financial Officer</h2>
                        </div>
                    </article>
                    <article className="custom-card__article">
                        <img src={img2} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Alyssa Stark</span>
                            <h2 className="card__title">Chief Digital and Technology Officer</h2>
                        </div>
                    </article>
                    {/* <article className="custom-card__article">
                        <img src={img3} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Mikael Dolsten</span>
                            <h2 className="card__title">Chief scientific Officer</h2>
                        </div>
                    </article>
                    <article className="custom-card__article">
                        <img src={img4} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Becky Cummins</span>
                            <h2 className="card__title"> Chief People Experience Officer</h2>
                        </div>
                    </article>
                    <article className="custom-card__article">
                        <img src={img1} alt="image" className="card__img" />
                        <div className="card__data">
                            <span className="card__description">Mike McDermott</span>
                            <h2 className="card__title">Chief Global Supply Officer</h2>
                        </div>
                    </article> */}
                </div>
            </div>
        </div>
    );
};

export default OurPeople;
