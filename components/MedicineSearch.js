// import React, { useState } from 'react';
// import '../style/MedicineSearch.css';

// const MedicineSearch = () => {
//     // Static data of medicines and places
//     const medicineData = {
//         glimid: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur'],
//         alodip: ['pune', 'mumbai', 'Delhi', 'Bengaluru', 'jaipur', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur'],
//         epitax: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi'],
//         rivamer: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'allahabad', 'kolkata', 'chennai', 'varanasi', 'manipur'],
//         captoril: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur', 'munnar', 'coorg'],
//         cardiwellPlus: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur', 'udupi', 'coorg', 'amristar'],
//         pcoCareForteTab: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur', 'srinagar', 'leh ladak', 'gangtok'],
//         clome: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur', 'tamil nadu', 'hyderabad'],
//         biofylin: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur', 'uttarakhand', 'rishikesh', 'kerala'],
//         ackoP: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur', 'Amdaman', 'Binsar', 'Mcleodganj'],
//         aceProxyvo: ['pune', 'mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'jaipur', 'kanyakumari', 'Goa', 'udaipur', 'Agra', 'kolkata', 'chennai', 'varanasi', 'manipur', 'madhya Pradesh', 'khajuraho', 'Dharmashala']
//     };

//     const [searchTerm, setSearchTerm] = useState('');
//     const [locations, setLocations] = useState([]);

//     const handleSearch = (e) => {
//         const term = e.target.value.toLowerCase();
//         setSearchTerm(term);

//         if (medicineData.hasOwnProperty(term)) {
//             setLocations(medicineData[term]);
//         } else {
//             setLocations([]);
//         }
//     };

//     return (
//         <div className="med-container">
//             <div className="med-search-container">
//                 <input
//                     type="med-text"
//                     placeholder="Search for a medicine..."
//                     value={searchTerm}
//                     onChange={handleSearch}
//                 />
//                 <ul className="med-locations-list">
//                     {locations.map((location, index) => (
//                         <li key={index}>{location}</li>
//                     ))}
//                 </ul>
//             </div>
//             <div className="med-map-container">
//                 {/* Include your map component here */}
//                 {/* This is where you would display the India map with location logos */}
//             </div>
//         </div>
//     );
// };
// export default MedicineSearch;














import React, { useState } from 'react';
import '../style/MedicineSearch.css';

const MedicineSearch = () => {
    const medicineData = {
        glimid: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur'],
        alodip: ['Pune', 'Mumbai', 'Delhi', 'Bengaluru', 'Jaipur', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur'],
        epitax: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi'],
        rivamer: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Allahabad', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur'],
        captoril: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur', 'Munnar', 'Coorg'],
        cardiwellPlus: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur', 'Udupi', 'Coorg', 'Amristar'],
        pcoCareForteTab: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur', 'Srinagar', 'Leh ladak', 'Gangtok'],
        clome: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur', 'Tamil nadu', 'Hyderabad'],
        biofylin: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur', 'Uttarakhand', 'Rishikesh', 'Kerala'],
        ackoP: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur', 'Amdaman', 'Binsar', 'Mcleodganj'],
        aceProxyvo: ['Pune', 'Mumbai', 'Ahemdabad', 'Delhi', 'Bengaluru', 'Jaipur', 'Kanyakumari', 'Goa', 'Udaipur', 'Agra', 'Kolkata', 'Chennai', 'Varanasi', 'Manipur', 'Madhya Pradesh', 'Khajuraho', 'Dharmashala']
    };

    const [searchTerm, setSearchTerm] = useState('');
    const [locations, setLocations] = useState([]);
    const [filteredMedicines, setFilteredMedicines] = useState([]);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term === '') {
            setLocations([]);
            setFilteredMedicines([]);
        } else {
            const matchingMedicine = Object.keys(medicineData).find(medicine => medicine.toLowerCase() === term);
            if (matchingMedicine) {
                setLocations(medicineData[matchingMedicine]);
                setFilteredMedicines([]);
            } else {
                setLocations([]);
                setFilteredMedicines([]);
            }
        }
    };

    const handleMedicineClick = (medicine) => {
        setLocations(medicineData[medicine]);
        setSearchTerm('');
        setFilteredMedicines([]);
    };

    return (
        <div className='med-search' style={{ margin: '20px ' }}>
            <input
                type="med-text"
                placeholder="Search for a medicine..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="med-container">
                <div className="med-search-container">
                    <div className="medicine-slider">
                        <h3 className="slider-title">Medicine List</h3>
                        <ul className="medicine-list">
                            {Object.keys(medicineData).map((medicine, index) => (
                                <li key={index} onClick={() => handleMedicineClick(medicine)}>
                                    <a href="#">{medicine}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="med-locations-container">
                    <h3>Location</h3>
                    <ul className="med-locations-list">
                        {locations.map((location, index) => (
                            <li key={index}>{location}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MedicineSearch;
