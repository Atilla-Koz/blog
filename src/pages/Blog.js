import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: 'Trip to Iceland',
    category: 'Adventure',
    date: 'October 2, 2023',
    image: '/images/blog/iceland.jpg',
    excerpt: 'Exploring the breathtaking landscapes and natural wonders of Iceland...',
    author: 'Markus Thompson',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'On the Shores of a Vanishing Island in India',
    category: 'Travel Story',
    date: 'September 28, 2023',
    image: '/images/blog/india.jpg',
    excerpt: 'Discovering the unique culture and traditions of a disappearing island...',
    author: 'Alisa Michaels',
    readTime: '8 min read'
  },
  {
    id: 3,
    title: 'Visiting Rabat',
    category: 'City Guide',
    date: 'September 15, 2023',
    image: '/images/blog/rabat.jpg',
    excerpt: 'A comprehensive guide to exploring the historic city of Rabat...',
    author: 'Markus Thompson',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Hidden Gems of Budapest',
    category: 'City Guide',
    date: 'September 10, 2023',
    image: '/images/blog/budapest.jpg',
    excerpt: 'Uncovering the secret spots and local favorites in Budapest...',
    author: 'Emma Roberts',
    readTime: '7 min read'
  }
];

const categories = [
  'All',
  'Adventure',
  'Travel Story',
  'City Guide',
  'Tips & Tricks',
  'Photography'
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/blog-hero.jpg"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">BLOG</h1>
          <p className="text-xl">Stories from my adventures</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Kategori Filtreleri */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Post Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Post Resmi */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-700 px-4 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post İçeriği */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-green-700 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center">
                    <img
                      src="/images/author-avatar.jpg"
                      alt={post.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="text-gray-700">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              2
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              3
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 