import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from 'react';
import Producthero from "../components/Producthero";
// import HighwayLane from "../components/HighwayLane";
import Producttrial from "../components/Producttrial";
import StayTuned from "../components/StayTuned";
import Productdrugs from "../components/Productdrugs";

const product = () => {
    return (
        <div>
            <>
                <Navbar />
                <Producthero />
                <Producttrial />
                <StayTuned />
                <Productdrugs />
                {/* <HighwayLane /> */}
                <Footer />


            </>
        </div>
    );
}
export default product;