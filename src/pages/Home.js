import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Camping van in desert"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            CAMPING GUIDES FOR<br />YOUR NEXT ADVENTURE
          </h1>
          <Link
            to="/guides"
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md transition duration-300"
          >
            READ MORE
          </Link>
        </div>
        {/* Logo overlay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <img src="/images/logo.svg" alt="Wanderland" className="h-16 w-auto" />
        </div>
      </section>

      {/* Blogger Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">EXPLORING THE SUBURB SINCE 2019</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididu ut ut labore et dolore labore et dolore.
            </p>
            <Link
              to="/about"
              className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md transition duration-300"
            >
              READ MORE
            </Link>
          </div>
          <div className="relative">
            <img
              src="/images/blogger.jpg"
              alt="Blogger"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md">
              <p className="text-gray-500">Blogger</p>
              <h3 className="text-xl font-bold">ELLENA SMITH</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            FEATURED BLOG <span className="text-green-700">POSTS</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Cards */}
            {[1, 2, 3].map((post) => (
              <div key={post} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`/images/post-${post}.jpg`}
                  alt={`Blog post ${post}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">Vacation</span>
                  <h3 className="text-xl font-bold mt-2 mb-4">
                    ON THE SHORES OF A VANISHING ISLAND IN INDIA
                  </h3>
                  <p className="text-gray-600 mb-4">by Alisa Michaels</p>
                  <Link
                    to={`/blog/${post}`}
                    className="text-green-700 hover:text-green-800 font-medium"
                  >
                    READ MORE →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Categories */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {[
              { icon: '🏕️', title: 'ADVENTURE', count: 1 },
              { icon: '🏖️', title: 'BEACHES', count: 3 },
              { icon: '⛺', title: 'CAMPING', count: 2 },
              { icon: '🤝', title: 'FRIENDLY', count: 1 },
              { icon: '💰', title: 'LOW BUDGET', count: 9 },
              { icon: '⭐', title: 'POPULAR', count: 4 },
            ].map((category) => (
              <div key={category.title} className="space-y-2">
                <div className="text-3xl">{category.icon}</div>
                <h3 className="font-bold">{category.title}</h3>
                <p className="text-gray-600">{category.count} destinations</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            TRAVEL ESSENTIALS <span className="text-green-700">TIPS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <img
                src="/images/travel-tip-1.jpg"
                alt="Travel tip"
                className="w-full rounded-lg"
              />
              <div>
                <span className="text-sm text-gray-500">Travel tips</span>
                <h3 className="text-2xl font-bold mt-2">
                  MOVING TROUGH: THE EVERYDAY URBAN JUNGLE OF YOUR CITY
                </h3>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididu ut ut labore et dolore magna aliqua.
                </p>
                <Link
                  to="/tips/1"
                  className="inline-block mt-4 text-green-700 hover:text-green-800 font-medium"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="/images/travel-tip-2.jpg"
                alt="Travel tip"
                className="w-full rounded-lg"
              />
              <div>
                <span className="text-sm text-gray-500">Tips</span>
                <h3 className="text-2xl font-bold mt-2">
                  TOP HIKING TRAILS IN THE PERUVIAN AMAZON RAIN FOREST
                </h3>
                <p className="text-gray-600 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididu ut ut labore et dolore magna aliqua.
                </p>
                <Link
                  to="/tips/2"
                  className="inline-block mt-4 text-green-700 hover:text-green-800 font-medium"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="/images/newsletter.jpg"
                alt="Newsletter"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold">
                FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH{' '}
                <span className="text-green-700">NEWSLETTER</span>
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu
                tempor incididu nt ut labore et dolore minim veniam, quis nostrud nus.
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition duration-300"
                >
                  SUBSCRIBE →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 