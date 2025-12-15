import React from 'react';
import Navbar from '../components/Navbar';
import Purpose from '../components/Purpose';
import HealthPolicies from '../components/HealthPolicies';
import OurPeople from '../components/OurPeople';
import AboutCareer from '../components/AboutCareer';
import Footer from '../components/Footer';

const About = () => {
    return (
        <>
            < Navbar />
            <Purpose />
            <HealthPolicies />
            <AboutCareer />
            <OurPeople />
            <Footer />

        </>
    );
}
export default About;