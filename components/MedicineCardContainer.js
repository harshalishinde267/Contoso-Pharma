import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/MedicineCardStyle.css'; // Import your CSS file
import med1 from '../assets/Medicine/1.jpg';
import med2 from '../assets/Medicine/2.jpg';
import med3 from '../assets/Medicine/3.jpg';
import med4 from '../assets/Medicine/4.jpg';
import med5 from '../assets/Medicine/5.jpg';
import med6 from '../assets/Medicine/6.jpg';
import med7 from '../assets/Medicine/7.jpg';
import med8 from '../assets/Medicine/8.jpg';
import med9 from '../assets/Medicine/9.jpg';
import med10 from '../assets/Medicine/10.jpg';
import med11 from '../assets/Medicine/11.jpg';
import med12 from '../assets/Medicine/12.jpg';
import med13 from '../assets/Medicine/13.jpg';
import med14 from '../assets/Medicine/14.jpg';
import med15 from '../assets/Medicine/15.jpg';
import med16 from '../assets/Medicine/16.jpg';
import med17 from '../assets/Medicine/17.jpg';
import med18 from '../assets/Medicine/18.jpg';
import med19 from '../assets/Medicine/19.jpg';
import med20 from '../assets/Medicine/20.jpg';
import med21 from '../assets/Medicine/21.jpg';
import med22 from '../assets/Medicine/22.jpg';
import med23 from '../assets/Medicine/23.jpg';
import med24 from '../assets/Medicine/24.jpg';
import med25 from '../assets/Medicine/25.jpg';
import med26 from '../assets/Medicine/26.jpg';
import med27 from '../assets/Medicine/27.jpg';
import med28 from '../assets/Medicine/28.jpg';
import med29 from '../assets/Medicine/29.jpg';
import med30 from '../assets/Medicine/30.jpg';
import med31 from '../assets/Medicine/31.jpg';
import med32 from '../assets/Medicine/32.jpg';
import med33 from '../assets/Medicine/33.jpg';
import med34 from '../assets/Medicine/34.jpg';
import med35 from '../assets/Medicine/35.jpg';
import med36 from '../assets/Medicine/36.jpg';
import med37 from '../assets/Medicine/37.jpg';
import med38 from '../assets/Medicine/38.jpg';
import med39 from '../assets/Medicine/39.jpg';
import med40 from '../assets/Medicine/40.jpg';

function MedicineCard({ id, image, title, description }) {
  return (
    <div className="medicine-card">
      <div className="medicine-image">
        <img src={image} alt={title} />
      </div>
      <div className="medicine-title">
        <h3>{title}</h3>
      </div>
      <div className="medicine-description">
        <p>{description}</p>
      </div>
      <div className="medicine-view">
        <Link to={`/medicine/${id}`}>View More</Link>
      </div>
    </div>
  );
}

function MedicineCardContainer() {
  const [searchTerm, setSearchTerm] = useState('');
  // const [showCompetitors, setShowCompetitors] = useState(false);
  const [filter, setFilter] = useState('all');
  const [showSuggestions, setShowSuggestions] = useState(false);


  const cardsData = [
    { id: 1, image: med1, title: 'Glimid', description: 'Diabetes Melliteus', isCompetitor: false },
    { id: 2, image: med2, title: 'K-Glim', description: 'Diabetes Melliteus', isCompetitor: true },
    { id: 3, image: med3, title: 'Antidiabetic Medication', description: 'Diabetes Melliteus', isCompetitor: true },
    { id: 4, image: med4, title: 'Glimy tab', description: 'Diabetes Melliteus', isCompetitor: true },
    { id: 5, image: med5, title: 'Apriglim', description: 'Diabetes Melliteus', isCompetitor: true },
    { id: 6, image: med6, title: 'Alodip-AT', description: 'Hypertension', isCompetitor: false },
    { id: 7, image: med7, title: 'amlodac', description: 'Hypertension', isCompetitor: true },
    { id: 8, image: med8, title: 'Dipin-AT', description: 'Hypertension', isCompetitor: true },
    { id: 9, image: med9, title: 'Amiur', description: 'Hypertension', isCompetitor: true },
    { id: 10, image: med10, title: 'Betanif', description: 'Hypertension', isCompetitor: true },
    { id: 11, image: med11, title: 'Epitax', description: 'Breast Cancer', isCompetitor: false },
    { id: 12, image: med12, title: 'Rubizen', description: 'Breast Cancer', isCompetitor: true },
    { id: 13, image: med13, title: 'Histac', description: 'Breast Cancer', isCompetitor: true },
    { id: 14, image: med14, title: 'Femistra', description: 'Breast Cancer', isCompetitor: true },
    { id: 15, image: med15, title: 'Meditrex', description: 'Breast Cancer', isCompetitor: true },
    { id: 16, image: med16, title: 'Rivamer', description: "Alzheimer's disease", isCompetitor: false },
    { id: 17, image: med17, title: 'Aduhelm', description: "Alzheimer's disease", isCompetitor: true },
    { id: 18, image: med18, title: 'Alzigo Donamem', description: "Alzheimer's disease", isCompetitor: true },
    { id: 19, image: med19, title: 'Alzil', description: "Alzheimer's disease", isCompetitor: true },
    { id: 20, image: med20, title: 'Dorent Aricep', description: "Alzheimer's disease", isCompetitor: true },
    { id: 21, image: med21, title: 'Captoril', description: 'Heart Failure', isCompetitor: false },
    { id: 22, image: med22, title: 'Dixin', description: 'Heart Failure', isCompetitor: true },
    { id: 23, image: med23, title: 'Enapril', description: 'Heart Failure', isCompetitor: true },
    { id: 24, image: med24, title: 'Atol-L', description: 'Heart Failure', isCompetitor: true },
    { id: 25, image: med25, title: 'CIDMUS', description: 'Heart Failure', isCompetitor: true },
    { id: 26, image: med26, title: 'Cardiwell Plus', description: 'Heart Stroke', isCompetitor: false },
    { id: 27, image: med27, title: 'Bisoheart', description: 'Heart Stroke', isCompetitor: true },
    { id: 28, image: med28, title: 'Actilyse', description: 'Heart Stroke', isCompetitor: true },
    { id: 29, image: med29, title: 'Pco Care Forte tab', description: 'Pcos', isCompetitor: false },
    { id: 30, image: med30, title: 'Clome', description: 'Pcod', isCompetitor: false },
    { id: 31, image: med31, title: 'Metafor', description: 'Pcod', isCompetitor: true },
    { id: 32, image: med32, title: 'Biofylin', description: 'COPD (Chronic obstructive Pulmonary Disorder)', isCompetitor: false },
    { id: 33, image: med33, title: 'Difizma', description: 'COPD (Chronic obstructive Pulmonary Disorder)', isCompetitor: true },
    { id: 34, image: med34, title: 'Adren', description: 'COPD (Chronic obstructive Pulmonary Disorder)', isCompetitor: true },
    { id: 35, image: med35, title: 'Acko-P', description: 'Arthritis', isCompetitor: false },
    { id: 36, image: med36, title: 'Barilat', description: 'Arthritis', isCompetitor: true },
    { id: 37, image: med37, title: 'Kineret Anakinra', description: 'Arthritis', isCompetitor: true },
    { id: 38, image: med38, title: 'Ace-Proxyvo', description: 'Spondylosis', isCompetitor: false },
    { id: 39, image: med39, title: 'Dioflam', description: 'Spondylosis', isCompetitor: true },
    { id: 40, image: med40, title: 'Zerodol-p', description: 'Spondylosis', isCompetitor: true }

  ];

  const filteredCards = cardsData.filter(card => {
    const matchTitle = card.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDescription = card.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchTitle || matchDescription;
  });

  // const filteredCompetitors = showCompetitors ? filteredCards.filter(card => card.isCompetitor) : [];
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowSuggestions(event.target.value.length > 0); // Show suggestions only if input length > 0
  };

  const handleInputClick = () => {
    setShowSuggestions(false); // Hide suggestions when search bar is clicked
  };

  const renderFilteredCards = () => {
    if (filter === 'all') {
      return filteredCards;
    } else if (filter === 'showCompetitors') {
      return filteredCards.filter(card => card.isCompetitor);
    } else if (filter === 'notCompetitor') {
      return filteredCards.filter(card => !card.isCompetitor);
    }
  };
  return (
    <div className="medicine-heading">
      <h2>Drugs</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by drug or disease"
          value={searchTerm}
          onChange={handleInputChange}
          onClick={handleInputClick} // Handle click event
          list={showSuggestions ? "searchSuggestions" : null} // Conditional rendering of datalist
        />
        {showSuggestions && ( // Render datalist only when showSuggestions is true
          <datalist id="searchSuggestions">
            {filteredCards.map(card => (
              <option key={card.id} value={card.title} />
            ))}
          </datalist>
        )}
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="showCompetitors">Competitor Drugs</option>
          <option value="notCompetitor">Contoso Drugs</option>
        </select>
      </div>
      <div className="medicine-container">
        {renderFilteredCards().map(card => (
          <MedicineCard
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MedicineCardContainer;