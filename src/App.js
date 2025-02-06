import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Destinations from './pages/Destinations';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Landing from './pages/Landing';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/landing" element={<Landing />} />
          {/* Diğer rotalar buraya eklenecek */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
