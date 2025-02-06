import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Adventure Backpack Pro',
    category: 'Bags',
    price: 129.99,
    image: '/images/shop/backpack.jpg',
    rating: 4.8,
    reviews: 124,
    isNew: true,
  },
  {
    id: 2,
    name: 'Lightweight Camping Tent',
    category: 'Camping',
    price: 299.99,
    image: '/images/shop/tent.jpg',
    rating: 4.9,
    reviews: 89,
    isNew: true,
  },
  {
    id: 3,
    name: 'Travel Camera Lens',
    category: 'Photography',
    price: 449.99,
    image: '/images/shop/camera-lens.jpg',
    rating: 4.7,
    reviews: 56,
    isSale: true,
    oldPrice: 599.99,
  },
  {
    id: 4,
    name: 'Hiking Boots Premium',
    category: 'Footwear',
    price: 189.99,
    image: '/images/shop/boots.jpg',
    rating: 4.6,
    reviews: 234,
  },
  {
    id: 5,
    name: 'Travel Journal Set',
    category: 'Accessories',
    price: 29.99,
    image: '/images/shop/journal.jpg',
    rating: 4.9,
    reviews: 167,
  },
  {
    id: 6,
    name: 'Solar Power Bank',
    category: 'Electronics',
    price: 79.99,
    image: '/images/shop/power-bank.jpg',
    rating: 4.5,
    reviews: 98,
    isSale: true,
    oldPrice: 99.99,
  }
];

const categories = [
  'All',
  'Bags',
  'Camping',
  'Photography',
  'Footwear',
  'Accessories',
  'Electronics'
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] -mx-[calc((100vw-100%)/2)] w-[100vw] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/shop-hero.jpg"
            alt="Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold mb-4">SHOP</h1>
          <p className="text-xl">Essential gear for your adventures</p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Filtreler ve Sıralama */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex flex-wrap justify-center gap-4">
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
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rating</option>
              </select>
            </div>
          </div>

          {/* Ürün Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Ürün Resmi */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm">
                        New
                      </span>
                    </div>
                  )}
                  {product.isSale && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm">
                        Sale
                      </span>
                    </div>
                  )}
                </div>

                {/* Ürün Bilgileri */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold group-hover:text-green-700 transition-colors">
                      {product.name}
                    </h2>
                    <div className="text-right">
                      {product.isSale && (
                        <span className="text-sm text-gray-500 line-through mr-2">
                          ${product.oldPrice}
                        </span>
                      )}
                      <span className="text-xl font-bold text-green-700">
                        ${product.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop; 