import React from 'react';
import '../style/JoinUs.css';
import Purpose4 from "../assets/17.jpg";
const JoinUs = () => {
    return (
        <section className="join-us" id="join">
            <div className="join-group">
                <div className="join-text">
                    {/* <h3>Careers</h3> */}
                    <h1>Why join us</h1>
                    <p>
                        We bring together the best and brightest minds to be ambitious for our patients and help us make a lasting impact on the health of millions of people across the world.
                        <br /><br />
                        There has never been a more exciting time for us. In a new era for human health what we do has never mattered more as we tackle some of healthcare’s biggest challenges to get ahead of disease together.
                    </p>
                </div>
                <div className="join-image">
                    <img src={Purpose4} alt="Join Image" />
                </div>
            </div>
        </section>
    );
};

export default JoinUs;
