// Aheadtogether.js

import React from 'react';
import '../style/Producttrial.css';
import Purpose4 from "../assets/26.jpg";
const Producttrial = () => {
    return (
        <section className="product-trial" id="product-trial">
            <div className="product-trial-group">
                <div className="product-trial-text">
                    <h3>Clinical Trial</h3>
                    <h1>Complete Information</h1>
                    <p>
                        With a robust study design and a diverse patient population, we anticipate that the results of this trial will provide invaluable insights into the potential of drugs to improve the lives of millions suffering from diseases. Our commitment to innovation and patient well-being drives us to pursue excellence in every aspect of our clinical research efforts.
                    </p>
                </div>
                <div className="product-trial-image">
                    <img src={Purpose4} alt="Product trial Image" />
                </div>
            </div>
        </section>
    );
};

export default Producttrial;
