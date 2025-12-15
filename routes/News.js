import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import NewsHero from '../components/NewsHero';
import ReputableSources from '../components/ReputableSources';
import StayTuned from '../components/StayTuned';
import NewsInfo from '../components/NewsInfo';
const News = () => {
    return (
        <div>
            <>
                <Navbar />
                <NewsHero />
                <NewsInfo />
                <StayTuned />
                <ReputableSources />
                <Footer />
            </>
        </div>
    );
}
export default News;