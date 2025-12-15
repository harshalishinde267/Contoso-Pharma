import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ClincalDashboard from '../components/ClinicalDashboard';
const Dashboard = () => {
    return (
        <div>
            <>
                <Navbar />
                <ClincalDashboard />
                <Footer />
            </>
        </div>
    );
}
export default Dashboard;