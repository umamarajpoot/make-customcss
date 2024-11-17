import React from 'react';
import '../style/tour.css';
import Image from 'next/image';

const tourPackages = [
  {
    title: 'Lucca Bike Tour',
    price: '34 €',
    frequency: 'EVERY DAY',
    time: '9:30 AM',
    description: 'Explore the city and its surroundings on a guided bike tour led by a local expert. Enjoy the sights and sounds of Lucca while discovering hidden gems and popular landmarks.',
    imgSrc: '/Re1.png', 
  },
  {
    title: 'Wine Tasting in Tuscany',
    price: '34 €',
    frequency: 'MONDAY',
    time: '10:30 AM',
    description: 'Experience the authentic taste of Tuscany with a wine-tasting tour in the picturesque vineyards. Learn about winemaking, sample a variety of wines, and enjoy scenic views.',
    imgSrc: '/Re2.png', 
  },
  {
    title: 'Cinque Terre Tour',
    price: '34 €',
    frequency: 'TO BE DECIDED',
    time: '10:30 PM',
    description: 'Discover the beauty of Cinque Terre with a full-day tour of its charming villages, coastal views, and vibrant local culture. An unforgettable experience awaits you.',
    imgSrc: '/Re3.png', 
  },
  {
    title: 'Siena and Surroundings',
    price: '34 €',
    frequency: 'TO BE DECIDED',
    time: '10:30 PM',
    description: 'Visit the historic city of Siena and explore the surrounding areas, rich in art, culture, and beautiful landscapes. Perfect for history and architecture lovers.',
    imgSrc: '/Re8.png',
  },
  {
    title: 'Tour of the Lucca Hills',
    price: '34 €',
    frequency: 'AT YOUR CHOICE',
    time: '10:00 AM',
    description: 'Discover the scenic beauty of the Lucca hills with a custom tour. Enjoy panoramic views, tranquil settings, and unique landscapes, ideal for nature enthusiasts.',
    imgSrc: '/Re4.png', 
  },
  {
    title: 'Gardaland, Verona',
    price: '34 €',
    frequency: 'TO BE DECIDED',
    time: '10:30 PM',
    description: 'Visit Italy’s largest and most exciting amusement park, Gardaland, in Verona. Enjoy thrilling rides, shows, and attractions suitable for all ages.',
    imgSrc: '/Re5.png',
  },
  {
    title: 'Pisa & Lucca',
    price: '34 €',
    frequency: 'TO BE DECIDED',
    time: '10:30 PM',
    description: 'Take a day trip to Pisa and Lucca, visiting famous landmarks like the Leaning Tower of Pisa and Lucca’s beautiful historical center.',
    imgSrc: '/Re6.png',
  },
  {
    title: 'Florence',
    price: '34 €',
    frequency: 'TO BE DECIDED',
    time: '10:30 PM',
    description: 'Explore the art, history, and culture of Florence, one of Italy’s most iconic cities, with visits to the Uffizi Gallery, Florence Cathedral, and more.',
    imgSrc: '/Re7.png', 
  },
];

const TourPackages: React.FC = () => {
  return (
    <div className="tour-packages-container">
      <h2>Tour Packages</h2>
      <div className="tour-cards">
        {tourPackages.map((tour, index) => (
          <div key={index} className="tour-card">
            <Image height={500} width={500} src={tour.imgSrc} alt={tour.title} className="tour-image" />
            <div className="tour-info">
              <h3>{tour.title}</h3>
              <p className="tour-price">From <span>{tour.price}</span></p>
              <div className="tour-details">
                <p><span>📅 {tour.frequency}</span> <span>⏰ {tour.time}</span></p>
                <p>{tour.description}</p>
              </div>
              <a href="#" className="read-more">Read More ➔</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
