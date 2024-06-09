import React from 'react';
import './Page2.css';

const Page2 = () => {
    return (
        <div className="outer-container">
            <div className="page-2up-container">
                <div className="section-general-2 page-2up">
                    <h1>Page 2</h1>
                    <p>Welcome to Page 2!</p>
                </div>
                <div className="gradient-overlay" id="star-gradient-overlay"></div>
            </div>
            <div className="page-2down-container stripe-container">
                <div className="section-general-2 page-2down">
                    <p>This is an example backgound image repeated.</p>
                    <p>Using CSS, and the background-clip property.</p>
                    <p>Using background-size and background-position for panning.</p>
                </div>
            </div>
        </div>
    );
};

export default Page2;
