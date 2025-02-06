import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Blog */}
          <div>
            <div className="mb-6">
              <img src="/images/logo.svg" alt="Wanderland" className="h-12" />
            </div>
            <p className="text-gray-600 mb-4">
              Based in Utah, USA, Wanderland is a blog by Markus Thompson. His posts
              explore outdoor experiences through photos and diaries with tips & tricks.
            </p>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-bold mb-6">SUBSCRIBE TO NEWSLETTER</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your e-mail..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md transition duration-300"
              >
                SUBSCRIBE →
              </button>
            </form>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-xl font-bold mb-6">RECENT NEWS</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/blog/trip-to-iceland" className="hover:text-green-700">
                  <span className="text-gray-500">October 2, 2019</span>
                  <p>Trip to Iceland</p>
                </Link>
              </li>
              <li>
                <Link to="/blog/vanishing-island" className="hover:text-green-700">
                  <span className="text-gray-500">October 2, 2019</span>
                  <p>On the Shores of a Vanishing Island in India</p>
                </Link>
              </li>
              <li>
                <Link to="/blog/visiting-rabat" className="hover:text-green-700">
                  <span className="text-gray-500">October 2, 2019</span>
                  <p>Visiting Rabat</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Instagram Feed */}
          <div>
            <h3 className="text-xl font-bold mb-6">INSTAGRAM FEED</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="aspect-square">
                  <img
                    src={`/images/instagram-${item}.jpg`}
                    alt={`Instagram post ${item}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Wanderland. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 