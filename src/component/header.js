import React, { useState } from 'react';
import '../styles/header.css'
export default function Headers() {
    const dummyData = ['Delhi', 'Kolkatta', 'Banglore', 'Tamil Nadu'];
    const [selectedValue, setSelectedValue] = useState('');
    const handleDropdownChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <>
            <div className="container">
                <div className="left_container">
                    <div>
                        <a href="/" title="Logo" className="ponter-events">
                            <img width="40" height="28" alt="na-logo" src="/assets/images/nestawayIcon.ad7b1cdf.svg" className="flex" />
                            <img width="100" height="29" alt="na-logo" src="/assets/images/nestawayLogo.f0e2638c.svg" className="hidden" />
                        </a>
                    </div>
                </div>
                <div className="right_container">
                    <select className="p-2" id="dropdown" value={selectedValue} onChange={handleDropdownChange}>
                        {dummyData.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <p className="list">Rental Properties in : {selectedValue}</p>
        </>
    );
}