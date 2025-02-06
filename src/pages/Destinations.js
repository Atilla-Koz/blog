import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    title: 'BUDAPEST',
    category: 'Low budget',
    image: '/images/destinations/budapest.jpg',
  },
  {
    id: 2,
    title: 'INDIA',
    category: 'Low budget',
    image: '/images/destinations/india.jpg',
  },
  {
    id: 3,
    title: 'COLORADO',
    category: 'Low budget',
    image: '/images/destinations/colorado.jpg',
  },
  {
    id: 4,
    title: 'ICELAND',
    category: 'Low budget',
    image: '/images/destinations/iceland.jpg',
  },
  {
    id: 5,
    title: 'JAPAN',
    category: 'Low budget',
    image: '/images/destinations/japan.jpg',
  },
  {
    id: 6,
    title: 'NORWAY',
    category: 'Low budget',
    image: '/images/destinations/norway.jpg',
  }
];

const Destinations = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/destinations-hero.jpg"
            alt="Destinations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">DESTINATION LIST</h1>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((destination) => (
              <Link 
                key={destination.id} 
                to={`/destinations/${destination.id}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-sm bg-white text-black px-4 py-1 rounded-sm">
                    {destination.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-2">{destination.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations; 