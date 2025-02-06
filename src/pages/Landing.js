import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: '🌍',
    title: 'Explore the World',
    description: 'Discover amazing destinations and hidden gems around the globe.'
  },
  {
    icon: '📸',
    title: 'Travel Stories',
    description: 'Read inspiring stories and experiences from fellow travelers.'
  },
  {
    icon: '🎯',
    title: 'Expert Guides',
    description: 'Get professional tips and advice for your next adventure.'
  },
  {
    icon: '🛍️',
    title: 'Travel Gear',
    description: 'Find the best equipment and accessories for your journey.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Adventure Enthusiast',
    image: '/images/testimonials/user1.jpg',
    text: 'Wanderland has completely transformed how I plan my travels. The guides are incredibly detailed and helpful!'
  },
  {
    name: 'Mike Chen',
    role: 'Photography Expert',
    image: '/images/testimonials/user2.jpg',
    text: 'As a travel photographer, I find the photography tips and location guides invaluable. Highly recommended!'
  },
  {
    name: 'Emma Davis',
    role: 'Solo Traveler',
    image: '/images/testimonials/user3.jpg',
    text: "The community here is amazing! I've met so many fellow travelers and found great advice for solo trips."
  }
];

const Landing = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/landing-hero.jpg"
            alt="Landing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Journey Begins Here
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl">
            Discover amazing destinations, travel tips, and essential gear for your next adventure
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-md text-lg transition duration-300"
            >
              Explore Destinations
            </Link>
            <Link
              to="/blog"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md text-lg transition duration-300"
            >
              Read Stories
            </Link>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Wanderland</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-green-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-lg">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg">Travel Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-lg">Products Sold</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Travelers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8">
            Join our community of travelers and start exploring the world today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/destinations"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-md text-lg transition duration-300"
            >
              Start Exploring
            </Link>
            <Link
              to="/shop"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md text-lg transition duration-300"
            >
              Visit Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing; 