import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Aheadtogether from '../components/Aheadtogether';
import CardContainer from '../components/FlipCard';
import Prespective from '../components/Prespective';
import JoinUs from '../components/JoinUs';
import SliderEffect from '../components/SliderEffect';


const Career = () => {
    return (
        <div>
            <>
                <Navbar />
                <Aheadtogether />
                <CardContainer />
                <Prespective />
                <JoinUs />
                <SliderEffect />
                <Footer />
            </>
        </div>
    );
}
export default Career;