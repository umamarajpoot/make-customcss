import React from 'react';
import'../style/hero.css';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-header">
        <h1>Enjoy in the best way!</h1>
        <p>Enjoy our services for your trip anytime</p>
      </div>
      <div className="search-options">
        <div className="tour-type">
          <button className="active">Public Tours</button>
          <button>Private Tours</button>
        </div>
        <div className="filters">
          <div className="filter-item">
            <label>Number of people</label>
            <select>
              <option>Choose number</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="filter-item">
            <label>Date</label>
            <input type="date" />
          </div>
          <div className="filter-item">
            <label>Time</label>
            <input type="time" />
          </div>
          <div className="filter-item">
            <label>Tour</label>
            <select>
              <option>Select Tour</option>
              <option>City Tour</option>
              <option>Adventure</option>
            </select>
          </div>
          <div className="filter-item">
            <label>Transportation</label>
            <select>
              <option>Select Transportation</option>
              <option>Bus</option>
              <option>Car</option>
            </select>
          </div>
          <button className="search-button">🔍</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
