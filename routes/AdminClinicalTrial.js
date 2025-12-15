import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewTrial from '../components/NewTrial';

const AdminClinicalTrial = () => {
    return (
        <div>
            <>
                <Navbar />
                <NewTrial />
                <Footer />
            </>
        </div>
    );
}
export default AdminClinicalTrial;