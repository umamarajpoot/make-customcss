import React from 'react';
import '../style/hero.css';

const SearchBar: React.FC = () => {
  return (
    <div className="hero-container">
      {/* Header Section */}
      <div className="hero-header">
        <h1>Enjoy in the best way!</h1>
        <p>Enjoy our services for your trip anytime</p>
      </div>

      {/* Tabs Section */}
      <div className="tabs">
        <button className="tab active">Public Tours</button>
        <button className="tab">Private Tours</button>
      </div>

      {/* Filter Section */}
      <div className="filter-container">
        <div className="filter-item">
          <label>Date</label>
          <input type="date" />
        </div>
        <div className="filter-item">
          <label>Time</label>
          <select>
            <option>1:00 AM</option>
            <option>2:00 AM</option>
            <option>3:00 AM</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Tour</label>
          <select>
            <option>Lucca Bike Tour</option>
            <option>Wine Tasting in Tuscany</option>
            <option>Luxury Experience</option>
          </select>
        </div>
        <div className="filter-item">
          <label>Transportation</label>
          <select>
            <option>Minivan and Bus</option>
            <option>Transfers & NCC</option>
            <option>Luxury Experience</option>
          </select>
        </div>
        <button className="search-btn">🔍</button>
      </div>
    </div>
  );
};

export default SearchBar;
