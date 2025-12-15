import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MedicineCard from '../components/MedicineCardContainer.js';


const MedicineMain = () => {
    return (
        <div>
            <>
                <Navbar />
                <MedicineCard />
                <Footer />
            </>
        </div>
    );
}
export default MedicineMain;