import React, { useState } from 'react';

const Card = ({ title, shortInfo, fullInfo, currentPage }) => {
    const [expanded, setExpanded] = useState(false);

    const handleViewMore = () => {
        setExpanded(!expanded);
    };

    const handleViewLess = () => {
        setExpanded(false);
    };

    return (
        <>
            {currentPage === 'trial-home' && (
                <div className="trial-card">
                    <h3>{title}</h3>
                    <p>{expanded ? fullInfo : shortInfo},</p>
                    {expanded ? (
                        <button onClick={handleViewLess}>View Less</button>
                    ) : (
                        <button onClick={handleViewMore}>View More</button>
                    )}
                </div>
            )}
        </>
    );
};

export default Card;
