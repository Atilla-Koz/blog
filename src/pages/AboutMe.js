import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] -ml-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/about-hero.jpg"
            alt="Nature background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">ABOUT ME</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-gray-500 text-sm">Lorem ipsum dolor sit amet</h2>
                <h3 className="text-4xl font-bold">HOW I STARTED TRAVELING</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididu ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exerc itation ullamco
                  laboris nisi. Ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <Link
                to="/blog"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-md transition duration-300"
              >
                READ MORE →
              </Link>
            </div>

            {/* Right Column - Image with Signature */}
            <div className="relative">
              <div className="relative">
                <img
                  src="/images/about-me.jpg"
                  alt="Profile"
                  className="w-full rounded-lg shadow-xl"
                />
                <img
                  src="/images/signature.png"
                  alt="Signature"
                  className="absolute -bottom-10 right-10 w-32 h-auto"
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: '150+', label: 'DESTINATIONS' },
              { number: '8+', label: 'YEARS OF TRAVELING' },
              { number: '500+', label: 'PHOTOS TAKEN' },
              { number: '1000+', label: 'COFFEE CUPS' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <h4 className="text-4xl font-bold text-green-700 mb-2">{stat.number}</h4>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Additional Content */}
          <div className="mt-20 grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">MY MISSION</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exerc itation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="space-y-4">
                {[
                  'Explore unique destinations',
                  'Share authentic experiences',
                  'Connect with local cultures',
                  'Inspire sustainable travel',
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-3">
                    <svg className="h-5 w-5 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">MY VISION</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididu ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exerc itation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Adventure', percentage: '95%' },
                  { label: 'Photography', percentage: '85%' },
                  { label: 'Writing', percentage: '90%' },
                  { label: 'Exploration', percentage: '88%' },
                ].map((skill) => (
                  <div key={skill.label} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{skill.label}</span>
                      <span className="text-green-700">{skill.percentage}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-green-700 rounded-full"
                        style={{ width: skill.percentage }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe; 