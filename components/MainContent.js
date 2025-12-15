// Implement the MainContent Component:
// Open MainContent.js and implement the main content area.

// MainContent.js
import React from 'react';

const MainContent = ({ selectedItem }) => {
    return (
        <div className="main-content">
            <h1>{selectedItem}</h1>
            {/* Additional content based on the selected menu item */}
        </div>
    );
};

export default MainContent;