import React from 'react';
import '../style/about.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Our team cares about your full relax</h1>
          <p>
            Relax, reset, and rejuvenate. You will be taken into a world of de-stressing
            pleasure and pampering, paired with some of the best views of the great outdoors.
          </p>
          <button className="cta-button">View Our Tour Packages</button>
        </div>
      </section>

      {/* Info Section */}
      <section className="info">
        <div className="info-content">
          <div className="image-container">
            <Image width={500} height={500} src="/a.png" alt="Lucca View" className="info-image" />
          </div>
          <div className="text-content">
            <h2>We Are The Center Of Lucca To Offer You The Best</h2>
            <p>
              An unforgettable experience in Luccas beauty. Discover packages that suit
              your needs and create memories with customized tours.
            </p>
            <div className="stats">
              <div>20+ Tours</div>
              <div>100+ Happy Clients</div>
              <div>15+ Years Experience</div>
              <div>10+ Guides</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <i className="fas fa-suitcase-rolling feature-icon"></i>
          <h3>Complete Packages For All Your Wishes</h3>
        </div>
        <div className="feature-card">
          <i className="fas fa-award feature-icon"></i>
          <h3>Over 30 Years Of Experience</h3>
        </div>
        <div className="feature-card">
          <i className="fas fa-user-tie feature-icon"></i>
          <h3>Expert Guides For You</h3>
        </div>
        <div className="feature-card">
          <i className="fas fa-money-check-alt feature-icon"></i>
          <h3>Guaranteed fun at the best price!</h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
