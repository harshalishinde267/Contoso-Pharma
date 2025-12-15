import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../style/Trial.css';
import Diabetes from '../pages/Diabetes';
import Diabetes1 from '../pages/Diabetes1';
import Diabetes2 from '../pages/Diabetes2';
import Hypertension from '../pages/Hypertension';
import Hypertension1 from '../pages/Hypertension1';
import Hypertension2 from '../pages/Hypertension2';
import Breastcancer from '../pages/Breastcancer';
import Breastcancer1 from '../pages/Breastcancer1';
import Breastcancer2 from '../pages/Breastcancer2';
import Alzheimer from '../pages/Alzheimer';
import Alzheimer1 from '../pages/Alzheimer1';
import Alzheimer2 from '../pages/Alzheimer2';
import Heartfailure from '../pages/Heartfailure';
import Heartfailure1 from '../pages/Heartfailure1';
import Heartfailure2 from '../pages/Heartfaliure2';
import Heartstroke from '../pages/Heartstroke';
import Heartstroke1 from '../pages/Heartstroke1';
import Pcos from '../pages/Pcos';
import Pcos1 from '../pages/Pcos1';
import Copd from '../pages/Copd';
import Copd1 from '../pages/Copd1';
import Arthritis from '../pages/Arthritis';
import Arthritis1 from '../pages/Arthritis1';
import Spondylosis from '../pages/Spondylosis';
import Spondylosis1 from '../pages/Spondylosis1';
import TrialCard from './TrialCard';
const NewTrial = ({ trials, setTrials }) => {
    const [currentPage, setCurrentPage] = useState('home');
    const [selectedCards, setSelectedCards] = useState([]);

    const handleAdd = () => {
        // Logic for adding a new entry
    };

    const handleEdit = () => {
        // Logic for editing the current entry
    };

    const handleDeleteClick = () => {
        // Prompt user to select cards to delete
        const cardsToDelete = prompt('Enter indexes of cards to delete (comma-separated):').split(',').map(index => parseInt(index.trim()));
        setSelectedCards(cardsToDelete);
        // Display confirmation dialog
        if (window.confirm('Are you sure you want to delete these trials?')) {
            // Remove selected cards from trials
            const updatedTrials = trials.filter((trial, index) => !cardsToDelete.includes(index));
            // Update state and local storage
            setTrials(updatedTrials);
            localStorage.setItem('trials', JSON.stringify(updatedTrials));
            setSelectedCards([]);
        }
    };
    return (
        <div className="trial-app">
            <Sidebar setPage={setCurrentPage} />
            <div className="new-trial-app">
                <button onClick={handleDeleteClick}>Delete</button>
                {trials && trials.map((trial, index) => (
                    <TrialCard key={index} trial={trial} selected={selectedCards.includes(index)} />
                ))}
            </div>
            <div className="trial-content">
                {currentPage === 'home' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT02065674</h4>
                            <h3>Therapeutic Efficacy of "Abroma Agusta" in HbA1c % in NIDDM (ABOMNIDDM)</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Type II Diabetes Mellitus</p>
                                <p>Locations</p>
                                <hr />
                                <p>Mangalore, Karnataka, India</p>
                                <a href="#Diabetes" onClick={() => setCurrentPage('diabetes')} className="trial-card-link">
                                    View More
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT01523405</h4>
                            <h3>A Non-Interventional Study To Evaluate Diabetes Related Quality Of Life, Frequency And Impact Of Hypoglycemia In T2DM</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Type II Diabetes Mellitus</p>
                                <p>Locations</p>
                                <hr />
                                <p>Delhi, India</p>
                                <p>New Delhi, India</p>
                                <p>Vijaywada, Andra Pradesh, India</p>
                                <p>Hyderabad, Andra Pradesh, India</p>
                                <a href="#Diabetes1" onClick={() => setCurrentPage('diabetes1')} className="trial-card-link">
                                    View More
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT06055582</h4>
                            <h3>To Study the Effects of Mango Ingestion in T2DM and Non-diabetic Subjects.</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Type II Diabetes Mellitus</p>
                                <p>Locations</p>
                                <hr />
                                <p>New Delhi, India</p>
                                <a href="#Diabetes2" onClick={() => setCurrentPage('diabetes2')} className="trial-card-link">
                                    View More
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'diabetes' && <Diabetes />}
                {currentPage === 'diabetes1' && <Diabetes1 />}
                {currentPage === 'diabetes2' && <Diabetes2 />}

                {currentPage === 'Hypertension' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT00494533</h4>
                            <h3>Study of Intravenous Remodulin in Patients in India With Pulmonary Arterial Hypertension.</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Pulmonary Arterial Hypertension</p>
                                <p>Locations</p>
                                <hr />
                                <p>Ahmedabad, India</p>
                                <p>Bangalore, India</p>
                                <p>Chennai, India </p>
                                <p>Hyderabad, India </p>
                                <a href="#Hypertension" onClick={() => setCurrentPage('hypertension')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT00878943</h4>
                            <h3>Open Label Access Study Of Sildenafil In Adult Patients With Pulmonary Arterial Hypertension Completing A1481244 Study</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Pulmonary Arterial Hypertension</p>
                                <p>Locations</p>
                                <hr />
                                <p>Hyderabad, Andra Pradesh, India</p>
                                <p>Ahmedabad, Gujarat, India</p>
                                <p>Vadodara, Gujarat, India </p>
                                <p>Banglore, Karnataka, India </p>
                                <a href="#Hypertension1" onClick={() => setCurrentPage('hypertension1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT03053739</h4>
                            <h3>To Compare the Efficacy of Combination Therapy vs Monotherapy for Pulmonary Arterial Hypertension in Systemic Sclerosis</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Pulmonary Arterial Hypertension</p>
                                <p>Locations</p>
                                <hr />
                                <p>Chandigarh, India</p>
                                <a href="#Hypertension2" onClick={() => setCurrentPage('hypertension2')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'hypertension' && <Hypertension />}
                {currentPage === 'hypertension1' && <Hypertension1 />}
                {currentPage === 'hypertension2' && <Hypertension2 />}


                {currentPage === 'Breastcancer' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT00193778</h4>
                            <h3>Assessing Impact of Loco-regional Treatment on Survival in Metastatic Breast Cancer at Presentation</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Cancer of the Breast</p>
                                <p>Locations</p>
                                <hr />
                                <p>Mumbai,maharashtra, India</p>

                                <a href="#Breastcancer" onClick={() => setCurrentPage('breastcancer')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT00128362</h4>
                            <h3>Sentinel Node Biopsy and Axillary Sampling in Operable Breast Cancer</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Cancer of the Breast</p>
                                <p>Locations</p>
                                <hr />
                                <p>Mumbai,maharashtra, India</p>

                                <a href="#Breastcancer1" onClick={() => setCurrentPage('breastcancer1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT03583944</h4>
                            <h3>A Study to Evaluate Safety, Tolerability and Efficacy of Eribulin Mesylate in Treating Adult Females With Locally Advanced or Metastatic Breast Cancer</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Cancer of the Breast</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>New Delhi, Delhi, India</li>
                                    <li>Ahmedabad, Gujarat, India</li>
                                    <li>Bangalore, Karnataka, India</li>
                                </ul>

                                <a href="#Breastcancer2" onClick={() => setCurrentPage('breastcancer2')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'breastcancer' && <Breastcancer />}
                {currentPage === 'breastcancer1' && <Breastcancer1 />}
                {currentPage === 'breastcancer2' && <Breastcancer2 />}
                {currentPage === 'Alzheimer' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT01001637</h4>
                            <h3>Efficacy and Safety of Curcumin Formulation in Alzheimer's Disease</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Alzheimer Disease</p>
                                <p>Locations</p>
                                <hr />
                                <p>Mumbai,maharashtra, India</p>

                                <a href="#Alzheimer" onClick={() => setCurrentPage('alzheimer')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT01002079</h4>
                            <h3>Drug-Drug Interaction Study With Rifampin</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Alzheimer Disease</p>
                                <p>Locations</p>
                                <hr />
                                <p>Bangalore, India</p>

                                <a href="#Alzheimer1" onClick={() => setCurrentPage('alzheimer1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT02989402</h4>
                            <h3>A Phase IV Study to Evaluate Safety, Tolerability and Effectiveness of Rivastigmine Patch 15cm2 in Patients With Severe Dementia of the Alzheimer's Type.</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Cancer of the Breast</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Mumbai, Maharashtra, India</li>
                                    <li>Bangalore, Karnataka, India</li>
                                </ul>

                                <a href="#Alzheimer2" onClick={() => setCurrentPage('alzheimer2')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'alzheimer' && <Alzheimer />}
                {currentPage === 'alzheimer1' && <Alzheimer1 />}
                {currentPage === 'alzheimer2' && <Alzheimer2 />}

                {currentPage === 'Heartfailure' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT04735354</h4>
                            <h3>Sacubitril/Valsartan in Heart Failure </h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Heart Failure</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Mumbai, Maharashtra, India</li>
                                </ul>

                                <a href="#Heartfailure" onClick={() => setCurrentPage('heartfailure')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT01434615</h4>
                            <h3>Medtronic South Asian Systolic Heart Failure Registry</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Heart Failure</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Hyderabad, Andhra Pradesh, India</li>
                                </ul>

                                <a href="#Heartfailure1" onClick={() => setCurrentPage('heartfailure1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT03163030</h4>
                            <h3>Autonomic Regulation Therapy in Heart Failure With Preserved Ejection Fraction</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Heart Failure</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Secunderabad, India</li>
                                </ul>

                                <a href="#Heartfailure2" onClick={() => setCurrentPage('heartfailure2')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'heartfailure' && <Heartfailure />}
                {currentPage === 'heartfailure1' && <Heartfailure1 />}
                {currentPage === 'heartfailure2' && <Heartfailure2 />}

                {currentPage === 'Heartstroke' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT00263393</h4>
                            <h3>Rural Andhra Pradesh trial-cardiovascular Prevention Study (RAPCAPS)</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Heart Stroke</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Bhimavaram, Andhra Pradesh, India</li>
                                </ul>
                                <a href="#Heartstroke" onClick={() => setCurrentPage('heartstroke')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT05196659</h4>
                            <h3>Collaborative Quality Improvement (C-QIP) Study</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Heart Stroke</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>New Delhi, India </li>
                                    <li>Dharwad, Karnataka, India</li>
                                </ul>
                                <a href="#Heartstroke1" onClick={() => setCurrentPage('heartstroke1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'heartstroke' && <Heartstroke />}
                {currentPage === 'heartstroke1' && <Heartstroke1 />}


                {currentPage === 'Pcos/pcod' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT02703064</h4>
                            <h3>Furocyst - Poly Cystic Ovary Syndrome Study</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>PCOS</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Lucknow, Uttar Pradesh, India</li>
                                </ul>
                                <a href="#Pcos" onClick={() => setCurrentPage('pcos')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT03579303</h4>
                            <h3>Homoeopathy and Yoga in the Treatment of Menstrual Disorders in Females With Polycystic Ovarian Syndrome</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>PCOS</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Mangalore, Karnataka, India</li>
                                </ul>
                                <a href="#Pcos1" onClick={() => setCurrentPage('pcos1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'pcos' && <Pcos />}
                {currentPage === 'pcos1' && <Pcos1 />}


                {currentPage === 'Copd' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT04020081</h4>
                            <h3>A Study to Evaluate the Effect of Yoga Exercises and Meditation on Lung Function and Quality of Life in COPD Patients.</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>COPD</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Pune, Maharashtra, India</li>
                                </ul>
                                <a href="#Copd" onClick={() => setCurrentPage('copd')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT06160687</h4>
                            <h3>PSV Versus ASV With Intellisync Mode for Delivery of NIV in AECOPD</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>COPD</p>
                                <p>Locations</p>
                                <hr />
                                <ul>
                                    <li>Chandigarh, India</li>
                                </ul>
                                <a href="#Copd1" onClick={() => setCurrentPage('copd1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'copd' && <Copd />}
                {currentPage === 'copd1' && <Copd1 />}


                {currentPage === 'Arthritis' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT01870128</h4>
                            <h3>Comparison of Three Different Treatment Regimes in Early Rheumatoid Arthritis: A Randomized Open-labelled Trial</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Arthritis</p>
                                <p>Locations</p>
                                <hr />
                                <p>New Delhi, Delhi, India</p>
                                <a href="#Arthritis" onClick={() => setCurrentPage('arthritis')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT01404429</h4>
                            <h3>Study of Two Different Starting Doses of Methotrexate When Starting Treatment in Rheumatoid Arthritis</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Arthritis</p>
                                <p>Locations</p>
                                <hr />
                                <p>Chandigarh, India</p>
                                <a href="#Arthritis1" onClick={() => setCurrentPage('arthritis1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'arthritis' && <Arthritis />}
                {currentPage === 'arthritis1' && <Arthritis1 />}


                {currentPage === 'Sponodylsis' && (
                    <div>
                        <div className="trial-card">
                            <h4>NCT03526965</h4>
                            <h3>Yoga Chikitsa for Neck Pain Caused by Cervical Spondylosis</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Spondylosis</p>
                                <p>Locations</p>
                                <hr />
                                <p>Jaipur, Rajasthan, India</p>
                                <a href="#Spondylosis" onClick={() => setCurrentPage('spondylosis')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                        <div className="trial-card">
                            <h4>NCT04113473</h4>
                            <h3>An Evaluation of Yoga Therapy for Cervical Spondylosis</h3>
                            <div>
                                <p>Conditions</p>
                                <hr />
                                <p>Spondylosis</p>
                                <p>Locations</p>
                                <hr />
                                <p>Jaipur, Rajasthan, India</p>
                                <a href="#Spondylosis1" onClick={() => setCurrentPage('spondylosis1')} className="trial-card-link">
                                    View more
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {currentPage === 'spondylosis' && <Spondylosis />}
                {currentPage === 'spondylosis1' && <Spondylosis1 />}
            </div>
        </div >
    );
};

export default NewTrial;
