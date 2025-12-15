import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HighwayLane from "../components/HighwayLane"
import Productdrugs from '../components/Productdrugs';
import AboutCareer from '../components/AboutCareer';
import CardContainer from '../components/FlipCard';
import HomeHero from '../components/HomeHero';
import Purpose from '../components/Purpose';

const Home = () => {
    return (
        <div>
            <>
                <Navbar />
                <HomeHero />
                <Purpose />
                <HighwayLane />
                <Productdrugs />
                <AboutCareer />
                <CardContainer />
                <Footer />
            </>
        </div>
    );
}
export default Home;