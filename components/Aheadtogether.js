// Aheadtogether.js

import React from 'react';
import '../style/Aheadtogether.css';
import Purpose4 from "../assets/16.jpg";
const Aheadtogether = () => {
    return (
        <section className="career-us" id="career">
            <div className="career-group">
                <div className="career-text">
                    <h3>Career</h3>
                    <h1>Ahead Together</h1>
                    <p>
                        At Contoso, we unite science, technology and talent to get ahead of disease together.
                        We aim to positively impact the health of 2.5 billion people by the end of the decade,
                        as a successful, growing company where people can thrive.
                    </p>
                </div>
                <div className="career-image">
                    <img src={Purpose4} alt="Career Image" />
                </div>
            </div>
        </section>
    );
};

export default Aheadtogether;
